[![Build Status](https://travis-ci.org/tinel-c/team-manager.svg?branch=master)](https://travis-ci.org/tinel-c/team-manager)
[![Documentation Status](https://readthedocs.org/projects/team-manager/badge/?version=latest)](http://team-manager.readthedocs.io/en/latest/?badge=latest)

#Set up sublime
[Sublime packages](http://scottksmith.com/blog/2014/09/29/3-essential-sublime-text-plugins-for-node-and-javascript-developers/)


# Used frameworks

[JUI](http://uiplay.jui.io)
[Express](https://expressjs.com/)
[Mocha](https://mochajs.org/)
Unitary testing for the application.
[Chai](http://chaijs.com/)
Unitary testing for the application.
[Stylus](http://stylus-lang.com/)
[Pug](https://pugjs.org/)
Ease the writting of html code
[Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)
Used to implement model controller view scheme.
[Mongoose history](https://www.npmjs.com/package/mongoose-history)
Used to save each modification to the database.
[ActiveDirectory](https://github.com/gheeres/node-activedirectory)
Add active directory logon to the application.
.NET Framework 2.0 SDK is required for this item.

-- not implemented yet.

# Start-up guides

Default
```
set DEBUG=myapp:* & npm start
```

For debug using supervisor
``` 
set DEBUG=myapp:* & node_modules\.\.bin\supervisor.cmd --inspect .\bin\www
```

# Node JS configuration 

Check package.json file.

```
  "dependencies": {
    "body-parser": "^1.18.2", - 
    "chai": "^4.1.2",         - unitary testing
    "cookie-parser": "^1.4.3",- cookie processing
    "debug": "~2.6.9",        - debug utility
    "express": "^4.16.2",     - express 
    "express-session": "^1.15.6", - express module
    "formidable": "^1.1.1",   - file uploads
    "html2pug": "^2.0.1",     - pug converter from html
    "jquery": "^3.2.1",
    "jquery-ui": "^1.12.1",
    "jquery-ui-dist": "^1.12.1",
    "method-override": "^2.3.10",
    "mocha": "^4.1.0",          - unitary testing
    "mongodb-stitch": "^2.3.1", - mongo db
    "mongoose": "^5.0.1",       - mongo db
    "morgan": "~1.9.0",
    "multer": "^1.3.0",
    "nib": "^1.1.2",
    "node-xlsx": "^0.11.2",     - xls parser
    "pug": "2.0.0-beta11",      - simple html view language
    "serve-favicon": "~2.4.5",
    "stylus": "^0.54.5",
    "supervisor": "^0.12.0"     - automatic restart of app due to development
  },
```

# Testing
```
https://travis-ci.org/tinel-c/team-manager
```

# Deployment
```
https://shrouded-atoll-29735.herokuapp.com/
```

# Database

```
https://stitch.mongodb.com/
```

# Debugging

Connect chrome: 

```
chrome://inspect/
```

point to the adreess given
```
Starting child process with 'node --inspect .\bin\www'
Watching directory 'D:\nodejs\team-manager' for changes.
Press rs for restarting the process.
Debugger listening on ws://127.0.0.1:9229/76d61db6-3bef-4a2b-894b-081519699bfc
For help see https://nodejs.org/en/docs/inspector
  myapp:server Listening on port 3000 +0ms
Debugger attached.
```

# Git modifications

git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
git log --oneline --graph --all --decorate


# Resources
http://mherman.org/blog/2013/10/20/handling-ajax-calls-with-node-dot-js-and-express-scraping-craigslist/
https://coligo.io/building-ajax-file-uploader-with-node/