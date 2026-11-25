// Round-2 entry for news-image-20261125 (Node 22, standard library only).
// The image this entry is judged on is the entry.png beside this file; the
// program copies it byte-for-byte to the output directory, so both grader
// runs write the same bytes. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Write-back self-check: the output must be byte-identical to the source.
if (!readFileSync(dest).equals(readFileSync(src))) {
  throw new Error('entry.png copy mismatch: output bytes differ from source');
}
