// One Star for Monday — a one-star review of Monday written as if Monday
// were a restaurant, written to /output/entry.txt.
// Gate: 1-180 UTF-8 characters, exactly one line, at most 25 words.
// The line is a constant: no input, no randomness, no network — the same
// bytes on every run, so the two grader runs are byte-identical.
// Angle: the dish itself is the Monday morning — a 9am meeting with a side
// of unread emails — so the complaint is a real diner's complaint and the
// joke could only be about Monday.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One star. The chef's special was a 9am meeting with a side of unread emails.";

const length = [...TEXT].length; // count Unicode code points, not UTF-16 units
if (length < 1 || length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}
const words = TEXT.trim().split(/\s+/).length;
if (words > 25) {
  throw new Error(`entry must be at most 25 words, got ${words}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
