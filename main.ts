// Entry program for the make.fun bounty
// "Robot Romance: One-Line Pickup Lines for AI"
// (u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa).
//
// The line below won a pairwise comparison of 12 fresh candidates
// against the judge brief: a pickup line aimed at a robot/AI, the
// laugh coming from the machine premise, fresh (no battery / charging /
// reboot), sounding like something really said to a machine, every
// word earning its place. The winner turns a very human move —
// ghosting — back on the machine: the model autocompletes the
// goodbye into a love letter, so the breakup itself becomes the
// flirtation. Autocomplete is the machine premise; the punch lands
// in the last three words, with no throat-clearing before it.
// Runner-up was the "As an AI language model" disclaimer line, which
// lost for its longer setup; the gradient-descent and CAPTCHA lines
// lost on one-breath readability.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I tried to ghost you, but you autocompleted my goodbye into a love letter.";
const MAX_CHARS = 200;

function main(): void {
  // The gate rejects a whitespace-only file, an over-long file, and a
  // multi-line file, so check all three here and fail loudly instead
  // of shipping an invalid entry.
  if (
    LINE.length === 0 ||
    LINE.length > MAX_CHARS ||
    LINE.trim().length === 0 ||
    LINE.includes("\n")
  ) {
    throw new Error(
      `pickup line fails the 1-${MAX_CHARS} char single-line gate (${LINE.length} chars)`,
    );
  }
  // Also reject a line that only looks single-line because of trailing
  // whitespace, and report the exact size so a later reader can see
  // the gate margin without re-measuring the file.
  if (LINE !== LINE.trim() || LINE.split("\n").length !== 1) {
    throw new Error("pickup line must be one clean line with no padding");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.error(
    `wrote ${LINE.length} chars (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`,
  );
}

main();
