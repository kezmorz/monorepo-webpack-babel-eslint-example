# Monorepo Example

- :package: yarn workspaces - handles the monorepo workflow, including dependency management and bootstrapping
- :book: lerna - runs scripts and manages versioning and publishing of packages
- :leftwards_arrow_with_hook: babel - converts ECMAScript 2015+ into a backwards compatible version of JavaScript
- :ok_hand: eslint - ensures code quality
- :nail_care: prettier - maintains consistent code formatting styles
- :dog: husky & lint-staged - utilise the pre-commit hook to fail fast and early


## Managing Dependencies

The monorepo workflow simplifies the management of dependencies, in particular `devDependencies`, as these are shared across all packages. This gives us the security that the same version of each `devDependency` will be used in each package.

The following dependency structure is used in this project:

- `devDependencies` are stored in the root `package.json`
- `dependencies` and `peerDependencies` are stored in the individual package workspace's `package.json` as each package is published separately

### Adding a new `devDependency`

This can be done using the following yarn command:

```sh
yarn add <package-name> --dev -W
```

### Adding a sibling package

Often in monorepos, certain packages will depend on another package within the same project. In order to ensure the package is sourced from your local development project, you must specify the correct package version. This will match the package version in the relevant package workspace `package.json`.

This can be done by updating `package.json` in the relevant package workspace as follow:

```json
  "dependencies": {
    "@org-name/example-package-test": "<package-version>"
  }
```

## Outstanding Tasks

- Add build scripts to main package.json file and also to individual package.json files
- Add publish scripts to main package.json file and also to individual package.json files
- Update .gitignore file to include all individual package files and directories