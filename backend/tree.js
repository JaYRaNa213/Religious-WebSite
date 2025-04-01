// Use import statements instead of require
import fs from 'fs';
import path from 'path';

// Directory to start from (usually 'src' or current directory '.')
const ROOT_DIR = './';

// Max depth level to traverse
const MAX_DEPTH = 5;

// Folder to ignore
const IGNORE_FOLDERS = ['node_modules', '.git', '.next', 'dist', '.cache', '.idea', '.vscode'];

// File to save tree output
// const OUTPUT_FILE = './directory_tree.txt';

// Initialize content for writing
let treeOutput = '📂 Religious website Tree structure\n\n';

// Function to print directory tree
function printTree(dirPath, prefix = '', depth = 0) {
  if (depth > MAX_DEPTH) return;

  const files = fs.readdirSync(dirPath);

  files.forEach((file, index) => {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const isLast = index === files.length - 1;
    const newPrefix = prefix + (isLast ? '└── ' : '├── ');

    // Skip ignored folders
    if (IGNORE_FOLDERS.includes(file)) return;

    // Print and save the file/folder name
    console.log(newPrefix + file);
    treeOutput += newPrefix + file + '\n';

    if (isDirectory) {
      const nextPrefix = prefix + (isLast ? '    ' : '│   ');
      printTree(filePath, nextPrefix, depth + 1);
    }
  });
}

// Start printing from the ROOT_DIR
console.log('📂 Religious website Tree structure\n');
printTree(ROOT_DIR);
console.log('\n✅ Tree generation complete!');

// // Save the output to the file
// fs.writeFileSync(OUTPUT_FILE, treeOutput);
// console.log(`\n📄 Tree saved to ${OUTPUT_FILE}`);
