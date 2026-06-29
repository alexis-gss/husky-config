#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = process.env.INIT_CWD || process.cwd();
const packageRoot = path.resolve(__dirname, "..");

// Remove deprecated config.
const cleanLegacy = () => {
  const legacyCjs = path.join(projectRoot, "commitlint.config.cjs");
  if (!fs.existsSync(legacyCjs)) return;

  fs.rmSync(legacyCjs);

  const huskyDir = path.join(projectRoot, ".husky");
  if (fs.existsSync(huskyDir)) {
    fs.rmSync(huskyDir, { recursive: true, force: true });
  }
};

// Create Commitlint config.
const addConfig = () => {
  const commitlintPath = path.join(projectRoot, "commitlint.config.js");
  if (projectRoot !== packageRoot && !fs.existsSync(commitlintPath)) {
    fs.writeFileSync(
      commitlintPath,
      `export default { extends: ["@alexis-gss/husky-config/commitlint.config.js"] };\n`
    );
  }
}

// Create Husky folder.
const createHuskyFolder = () => {
  const huskyDir = path.join(projectRoot, ".husky");
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
  }
}

// Add Husky hook.
const addHook = () => {
  const huskyDir = path.join(projectRoot, ".husky");
  const commitMsgPath = path.join(huskyDir, "commit-msg");
  const commitMsgContent = `#!/bin/sh

npx commitlint --edit $1
`;
  fs.writeFileSync(commitMsgPath, commitMsgContent);
  fs.chmodSync(commitMsgPath, "0755");
}

// Init Husky.
const initHusky = () => {
  execSync("npx husky", {
    cwd: projectRoot,
    stdio: "inherit",
  });
}

try {
  cleanLegacy();
  addConfig();
  createHuskyFolder();
  addHook();
  initHusky();
} catch (e) {
  console.error("Error during Husky setup:", e.message);
  process.exit(1);
}