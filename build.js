// @flow

/* eslint-disable import/no-extraneous-dependencies */

import asyncEach from 'async/each';
import asyncParallel from 'async/parallel';
import { copy as fsExtraCopy, remove as fsExtraRemove } from 'fs-extra';
import klaw from 'klaw';
import _endsWith from 'lodash/fp/endsWith';
import _replace from 'lodash/fp/replace';
import { join as pathJoin } from 'path';
import { rollup as rollupBundle } from 'rollup';
import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginFlow from 'rollup-plugin-flow';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';

const build = (cb) => {
  const srcDir = pathJoin(__dirname, 'src');
  const libDir = pathJoin(__dirname, 'lib');
  const srcWalk = klaw(srcDir);
  const srcPaths = [];

  srcWalk.on('data', (file) => {
    if (!file.stats.isDirectory()) {
      srcPaths.push(file.path);
    }
  });

  srcWalk.on('error', (err) => cb(err));

  srcWalk.on('end', () => (
    fsExtraRemove(libDir, (removeLibDirErr) => {
      if (removeLibDirErr) {
        return cb(removeLibDirErr);
      }

      const bundlePlugins = [
        rollupPluginNodeResolve(),
        rollupPluginFlow({ pretty: true }),
        rollupPluginBabel({
          babelrc: false,
          externalHelpers: true,
          plugins: ['external-helpers', 'transform-object-rest-spread'],
        }),
      ];

      return asyncEach(srcPaths, (srcPath, done1) => {
        const libPath = _replace(srcDir, libDir, srcPath);

        if (!_endsWith('.js', srcPath)) {
          return fsExtraCopy(srcPath, libPath)
            .catch(err => done1(err))
            .then(() => done1());
        }

        const bundleExternal = (moduleId) => (
          moduleId !== srcPath
        );

        const bundleCreateOpts = {
          entry: srcPath,
          external: bundleExternal,
          plugins: bundlePlugins,
        };

        const bundleWriteOpts = {
          dest: libPath,
          format: 'es',
          sourceMap: true,
        };

        return asyncParallel([
          done2 => (
            fsExtraCopy(srcPath, `${libPath}.flow`)
              .catch(err => done2(err))
              .then(() => done2())
          ),
          done2 => (
            rollupBundle(bundleCreateOpts)
              .catch(err => done2(err))
              .then((bundle) => (
                bundle.write(bundleWriteOpts)
                  .catch(err => done2(err))
                  .then(() => done2())
              ))
          ),
        ], done1);
      }, cb);
    })
  ));
};

build((err) => {
  if (err) throw err;
});
