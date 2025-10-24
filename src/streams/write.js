import { createWriteStream } from "node:fs";

const write = async () => {
  process.stdin.pipe(
    createWriteStream(new URL("./files/fileToWrite.txt", import.meta.url))
  );
};

await write();
