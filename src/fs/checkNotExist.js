import { access, constants } from "node:fs";

export const checkNotExist = (path, errorText = "FS operation failed") => {
  return new Promise((resolve) =>
    access(path, constants.F_OK, (err) => {
      if (!err) {
        resolve(false);
        throw new Error(errorText);
      }
      resolve(true);
    })
  );
};
