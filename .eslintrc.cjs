module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2023",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-namespace": 0,
    "prettier/prettier": [
      "error",
      {
        printWidth: 75,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
        arrayBracketSpacing: true,
        parser: "flow"
      }
    ]
  }
}
