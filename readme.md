# ShrinkWrap Packages

## Install exact version of modules:
    npm install react --save --save-exact
    npm install react —save-dev --save-exact

## Node modules have package.json files that also have dependencies:
![alt text](https://raw.githubusercontent.com/gingerwilliams/gingerwilliams.github.io/master/images/shrinkwrap/node-package_packageJson.png)

## Install Shrinkwrap to create a snapshot of the dependency tree:
    This replaces package-lock.json file with npm-shrinkwrap.json
    npm shrinkwrap —-dev


![alt text](https://raw.githubusercontent.com/gingerwilliams/gingerwilliams.github.io/master/images/shrinkwrap/shrinkwrap-dev.png)

notice: package-lock.json is replaced with npm-shrinkwrap.json. One key detail about package-lock.json is that it cannot be published.


![alt text](https://raw.githubusercontent.com/gingerwilliams/gingerwilliams.github.io/master/images/shrinkwrap/npmvet-r_Inlinetable.png)

# React Documents
<!-- https://reactjs.org/docs/forms.html -->

# Jest 
<!-- https://jestjs.io/docs/en/tutorial-react -->
The snapshot should be committed along code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with ```jest -u``` to overwrite the existing snapshot.

# React Router
- ```<HashRouter>``` ignores the history prop. To use a custom history, use ````import { Router }```` instead of ````import { HashRouter as Router }````.
-  A ```<Router>``` may have only one child element
-  This section is for everyone who ran into this problem in development using webpack-dev-server.. Just as above, what we need to do it tell Webpack Dev Sever to redirect all server requests to /index.html. There are just two properties in your webpack config you need to set to do this, publicPath and historyApiFallback.
<!-- - https://tylermcginnis.com/react-router-cannot-get-url-refresh/ -->