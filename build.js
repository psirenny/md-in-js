/* eslint-disable import/no-extraneous-dependencies */

import asyncEach from 'async/each';
import asyncParallel from 'async/parallel';
import { readdir as fsReaddir } from 'fs';
import { copy as fsExtraCopy } from 'fs-extra';
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

    const srcLibs = _map(
      srcFile => pathJoin(srcDir, srcFile),
      srcFiles,
    );

    const bundlePlugins = [
      rollupPluginFlow({ pretty: true }),
      rollupPluginNodeResolve(),
    ];

    return asyncEach(srcFiles, (srcFile, done0) => {
      const srcPath = pathJoin(srcDir, srcFile);
      const libPath = pathJoin(libDir, srcFile);

      const bundleExternal = (lib) => (
        lib !== srcPath && _includes(lib, srcLibs)
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

      asyncParallel([
        done1 => (
          fsExtraCopy(srcPath, `${libPath}.flow`)
            .catch(err => done1(err))
            .then(() => done1())
        ),
        done1 => (
          rollupBundle(bundleCreateOpts)
            .catch(err => done1(err))
            .then((bundle) => (
              bundle.write(bundleWriteOpts)
                .catch(err => done1(err))
                .then(() => done1())
            ))
        ),
      ], done0);
    });
  });
};

build((err) => {
  if (err) throw err;
});
