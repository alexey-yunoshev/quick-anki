// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
    ],
    extends: [
      "airbnb-base",
      "prettier",
    ],
    "rules": {
      "import/prefer-default-export": "off",
      "no-alert": "off",
      "no-console": "error",
      "no-restricted-syntax": ["error", "WithStatement"],
      semi: "error",
    },
    overrides: [
      {
        files: ["*/**/*.ts"],
        extends: [
          "airbnb-typescript/base",
          "plugin:@typescript-eslint/recommended",
        ],
  
        "rules": {
          "@typescript-eslint/no-explicit-any": "error",
          "@typescript-eslint/no-unused-vars": "error",
          "@typescript-eslint/quotes": ["error", "double"],
        },

        parserOptions: {
          project: ["./tsconfig.json"],
        },
      },
    ],
    env: {
      "browser": true,
      "es6": true,
    }
  };