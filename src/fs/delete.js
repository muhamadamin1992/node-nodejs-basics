import { unlink } from "node:fs/promises";
import { checkExist } from "./checkExist.js";

const remove = async () => {
  const path = new URL("./files/fileToRemove.txt", import.meta.url);
  if (await checkExist(path)) {
    unlink(path);
  }
};

await remove();
