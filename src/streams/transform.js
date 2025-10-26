import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  process.stdin.setDefaultEncoding("utf-8");
  await pipeline(
    process.stdin,
    new Transform({
      decodeStrings: false,
      construct(callback) {
        callback();
      },
      transform(chunk, _, callback) {
        process.stdout.write(chunk.toString().split("").reverse().join(""));
        callback();
      },
    })
  );
};

await transform();
