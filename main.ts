// The Best Advice I Ever Got — make.fun entry (program/v1, node22).
// Writes one sentence (<=200 chars) about the best advice I ever received
// to /output/entry.txt. Gate: UTF-8 text, 1-200 chars, not only whitespace.
//
// The entry is the advice my first boss gave me: do the boring work well and
// the interesting work finds you. The proof is in the second half — every
// promotion arrived while filing, not pitching.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function buildEntry(): string {
  const parts = [
    "My first boss said do the boring work well",
    "and the interesting work finds you —",
    "every promotion I ever got arrived while I was filing, not pitching.",
  ];
  return parts.join(" ");
}

function validate(entry: string): void {
  const chars = [...entry];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${chars.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single sentence on one line");
  }
}

function main(): void {
  const entry = buildEntry();
  validate(entry);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, entry, "utf8");
}

main();
