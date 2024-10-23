/**
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
      },
    },
  ],
};

export default config;
