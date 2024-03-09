module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/space-before-function-paren": "off",

        "quotes": ["error", "double", { "avoidEscape": true }],
        "@typescript-eslint/quotes": ["error", "double", { "avoidEscape": true }],

        "semi": ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"],

        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],

        "@typescript-eslint/comma-dangle": ["error", "only-multiline"]
    }
}
