import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const input = createReadStream(
    new URL("./files/fileToCalculateHashFor.txt", import.meta.url)
  );
  const chunks = [];

  input.on("readable", () => {
    let chunk;
    while (null !== (chunk = input.read())) {
      chunks.push(chunk);
    }
  });

  input.on("end", () => {
    const content = chunks.join("");
    hash.update(content);
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
