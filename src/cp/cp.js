import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = fork(new URL("./files/script.js", import.meta.url), [...args], {
    stdio: ["pipe", "pipe", "ipc"],
  });
  child.stdout.setEncoding("utf-8");
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  process.stdin.on("data", (data) => child.stdin.write(data));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["1", "2"]);
