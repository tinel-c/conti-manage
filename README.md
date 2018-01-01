# Used frameworks

# How to use

<<<<<<< HEAD
## Installing in command
=======
##Installing in command
>>>>>>> 7854b10ef3de91c0554b3a0366d8177cb71c39c3


JUI library can be installed via the package manager like npm or bower.

```
npm install jui
npm install jui-core
npm install jui-grid
npm install jui-chart
```

<<<<<<< HEAD
## To build the project
=======
##To build the project
>>>>>>> 7854b10ef3de91c0554b3a0366d8177cb71c39c3
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


<<<<<<< HEAD
# Git modifications
=======
#git modifications
>>>>>>> 7854b10ef3de91c0554b3a0366d8177cb71c39c3
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
git log --oneline --graph --all --decorate
