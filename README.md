# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";
export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Adding Vitest for Testing

- Install vitest, @vitest/ui and @vitest/coverage-v8 for testing and coverage reporting:

```bash
npm install vitest @vitest/coverage-v8 @vitest/ui --save-dev
```

- Update `{} package.json` scripts:

```json
// package.json
{
  "scripts": {
    //....
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  }
}
```

- Update a `vitest.config.ts` file in the root of your project with the following content:

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      reporter: ["text", "json", "html", "lcov"],
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        "**/{postcss,tailwind}.config.*",
        "**/*.d.ts",
        "**/*.types.*",
        "**/index.ts",
        "**/coverage/**",
        "**/__tests__/**",
        "**/__mocks__/**",
      ],
    },
  },
});
```

- If you want to integrate Vitest with ESLint, you can add the following configuration to your ESLint setup:

```js
// eslint.config.js
import vitest from "eslint-plugin-vitest";
export default tseslint.config({
  // other configurations...
  plugins: {
    // Add the vitest plugin
    vitest,
  },
  rules: {
    // other rules...
    // Enable vitest recommended rules
    ...vitest.configs.recommended.rules,
  },
});
```

- You can now run your tests using the following commands:

```bash
npm run test
```

- To generate a coverage report, use:

```bash
npm run test:coverage
```

to run see vitest ui

```bash
npm run test:ui
```

## GitHub Workflow Configuration

To automate the build, test, and deployment process, you can use GitHub Actions. Below is an example configuration for a GitHub Actions workflow that includes steps for testing, building, and deploying our project.
Create a file named .github/workflows/development.yml for development environment in your repository with the following content:

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages
on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["develop"]
  pull_request:
    branches: ["develop"]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write
# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: development
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Test and coverage
        run: npm run test:coverage
      - name: Analyze with SonarCloud
        uses: SonarSource/sonarcloud-github-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }} # Generate a token on Sonarcloud.io, add it to the secrets of this repo with the name SONAR_TOKEN (Settings > Secrets > Actions > add new repository secret)
        with:
          # Additional arguments for the SonarScanner CLI
          args:
            # Unique keys of your project and organization. You can find them in SonarCloud > Information (bottom-left menu)
            # mandatory
            -Dsonar.projectKey=$SONAR_PROJECT_KEY
            -Dsonar.organization=$SONAR_ORGANIZATION
            # Comma-separated paths to directories containing main source files.
            #-Dsonar.sources= # optional, default is project base directory
            # Comma-separated paths to directories containing test source files.
            #-Dsonar.tests= # optional. For more info about Code Coverage, please refer to https://docs.sonarcloud.io/enriching/test-coverage/overview/
            # Adds more detail to both client and server-side analysis logs, activating DEBUG mode for the scanner, and adding client-side environment variables and system properties to the server-side log of analysis report processing.
            #-Dsonar.verbose= # optional, default is false
          # When you need the analysis to take place in a directory other than the one from which it was launched, default is .
          projectBaseDir: .
      - name: Build
        run: npm run build:development
        env:
          VITE_APP_TITLE: ${{ vars.VITE_APP_TITLE }}
          VITE_API_URL: ${{ vars.VITE_API_URL }}
          VITE_BASE_URL: ${{ vars.VITE_BASE_URL }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist folder
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

# SonarCloud Integration

To integrate SonarCloud for code quality and security analysis, follow these steps:

- Create a SonarCloud Account

- In SonarCloud, create a new project and follow the instructions to link it to your GitHub repository.

- In your SonarCloud account, generate a new token. This token will be used to authenticate the SonarCloud analysis.

- Disabled Automatic Analysis SonarCloud

- Add the SonarCloud Token to GitHub Secrets:

  - In your GitHub repository, go to "Settings" > "Secrets and variables" > "Actions".
  - Add a new SONAR_TOKEN and paste the SonarCloud token you generated.

- Ensure the SonarCloud Scan step in your GitHub Actions workflow uses the SONAR_TOKEN secret.

  By following these steps, you can set up a CI/CD pipeline with GitHub Actions and integrate SonarCloud for continuous code quality and security analysis.
