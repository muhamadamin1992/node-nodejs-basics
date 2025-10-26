import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const max = availableParallelism();
  const allData = new Array(max).fill();
  let leftWorkers = max;
  const workerUrl = new URL("./worker.js", import.meta.url);
  for (let i = 0; i < max; i++) {
    const worker = new Worker(workerUrl, {
      workerData: i + 10,
    });
    worker.on("message", (data) => {
      allData[i] = {
        status: "resolved",
        data,
      };
    });
    worker.on("error", () => {
      allData[i] = {
        status: "error",
        data: null,
      };
    });
    worker.on("exit", (code) => {
      leftWorkers--;
      if (code !== 0) {
        allData[i] = {
          status: "error",
          data: null,
        };
      }
      if (leftWorkers === 0) {
        console.log(allData);
      }
    });
  }
};

await performCalculations();
