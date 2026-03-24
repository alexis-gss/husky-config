module.exports = {
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
      "type-valid": [2, "always"],
      "emoji-valid": [2, "always"],
      "message-valid": [2, "always"],
    },
    plugins: [
      {
        rules: {
          // Validate the type of the commit.
          "type-valid": (parsed) => {
            const { header } = parsed;
            const typeRegex = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test):/;
            if (!typeRegex.test(header)) {
              return [
                false,
                "missing or invalid type \x1b[90m(build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test)\x1b[0m",
              ];
            }
            return [true];
          },
          // Validate the emoji of the commit.
          "emoji-valid": (parsed) => {
            const { header } = parsed;
            const emojiRegex = /:\s+([\p{Emoji}]|:\w+:)\s+/u;
            if (!emojiRegex.test(header)) {
              return [
                false,
                "missing emoji or gitmoji code after the colon \x1b[90m(ex: :bug: or 🐛 present here https://gitmoji.dev/)\x1b[0m",
              ];
            }
            return [true];
          },
          // Validate the message of the commit.
          "message-valid": (parsed) => {
            const { header } = parsed;
            const emojiRegex = /:\s+([\p{Emoji}]|:\w+:)\s+(.+)$/u;
            const match = header.match(emojiRegex);
            const message = match ? match[2].trim() : "";
            if (!message || message.length < 3 || message.length > 255) {
              return [
                false,
                "message must be between 3 and 255 characters \x1b[90m(ex: resolve errors)\x1b[0m",
              ];
            }
            return [true];
          },
        },
      },
    ],
  };
  