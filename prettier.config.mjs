export default {
    bracketSpacing: false,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    tabWidth: 4,
    printWidth: 120,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
