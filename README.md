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
