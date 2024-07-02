import eslint from "@eslint/js"
import tseslintParser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
      },
      parser: tseslintParser,
    },
    files: ["**/*.{ts,js}"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
]
