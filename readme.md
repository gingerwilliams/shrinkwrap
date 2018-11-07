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

React Documents
<!-- https://reactjs.org/docs/forms.html -->