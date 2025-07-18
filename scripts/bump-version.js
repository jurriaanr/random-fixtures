import fs from 'fs';
import path from 'path';
import { __dirname, packages } from './packages.js';

const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');

const typeArg = process.argv.find((arg) => ['--major', '--minor', '--patch'].includes(arg));
const bumpType = (typeArg && typeArg.slice(2)) || 'patch';

const rootPkgPath = path.join(rootDir, 'package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));

const [major, minor, patch] = rootPkg.version.split('.').map(Number);
let newVersion;
if (bumpType === 'major') {
  newVersion = `${major + 1}.0.0`;
} else if (bumpType === 'minor') {
  newVersion = `${major}.${minor + 1}.0`;
} else {
  newVersion = `${major}.${minor}.${patch + 1}`;
}

console.log(`📦 Bumping version to: ${newVersion}`);

rootPkg.version = newVersion;
fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');

console.log(`✅ Updated package.json`);

for (const name of packages) {
  const pkgPath = path.join(packagesDir, name, 'package.json');

  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`✅ Updated ${name}/package.json`);
}
