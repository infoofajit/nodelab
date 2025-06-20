// What happen when require() executed 
// require("./path")
// All the code of the module is wrapped inside a function (IIFE)

// IIFE (immediate invoked function expression)

(function(module, require) {
  // All code of module runs inside here

  // require("./multiply")
  // function multiplyNum (a, b) {
  //   console.log(a*b);
  // }

  // module.exports = {multiplyNum}

})(module, require)

// Q1. How are variable and functions private in different module
// Because of IIFE and require - all code gets wrapped up in IIFE when require module

// Q2. How do you get access to module.exports, require etc.
// Nodejs passes module as parameter to IIFE

// 5 step of mechanizm of require require("./path")
// 1. Resolving the modules -> [./localpath, .json, node:module]
// 2. Loading the module -> File content is loaded according to file type (./localpath, .json, node:module)
// 3. Wraps inside a IIFE
// 4. Eveluation -> module.exports happens
// 5. Caching
