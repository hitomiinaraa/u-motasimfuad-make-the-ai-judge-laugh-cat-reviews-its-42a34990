// The red dot was never caught, and the void has not replied yet.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He waved the red dot for ten minutes, then put it in a drawer. I have filed a formal complaint with the void.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
