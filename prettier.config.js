/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    overrides: [
        {
            files: '*.css',
            options: { tabWidth: 2 },
        },
        {
            files: '*.json',
            options: { trailingComma: 'none' },
        },
    ],
    plugins: ['prettier-plugin-packagejson'],
};

export default config;
