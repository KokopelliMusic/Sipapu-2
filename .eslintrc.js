module.exports = {
  plugins: [
    "@typescript-eslint",
    "promise",
    "unicorn",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "tsconfig.eslint.json"
  },
  env: {
    node: true,
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/no-default-export": "off",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    // Doesn't play nice with Typescript or Node 12
    "unicorn/prefer-node-protocol": "off",
    "semi": [
      "warn",
      "never"
    ],
    "no-console": "off",
    "quotes": [
      "warn",
      "single",
    ],
    "unicorn/no-array-for-each": "off"
  },
}