import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import packageJSON from './package.json';

const externals = Object.keys(packageJSON.dependencies ? packageJSON.dependencies : {});

export default [
  {
    input: "src/index.ts",
    treeshake: true,
    external: externals,
    output: [
      {
        file: "dist/utility.es.js",
        format: "es"
      }
    ],
    plugins: [
      json(),
      nodeResolve({
        preferBuiltins: true
      }),
      commonjs({
        include: "node_modules/**",
        sourceMap: true
      }),
      typescript()
    ]
  },
  {
    input: "src/index.ts",
    treeshake: true,
    external: externals,
    output: [
      {
        file: "dist/utility.cjs.js",
        format: "cjs"
      }
    ],
    plugins: [
      json(),
      nodeResolve({
        preferBuiltins: true
      }),
      commonjs({
        include: "node_modules/**",
        sourceMap: true
      }),
      typescript()
    ]
  }
]
