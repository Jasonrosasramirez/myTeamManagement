const inquirer = require("inquirer");

questionsArray = ["how is the weather today?"];

// call once somewhere in the beginning of the app
const cTable = require('console.table');
console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);



// prints
/*

name  age
----  ---
foo   10
bar   20

*/
