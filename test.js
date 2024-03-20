import sizeLimit from "size-limit";
import filePlugin from "@size-limit/file";
import webpackPlugin from "@size-limit/webpack";
import esbuildPlugin from "@size-limit/esbuild";
import webpackCss from "@size-limit/webpack-css";

const webpackSize = await sizeLimit([filePlugin, webpackPlugin, webpackCss], ["./src/index.js"]);
const esbuildSize = await sizeLimit([filePlugin, esbuildPlugin], ["./src/index.js"]);

console.log("Size according to webpack", webpackSize);
console.log("Size according to esbuild", esbuildSize);
