import { writeFile } from "node:fs/promises";
import { checkNotExist } from "./checkNotExist.js";

const create = async () => {
  const path = new URL("./files/fresh.txt", import.meta.url);
  if (await checkNotExist(path, "FS operation failed")) {
    writeFile(path, "I am fresh and young");
  }
};

await create();
