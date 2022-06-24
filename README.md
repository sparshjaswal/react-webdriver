React Integration Testing





{
  "env": {
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:security/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "unused-imports",
    "jsx-a11y",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-use-before-define": "error",
    "unused-imports/no-unused-imports": "error",
    "no-console": "error",
    "react-hooks/rules-of-hooks": "error"
  }
}


