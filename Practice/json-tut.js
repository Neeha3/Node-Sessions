// ? Require the fs module 
const fs = require('fs');

// ? JS Object - Employee
// const employee = {
//     name : 'Neeha',
//     id : 'DOCO#005'
// }
// console.log(employee)
//  ! Now converting this to JSON

// ? JSON.STringify() -->used to convert JS Object to JSON
// const empJSON = JSON.stringify(employee)

// * Store it in a JSON file on system
// fs.writeFileSync('empData.json',empJSON)

// console.log(empJSON);

// Now if i want to access one element out of the object employee 
// and write console.log(empJSON.name) it'll show undefined 
// SO to access the elements inside emp now we use JSON.Parse 

// ? JSON.parse is used to convert JSOn back to object 

// const empOBJ = JSON.parse(empJSON)
// console.log(empOBJ.name)
// ? Now in the console if i go node json-tut.js it'll show Neeha 


// const empDataBuffer = fs.readFileSync('empData.json')
// ? We're reading data from empData.json and we're storing that binary code isndide empDataBuffer
// const empDataJSON = empDataBuffer.toString() 
// ? we need to convert the buffer into a string for that we use empDataJSON - So the data from empData.jsom comes here

// ?parsing the data 
// const empOBJ = JSON.parse(empDataJSON)
// console.log(empOBJ.name);

// ? To shorten the code we can write this as :
const empDataBuffer = fs.readFileSync('empData.json').toString()
const empOBJ = JSON.parse(empJSON)
console.log(empOBJ.name);