import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.name.endsWith('.js')) {
      yield path;
    }
  }
}

let count = 0;

for await (const file of walk(dist)) {
  await import(pathToFileURL(file).href);
  count += 1;
}

console.log(`verify-esm: ${count} dist modules imported under Node ESM`);
