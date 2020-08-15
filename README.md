# Monorepo Example

- :package: yarn workspaces - handles the monorepo workflow, including dependency management and bootstrapping
- :dragon: lerna - runs scripts and manages versioning and publishing of packages
- :leftwards_arrow_with_hook: babel - converts ECMAScript 2015+ into a backwards compatible version of JavaScript
- :ok_hand: eslint - ensures code quality
- :nail_care: prettier - maintains consistent code formatting styles
- :dog: husky & lint-staged - utilise the pre-commit hook to fail fast and early


## Getting Started

This repository has been set up as a template repository so any new project can use this as a starting point by following the official GitHub documentation for [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

### Standard command line

Having created a new repository from this template, the standard commands can be used

```bash
$ git clone https://github.com/<username>/<repository-name>
$ cd <repository-name>
$ yarn install
```


## Structure

Repository structure explained:

```
packages/
  example-package/
    src/
      index.js
    package.json              // package specific configuration with dependencies and scripts
    webpack.config.js         // package specific webpack configuration
.eslint.json                  // eslint configuration
.gitignore                    // default GitHub gitignore file
.prettier.json                // prettier configuration
babel.config.js               // babel configuration
lerna.json                    // lerna configuration
LICENSE                       // root MIT license file used by GitHub
package.json                  // root package configuration with common workspace-wide devDependencies and scripts
README.md                     // standard root information
webpack.shared.js             // shared webpack configuration, forms basis for individual package configurations
yarn.lock                     // standard lockfile containing package install information
```


## Managing Dependencies

The monorepo workflow simplifies the management of dependencies, in particular `devDependencies`, as these are shared across all packages. This gives us the security that the same version of each `devDependency` will be used in each package.

The following dependency structure is used in this project:

- `devDependencies` are stored in the root `package.json`
- `dependencies` and `peerDependencies` are stored in the individual package workspace's `package.json` as each package is published separately

### Adding a new `devDependency`

This can be done using the following yarn command:

```sh
$ yarn add <package-name> --dev -W
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

- [ ] Add build scripts to main package.json file and also to individual package.json files
- [ ] Add publish scripts to main package.json file and also to individual package.json files
- [ ] Update .gitignore file to include all individual package files and directories