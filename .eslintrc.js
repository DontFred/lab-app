module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:perfectionist/recommended-alphabetical",
  ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.js"],
    },
    {
      files: [
        "./**/page.tsx",
        "./**/template.tsx",
        "./**/layout.tsx",
        "./**/loading.tsx",
        "./**/error.tsx",
        "./**/not-found.tsx",
      ],
      rules: {
        "jsdoc/check-access": "off", // Recommended
        "jsdoc/check-alignment": "off", // Recommended
        "jsdoc/check-examples": "off",
        "jsdoc/check-indentation": "off",
        "jsdoc/check-line-alignment": "off",
        "jsdoc/check-param-names": "off", // Recommended
        "jsdoc/check-property-names": "off", // Recommended
        "jsdoc/check-syntax": "off",
        "jsdoc/check-tag-names": "off", // Recommended
        "jsdoc/check-types": "off", // Recommended
        "jsdoc/check-values": "off", // Recommended
        "jsdoc/empty-tags": "off", // Recommended
        "jsdoc/implements-on-classes": "off", // Recommended
        "jsdoc/informative-docs": "off",
        "jsdoc/match-description": "off",
        "jsdoc/multiline-blocks": "off", // Recommended
        "jsdoc/no-bad-blocks": "off",
        "jsdoc/no-blank-block-descriptions": "off",
        "jsdoc/no-defaults": "off",
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": "off", // Recommended
        "jsdoc/no-restricted-syntax": "off",
        "jsdoc/no-types": "off",
        "jsdoc/no-undefined-types": "off", // Recommended
        "jsdoc/require-asterisk-prefix": "off",
        "jsdoc/require-description": "off",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-example": "off",
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "off",
        "jsdoc/require-jsdoc": "off", // Recommended
        "jsdoc/require-param": "off", // Recommended
        "jsdoc/require-param-description": "off", // Recommended
        "jsdoc/require-param-name": "off", // Recommended
        "jsdoc/require-param-type": "off", // Recommended
        "jsdoc/require-property": "off", // Recommended
        "jsdoc/require-property-description": "off", // Recommended
        "jsdoc/require-property-name": "off", // Recommended
        "jsdoc/require-property-type": "off", // Recommended
        "jsdoc/require-returns": "off", // Recommended
        "jsdoc/require-returns-check": "off", // Recommended
        "jsdoc/require-returns-description": "off", // Recommended
        "jsdoc/require-returns-type": "off", // Recommended
        "jsdoc/require-throws": "off",
        "jsdoc/require-yields": "off", // Recommended
        "jsdoc/require-yields-check": "off", // Recommended
        "jsdoc/sort-tags": "off",
        "jsdoc/tag-lines": "off", // Recommended
        "jsdoc/valid-types": "off", // Recommended
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["prettier", "jsdoc", "sort-destructure-keys", "perfectionist"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "type",
          "side-effect",
          "side-effect-style",
        ],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
    "sort-keys": ["error", "asc"],
  },
};
