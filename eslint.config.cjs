module.exports = {
  ignores: [
    '**/dist/**',
    '**/build/**',
    '**/out/**',
    '**/.next/**', // Next.js specific

    '**/node_modules/**',
    '**/vendor/**', // For PHP or other ecosystems

    '**/logs/**',
    '**/*.log',
    '**/tmp/**',
    '**/.cache/**',
    'prettier.config.cjs',
    '*.config.js',
    'prettier.config.js',
    'webpack.config.js',
    'vite.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'tsconfig.json',
    '.eslintrc.js',
    '.prettierrc',
    '.babelrc',

    '**/*.env',
    '**/*.env.*',

    '**/coverage/**', // Coverage reports
    '**/__tests__/**',
    '**/__mocks__/**',
    '**/*.test.js',
    '**/*.spec.js',
    '**/jest.config.js',

    '**/*.min.js', // Minified files
    '**/*.d.ts', // TypeScript type definition files
    '**/yarn.lock', // Yarn lockfile
    '**/package-lock.json', // npm lockfile
    '**/pnpm-lock.yaml', // pnpm lockfile
    '**/.DS_Store', // macOS metadata
    '**/Thumbs.db', // Windows metadata
    '**/.idea/**', // IntelliJ IDE files
    '**/.vscode/**', // VSCode workspace settings
    '**/.husky/**', // Husky hooks
  ],
};
