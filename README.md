== Steps ==

Loading resources
JUI library only requires the user to load a double package file.
You can use the theme file and otherwise, will provide additional tools to make the theme easily.

<!-- Basic style components -->
<link rel="stylesheet" href="/jui/dist/ui.min.css" />
<link rel="stylesheet" href="/jui/dist/ui-jennifer.min.css" />

<!-- Grid style components -->
<link rel="stylesheet" href="/jui-grid/dist/grid.min.css" />
<link rel="stylesheet" href="/jui-grid/dist/grid-jennifer.min.css" />
Access to the jui class must then be configured in the markup.

<body class="jui">
    ...
</body>
All components except the chart, you must first load the jQuery 1.8 or later.
And because the JUI-core and separate utility in the project must be loaded separately.

<!-- Required script files -->
<script src="jquery.min.js"></script>
<script src="/jui-core/dist/core.min.js"></script>

<!-- Basic script components -->
<script src="/jui/dist/ui.min.js"></script>

<!-- Grid script components -->
<script src="/jui-grid/dist/grid.min.js"></script>
Below is the script file need to first load the chart.

<script src="/jui-core/dist/core.min.js"></script>
<script src="/jui-chart/dist/chart.min.js"></script>

Installing in command

JUI library can be installed via the package manager like npm or bower.

npm install jui
npm install jui-core
npm install jui-grid
npm install jui-chart

To build the project
To test and merge a .less file and a .js file contained in the package, run the command below.
For reference, the Grunt module, which is a build tool, requires the installation of NodeJS. npm install grunt-cli -g
cd jui
npm install
grunt

The build & test command can be performed for each function as follows.

The grunt.js command performs merge and minify on a .js file, and grunt-test performs a component test.
In addition, the grunt-class command converts a .less file into css and performs merge and minify. grunt js
grunt css
grunt test



== git modifications ==
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
git log --oneline --graph --all --decorate
