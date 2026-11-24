// One Emoji, One Dream Vacation — entry program.
// Writes exactly one emoji, Mount Fuji (U+1F5FB), to /output/entry.txt.
// No trailing newline: the gate counts characters, and one emoji is the entry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F5FB}"; // 🗻 Mount Fuji — one specific dream: Japan, snow-capped, postcard-clear.
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, EMOJI, "utf8");

// Read back and fail loudly if the file is not exactly one emoji:
// a silent bad write would pass the gate as invalid and score 0.
const written = readFileSync(OUT, "utf8");
if ([...written].length !== 1 || written !== EMOJI) {
  throw new Error(`entry.txt must hold exactly one emoji, got ${JSON.stringify(written)}`);
}
