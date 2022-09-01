# rio-template-typescript

This is the RIO TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template @rio-cloud/cra-template-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template @rio-cloud/cra-template-typescript --use-npm

# or

yarn create react-app my-app --template @rio-cloud/cra-template-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## Folder Structure
A short explanation of what each folder is meant for:

- **src**
    - **components**: All service-specific components that are used multiple times across the service. These components are generic and reusable. They do not relate to a certain feature. Imagine a custom input component with validation that is used in various features for example in different forms.
    - **configuration**: Service configuration like login, token handling, language settings, or general setup files like the redux store
    - **data**: All relevant files for data definition to be used for the service; i.e. table configuration; initial service data or configurations, date formatter, currencies, etc.
    - **features**: The folder for all feature-relevant things. Each feature is meant to be in a dedicated subfolder that colocates feature-relevant files. Examples are header, sidebars, maps, trees, user lists, tables, forms, etc. Features are rather isolated and don't interact with other features. This way, they are easy to replace, remove, or change. Features are combined on pages.
    - **hooks**: All custom hooks used across the project
    - **layout**: The folder for the overarching layouts as defined in App.tsx
    - **pages**: The folder for all navigatable service pages. Pages are composed of features and components. For the Frontend template, these are the "intro" and "more" pages. It actually represents, what is defined in the header as routes. But this could also be sub pages in some cases.
    - **routes**: All route-related files like route definitions, route updater, route hooks etc.
    - **services**: All service API connections, redux-toolkit-query APIs or thunks, io-ts converter, model types, etc.
    - **utils**: Common utility files and functions
- **tests**
    - **integration**: all cypress integration tests
    - **utils**: utility functions that are used in integration tests

Note, there is no dedicated root folder for all the type files on purpose, as we believe that the typings should be colocated to the files where they originate from. This means, that component types belong to the respective component folder, model types belong to the respective API in the service folder, etc.

# Migration from version 1.x.x

Version 1.x.x used to work with `--scripts-version @rio-cloud/react-scripts`.
This package is no longer needed and you can use the standard `react-scripts` package:

1.
```sh
npm uninstall @rio-cloud/react-scripts
npm install --save --save-exact react-scripts@4.0.3
```

2. 
Remove all occurences of `--scripts-version @rio-cloud/react-scripts` in your `package.json` scripts.
