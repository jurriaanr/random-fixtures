import fs from 'fs';
import path from 'path';
import { __dirname, packages } from './packages.js';

const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');

// Step 1: Read root version
const rootPkgPath = path.join(rootDir, 'package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));

const [major, minor, patch] = rootPkg.version.split('.').map(Number);
const newVersion = `${major}.${minor}.${patch + 1}`;

console.log(`📦 Bumping version to: ${newVersion}`);

// Step 2: Update root version
rootPkg.version = newVersion;
fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');

// Step 3: Update each workspace
for (const name of packages) {
  const pkgPath = path.join(packagesDir, name, 'package.json');

  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`✅ Updated ${name}/package.json`);
}
