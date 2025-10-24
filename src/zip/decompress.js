import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  createReadStream(new URL("./files/archive.gz", import.meta.url))
    .pipe(createUnzip())
    .pipe(createWriteStream(new URL("./files/fileToCompress.txt", import.meta.url)));
};

await decompress();
