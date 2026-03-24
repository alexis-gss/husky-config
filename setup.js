const fs = require('fs');
const path = require('path');

// Retrieve the project root directory where the package is being installed.
const projectRoot = process.env.INIT_CWD || process.cwd();
const packageRoot = __dirname;

// Skip if running in the package itself.
if (projectRoot === packageRoot) {
  process.exit(0);
}

try {
  // Create commitlint configuration file that inherits from the package config.
  const commitlintPath = path.join(projectRoot, 'commitlint.config.cjs');
  if (!fs.existsSync(commitlintPath)) {
    fs.writeFileSync(
      commitlintPath,
      `module.exports = require('alexis-gss-husky-config/commitlint.config.cjs');\n`
    );
  }

  // Create .husky directory if it does not exist.
  const huskyDir = path.join(projectRoot, '.husky');
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
  }

  // Create commit-msg hook that validates commit messages using commitlint.
  const commitMsgPath = path.join(huskyDir, 'commit-msg');
  const commitMsgContent = `#!/bin/sh

npx --no -- commitlint --config node_modules/alexis-gss-husky-config/commitlint.config.cjs --edit $1
`;

  fs.writeFileSync(commitMsgPath, commitMsgContent);
  fs.chmodSync(commitMsgPath, 0o755);
} catch (e) {
  console.error('Error during Husky setup:', e.message);
  process.exit(1);
}