// import the babel plugin
var babel = require('broccoli-babel-transpiler');

// grab the source and transpile it in 1 step
plants = babel('src'); // src/*.js

module.exports = plants;