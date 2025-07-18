import fs from 'fs';
import path from 'path';
import { __dirname, packages } from './packages.js';

const baseDir = path.resolve(__dirname, '../packages');

for (const pkg of packages) {
  const src = path.resolve(baseDir, pkg, 'README.md');

  if (fs.existsSync(src)) {
    fs.unlinkSync(src);
    console.log(`Removed ${pkg}/README.md`);
  }
}
