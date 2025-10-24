import { cp } from "node:fs/promises";
import { checkExist } from "./checkExist.js";
import { checkNotExist } from "./checkNotExist.js";

const copy = async () => {
  const errorText = "FS operation failed";
  const source = new URL("./files/", import.meta.url);
  const dest = new URL("./files_copy/", import.meta.url);
  if (
    (await checkExist(source, errorText)) &&
    (await checkNotExist(dest, errorText))
  ) {
    cp(source, dest, { recursive: true });
  }
};

await copy();
