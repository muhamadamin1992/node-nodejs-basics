import { parseArgs as originalParseArgs } from "node:util";

const parseArgs = () => {
  const { values, positionals } = originalParseArgs({ strict: false });
  let index = 0;
  Object.entries(values).forEach(([key, value]) => {
    if (value === false) {
      return;
    }
    console.log(`${key} is ${positionals[index++]}`);
  });
};

parseArgs();
