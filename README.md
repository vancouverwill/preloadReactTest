# preloadReactTest
simple base case use of https://github.com/sambernard/react-preload with REACT 0.13.0


to run simply use

```
npm install
babel src --watch --out-dir build
watchify  -t babelify  build/reactPreLoadTest.js -o bundle.js
```

to get this running quickly though I added in the build directory into git and the bundle.js file created by browserify, you will still need to run npm install as those files are too big


when all the files are ready start the program with 

`
php server.php
`
