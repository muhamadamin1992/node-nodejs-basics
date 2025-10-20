import { readdir } from "node:fs/promises";
import { checkExist } from "./checkExist.js";
const list = async () => {
  const path = new URL("./files", import.meta.url);
  if (!(await checkExist(path))) {
    return;
  }
  const res = await readdir(path, {
    withFileTypes: true,
    recursive: true,
  });
  console.log(res.map(({ name }) => name));
};

await list();
