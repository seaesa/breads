/**
 * @see https://prettier.io/docs/en/configuration.html
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
        semi: true,
      },
    },
    {
      files: '*.tsbuildinfo',
      options: {
        parser: 'json',
      },
    },
  ],
};

export default config;
