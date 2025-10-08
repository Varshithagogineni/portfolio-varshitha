#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking deployment readiness...\n');

// Check if main.tsx exists
const mainTsxPath = path.join(__dirname, '../src/main.tsx');
if (fs.existsSync(mainTsxPath)) {
  console.log('✅ src/main.tsx exists');
} else {
  console.log('❌ src/main.tsx not found');
  process.exit(1);
}

// Check if index.html has correct script tag
const indexPath = path.join(__dirname, '../index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');
if (indexContent.includes('src="/src/main.tsx"')) {
  console.log('✅ index.html has correct script tag');
} else {
  console.log('❌ index.html script tag issue');
  process.exit(1);
}

// Check if package.json has correct scripts
const packagePath = path.join(__dirname, '../package.json');
const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
if (packageContent.scripts && packageContent.scripts.build) {
  console.log('✅ package.json has build script');
} else {
  console.log('❌ package.json missing build script');
  process.exit(1);
}

// Check if vite.config.ts exists
const viteConfigPath = path.join(__dirname, '../vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  console.log('✅ vite.config.ts exists');
} else {
  console.log('❌ vite.config.ts not found');
  process.exit(1);
}

console.log('\n🎉 All checks passed! Ready for deployment.');
