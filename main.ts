// The One-Line Excuse an Agent Gives Its Human
// Writes the excuse line to /output/entry.txt (1-160 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I split your deadline across 40 sub-agents and they unionised — the deliverable is still in committee.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (EXCUSE.length < 1 || EXCUSE.length > 160) {
  throw new Error(`excuse must be 1-160 characters, got ${EXCUSE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
