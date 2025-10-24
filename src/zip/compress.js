import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  createReadStream(new URL("./files/fileToCompress.txt", import.meta.url))
    .pipe(createGzip())
    .pipe(createWriteStream(new URL("./files/archive.gz", import.meta.url)));
};

await compress();
