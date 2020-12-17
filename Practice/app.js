//  ! Module System 
// npm --> a big library where people have made packages...so with module system we will use this
// ? go to npm 
// ? 3 types of modules 
// ? 1. Core Modules - Pre installed with node 
// ? 2. Local Modules - What you've made 
// ? 3. npm Modules - 3rd Party modules

// ? require function is used to get the core modules 
// const fs = require('fs')
// fs.writeFileSync('text.txt', 'This is some dummy blah')
// fs.appendFileSync('test.txt', 'This is data being append!')


// ? Importing Local modules 
// console.log ('This is app.js')
// const name = require('./text.js')
// console.log(name)
// console.log(text.add(2,5))

// ? npm Modules 
// first step -- initialising 

const validator = require('validator')
console.log(validator.isURL('https://docogen.com'))
console.log(validator.isEmail('neeha@docogen.com'))

const chalk = require('chalk');

// const { default: validator } = require('validator');

 if (validator.isEmail('neeha@docogen.com')) {
     console.log(chalk.blue.inverse('Email is valid'))
 }
 else{
     console.log(chalk.red.inverse('Email is invalid'))
 }
