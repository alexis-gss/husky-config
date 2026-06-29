import { colors } from "./utils.js";

export default ({ results }) => {
  const errors = results.flatMap(result => result.errors);
  const warnings = results.flatMap(result => result.warnings);
  const logs = [...errors, ...warnings];

  if (!logs.length) return "";

  const header = `\n  ${colors.bgRed} ERROR ${colors.reset} Commit convention from @alexis-gss/husky-config\n`;
  const messages = logs.map(log => log.message).join("\n");
  const footer =
    `\n\n${colors.bold}${colors.red}→ Found ${errors.length} problems, ${warnings.length} warnings.${colors.reset}` +
    `\n${colors.bold}${colors.gray}  Run npx husky-config to list all rules.${colors.reset}\n`;

  return header + messages + footer;
};