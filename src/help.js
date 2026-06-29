#!/usr/bin/env node

import { colors, validTypes, validEmojis, validMessage } from "./utils.js";

console.log(`\n  ${colors.bgBlue} INFO ${colors.reset} Commit convention from @alexis-gss/husky-config`);

console.log(`\n${colors.bold}${colors.white}Format${colors.reset} ${colors.gray}(based of https://www.conventionalcommits.org/)${colors.reset}`);
console.log(`  ${colors.cyan}<type>${colors.reset}: ${colors.yellow}[emoji](optional)${colors.reset} ${colors.magenta}<message>${colors.reset}`);
console.log(`  ${colors.gray}ex: chore: :arrow_up: upgrade composer dependencies${colors.reset}`);
console.log(`  ${colors.gray}ex: fix: 🚨 resolve php errors${colors.reset}`);
console.log(`  ${colors.gray}ex: docs: set documentation of registries${colors.reset}`);

console.log(`\n${colors.bold}${colors.white}Types${colors.reset} ${colors.gray}(based of https://www.conventionalcommits.org/)${colors.reset}`);
console.log('  ' + [...validTypes].map(t => `${colors.cyan}${t}${colors.reset}`).join(`${colors.dim}, ${colors.reset}`));

console.log(`\n${colors.bold}${colors.white}Emojis${colors.reset} ${colors.gray}(based of https://gitmoji.dev/)${colors.reset}`);

const emojiColWidth = 30;

validEmojis.forEach(emoji => {
  const codeStr = `:${emoji.code}:`;
  const codePad = ' '.repeat(Math.max(0, emojiColWidth - codeStr.length));
  console.log(`  ${emoji.icon}  ${colors.yellow}${codeStr}${colors.reset}${codePad}${colors.gray}${emoji.description}${colors.reset}`);
});

console.log(`\n${colors.bold}${colors.white}Message${colors.reset}`);
console.log(`  ${colors.magenta}Must be a string between ${validMessage.min} and ${validMessage.max} caracters.${colors.reset}`);
console.log();
