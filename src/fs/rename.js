import { rename as nodeRename } from "node:fs";
import { checkExist } from "./checkExist.js";
import { checkNotExist } from "./checkNotExist.js";

const rename = async () => {
  const oldName = new URL("./files/wrongFilename.txt", import.meta.url);
  const newName = new URL("./files/properFilename.md", import.meta.url);
  if ((await checkExist(oldName)) && (await checkNotExist(newName))) {
    nodeRename(oldName, newName, () => {});
  }
};

await rename();
