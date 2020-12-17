// ? How to take input from user --> By reading command line arguments 
// "node app.js" --> means it is a command --> both are argument (node and app.js)
//if i write node app.js add --> then now how do I access add-> that is what we'll do now 


// ? Taking input from users using command line interface 
// ! process.argv

//  console.log(process.argv[2])
// ? It'll just print the third argument that you give 
// ? This is how we access 

// const ag = process.argv[2] // --> this is returning an array 
// const {
//     describe, require
// } = require('yargs');
//  console.log(ag,'Fathima');

// ? to require modules --> yargs 

const yargs = require('yargs');
const func = require('./func.js');

// const fs = require('fs')

//  console.log(process.argv);
//  console.log('');
//  console.log(yargs.argv);

// ? So now in the console box if you write node app.js Neeha then it'll print all arguments including your name
// ? If I write node app.js --title --> then it'll make a property  

// * Commands in a common note taking application --> add, delete, Read, List 

// Difference between command and option 
// Command (add) / option (--option )

// * Creating a custom command using yargs 
// ? Command sets the command name 
// ? Describe - Adds description to our command line 
// ? handler -> Is a function which is executed whenever command is run 
// ? So whenever add is called console.log will run 


// ? Add a note command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //So thw command won't be accepted without title, it is kinda like making it required in html forms
            type: 'string' //similar to html forms -->important to define the type because by default it'll be boolean 
        },
        body: {
            describe: 'Note Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        
        func.addNote (argv.title,argv.body)
        // console.log('adding a new note - ') // If i wanna sue this we write argv.title --> coz I wanna access it 
        //SO now in console it'll let you write the title , Amd it'll display the title
        // console.log(`Title - ${argv.title}`)
        // console.log(`Content - ${argv.body}`)
        // fs.writeFileSync('notes.txt',`Title - ${argv.title}\nBody - ${argv.body}`) // ?we're adding this so we can access the file now 
        // ? we're making a new file and sending our data there 
    }
})
// console.log(yargs.argv);
// yargs.parse() // Does the same job as console log to show/ print in console 

// ? Read a note command 

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //So thw command won't be accepted without title, it is kinda like making it required in html forms
            type: 'string' //similar to html forms -->important to define the type because by default it'll be boolean 
        }
    },
    handler: (argv) => {
        // console.log('removing a note-',argv.title)
        func.readNote(argv.title)
    }
})


// ? Remove a note command 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //So thw command won't be accepted without title, it is kinda like making it required in html forms
            type: 'string' //similar to html forms -->important to define the type because by default it'll be boolean 
        }
    },
    handler: (argv) => {
        // console.log('removing a note-',argv.title)
    func.removeNote(argv.title)
    }
})

// ? List all notes
yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: (argv) => {
        // console.log('listing a note')
        func.listNotes()
    }
})


// console.log(yargs.argv)
yargs.parse()
//We can add more options like 'title' by adding builder 