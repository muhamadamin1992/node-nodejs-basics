import { createReadStream } from "node:fs";

const read = async () => {
  createReadStream(new URL("./files/fileToRead.txt", import.meta.url))
    .on("data", (chunk) => {
      process.stdout.write(chunk);
    })
    .on("end", () => process.stdout.write("\n"));
};

await read();
