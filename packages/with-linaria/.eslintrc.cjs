module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [0],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "arrow-body-style": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
  },
  ignorePatterns: ["*.config.ts", "*.config.js", ".eslintrc.cjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
