# Used frameworks

# How to use

## Installing in command

JUI library can be installed via the package manager like npm or bower.

```
npm install jui
npm install jui-core
npm install jui-grid
npm install jui-chart
```

## To build the project

To test and merge a .less file and a .js file contained in the package, run the command below.
For reference, the Grunt module, which is a build tool, requires the installation of NodeJS. npm install grunt-cli -g

```
cd node_modules/jui
npm install
sudo npm install -g grunt-cli
grunt
```

The build & test command can be performed for each function as follows.

The grunt.js command performs merge and minify on a .js file, and grunt-test performs a component test.
In addition, the grunt-class command converts a .less file into css and performs merge and minify. grunt js

```
grunt css
grunt test
```

# Git modifications

git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
git log --oneline --graph --all --decorate
