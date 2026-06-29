import { colors, validTypes, validEmojis, validMessage } from "./src/utils.js";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  formatter: path.resolve(__dirname, "./src/formatter.js"),
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Rule name: [
    // 0/1/2 (ignore/warning/error) => return the type,
    // "never"/"always" => application of the rule,
    // ].
    "type-enum": [0],
    "type-case": [0],
    "type-empty": [0],
    "subject-empty": [0],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [0],
    "header-max-length": [0],
    "type-valid": [2, "always"],
    "emoji-valid": [2, "always"],
    "message-valid": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "type-valid": (parsed) => {
          const { header } = parsed;
          const typeRegex = new RegExp(`^(${validTypes.join("|")}):`);
          if (!typeRegex.test(header)) {
            const list = validTypes.join(`, `);

            const firstWord = header.match(/^([^\s:]+)/)?.[1] ?? "";
            const isValidTypeWithoutColon = validTypes.includes(firstWord);

            const typeMatch = header.match(/^([^:]+):/);
            const received = typeMatch ? typeMatch[1].trim() : header;

            if (isValidTypeWithoutColon) {
              return [
                false,
                `\n${colors.bold}${colors.red}→ Invalid format${colors.reset}\n` +
                `  ${colors.dim}received:${colors.reset} ${colors.white}${received}${colors.reset}\n` +
                `  ${colors.dim}expected:${colors.reset} ${colors.cyan}<type>${colors.reset}: ${colors.yellow}[emoji](optional)${colors.reset} ${colors.magenta}<message>${colors.reset}`,
              ];
            }

            return [
              false,
              `\n${colors.bold}${colors.red}→ Invalid type${colors.reset}\n` +
              `  ${colors.dim}received:${colors.reset} ${colors.white}${received}${colors.reset}\n` +
              `  ${colors.dim}expected:${colors.reset} ${colors.cyan}${list}.${colors.reset}`,
            ];
          }
          return [true];
        },
        "emoji-valid": (parsed) => {
          const { header } = parsed;
          const codeMatch = header.match(/:\s+:(\w+):/u);
          const unicodeMatch = header.match(/:\s+([\p{Emoji_Presentation}\p{Extended_Pictographic}])/u);
          if (!codeMatch && !unicodeMatch) return [true];

          if (codeMatch) {
            const code = codeMatch[1];
            if (!validEmojis.map(e => e.code).includes(code)) {
              return [
                false,
                `\n${colors.bold}${colors.red}→ Invalid emoji${colors.reset}\n` +
                `  ${colors.dim}received:${colors.reset} ${colors.white}:${code}:${colors.reset}\n` +
                `  ${colors.dim}expected:${colors.reset} ${colors.yellow}npx @alexis-gss/husky-config to get the list.${colors.reset}`,
              ];
            }
          }

          if (unicodeMatch && !codeMatch) {
            const emoji = unicodeMatch[1];
            if (!validEmojis.map(e => e.icon).includes(emoji)) {
              return [
                false,
                `\n${colors.bold}${colors.red}→ Invalid emoji${colors.reset}\n` +
                `  ${colors.dim}received:${colors.reset} ${colors.white}${emoji}${colors.reset}\n` +
                `  ${colors.dim}→${colors.reset} ${colors.yellow}npx @alexis-gss/husky-config to get the list.${colors.reset}`,
              ];
            }
          }

          return [true];
        },
        "message-valid": (parsed) => {
          const { header } = parsed;
          const withEmoji = header.match(/:\s+(?:[\p{Emoji_Presentation}\p{Extended_Pictographic}]|:\w+:)\s+(.+)$/u);
          const withoutEmoji = header.match(/:\s+(?!:)(.+)$/u);
          const message = (withEmoji?.[1] ?? withoutEmoji?.[1] ?? "").trim();

          if (!message || message.length < validMessage.min || message.length > validMessage.max) {
            return [
              false,
              `\n${colors.bold}${colors.red}→ Invalid message${colors.reset}\n` +
              `  ${colors.dim}received:${colors.reset} ${colors.white}${message || "(empty)"}${colors.reset}\n` +
              `  ${colors.dim}expected:${colors.reset} ${colors.magenta}between ${validMessage.min} and ${validMessage.max} characters (currently ${message.length}).${colors.reset}`,
            ];
          }
          return [true];
        },
      },
    },
  ],
};
