[![Build Status](https://travis-ci.org/tinel-c/team-manager.svg?branch=master)](https://travis-ci.org/tinel-c/team-manager)

# Used frameworks

[JUI](http://uiplay.jui.io)
[Express](https://expressjs.com/)
[Mocha](https://mochajs.org/)
[Chai](http://chaijs.com/)
[Stylus](http://stylus-lang.com/)
[Pug](https://pugjs.org/)


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