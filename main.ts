import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines — a queue, explained to a 10-year-old.
// Line 1: one vivid sentence, one analogy (a queue as a caterpillar of
// people). Line 2: why the analogy works — what it maps, what it leaves out.
const LINE_1 =
  "A queue is a caterpillar made of people, shuffling forward one tiny step at a time while everyone watches the back of the person ahead.";
const LINE_2 =
  "It maps the slow shuffle and the single direction everyone faces, but leaves out that a real caterpillar knows exactly where it is going, while we are only hoping the line moves at all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE_1 + "\n" + LINE_2 + "\n", "utf8");
