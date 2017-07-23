/* eslint-disable import/no-extraneous-dependencies */

import asyncEach from 'async/each';
import asyncParallel from 'async/parallel';
import { readdir as fsReaddir } from 'fs';
import { copy as fsExtraCopy, remove as fsExtraRemove } from 'fs-extra';
import _endsWith from 'lodash/fp/endsWith';
import _includes from 'lodash/fp/includes';
import _map from 'lodash/fp/map';
import { join as pathJoin } from 'path';
import { rollup as rollupBundle } from 'rollup';
import rollupPluginFlow from 'rollup-plugin-flow';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';

const build = (cb) => {
  const srcDir = pathJoin(__dirname, 'src');
  const libDir = pathJoin(__dirname, 'lib');

  return fsReaddir(srcDir, (readSrcDirErr, srcFiles) => {
    if (readSrcDirErr) {
      return cb(readSrcDirErr);
    }

    return fsExtraRemove(libDir, (removeLibDirErr) => {
      if (removeLibDirErr) {
        return cb(removeLibDirErr);
      }

      const srcPaths = _map(
        srcFile => pathJoin(srcDir, srcFile),
        srcFiles,
      );

      const bundlePlugins = [
        rollupPluginFlow({ pretty: true }),
        rollupPluginNodeResolve(),
      ];

      return asyncEach(srcFiles, (srcFile, done1) => {
        const srcPath = pathJoin(srcDir, srcFile);
        const libPath = pathJoin(libDir, srcFile);

        if (!_endsWith('.js', srcFile)) {
          return fsExtraCopy(srcPath, libPath)
            .catch(err => done1(err))
            .then(() => done1());
        }

        const bundleExternal = (moduleId) => (
          moduleId !== srcPath && _includes(moduleId, srcPaths)
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
    });
  });
};

build((err) => {
  if (err) throw err;
});
