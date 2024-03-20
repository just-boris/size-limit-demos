import sizeLimit from "size-limit";
import filePlugin from "@size-limit/file";
import webpackPlugin from "@size-limit/webpack";
import esbuildPlugin from "@size-limit/esbuild";
import webpackCss from "@size-limit/webpack-css";

async function testSizes(entry) {
  console.log("testing", entry);
  const webpackSize = await sizeLimit([filePlugin, webpackPlugin, webpackCss], [entry]);
  const esbuildSize = await sizeLimit([filePlugin, esbuildPlugin], [entry]);

  console.log("Size according to webpack", webpackSize);
  console.log("Size according to esbuild", esbuildSize);
}

await testSizes("./src/index.js");
await testSizes("./src/pure.js");
await testSizes("./src/styles.css");
