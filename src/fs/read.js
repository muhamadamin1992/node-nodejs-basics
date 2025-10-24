import { readFile } from "node:fs/promises";
import { checkExist } from "./checkExist.js";

const read = async () => {
  const path = new URL("./files/fileToRead.txt", import.meta.url);
  if (!checkExist(path)) {
    return;
  }
  const res = await readFile(path, { encoding: "utf8" });
  console.log(res);
};

await read();
