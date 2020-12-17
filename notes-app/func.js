// * To require MOdule 
const fs = require('fs');
const chalk = require('chalk');
// ? CHalk Module 

// const {
//     title
// } = require('process');

// ! Functions -> Add, Read, Remove, List

// * Function to list all notes

const listNotes = () => {
    const notes = load()

    if (notes.length !== 0) {
        console.log(chalk.blueBright.inverse(' All Notes '))
        console.log('')
        notes.forEach((note) => {
            console.log(`Title - ${note.title}`)
            console.log(`Title - ${note.body}`)
            console.log('')
        });

    } else {
        console.log('Error');
        console.log('No Notes Available');
    }
}

// * Function to add a note 
const addNote = (title, body) => {

    // const dataJSON = fs.readFileSync('notes.json').toString()
    // const data = JSON.parse(dataJSON)//we're calling the data from our file
    // ? so now since we'll have to use this is in the readnotes and removenotes funciton everywhere we'll simply define thhis as a function so we don't have to write it again and again : check below for "load" function 

    const notes = load()

    // ? we're calling load and loading all the notes

    // ? suppose we gotta check for a note that has the same title as the one I'm adding now -> SO it'll only add your note if the title of the new note is not same as an existing one  
    // * Filter in js 

    const noteExists = notes.filter((note) => {
        return note.title === title
        //if the new note's title is same as what we've given then it'll become true
    })
    if (noteExists.length === 0)
    //Means if length is 0 the note doesn't already exist
    { //we're just pushing the title and body here 
        notes.push({
            title,
            body
        })
        save(notes)
        console.log(chalk.green.inverse('SUCESS'));
        console.log(chalk.yellow("New Note Added"));
    } else {
        console.log("Note title already exists");
        console.log(chalk.red.inverse('Error'));
    }
}
// * Function to remove a note 
const removeNote = (title) => {
    const notes = load()
    const noteToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if (noteToKeep.length < notes.length) {
        console.log(chalk.green.inverse('SUCESS'));
        save(noteToKeep)
        console.log('Note has been removed');
    } else {
        console.log('Note Does not exist');
        console.log(chalk.red.inverse('Error'));
    }

}
// * Function to read a note 
const readNote = (title) => {
    const notes = load()
    const noteToRead = notes.filter((note) => {
        return note.title === title
    })
    if (noteToRead.length !== 0) {
        console.log(chalk.green.inverse('NOTE'));
        console.log(`Title - ${noteToRead[0].title}`)
        console.log(`Title - ${noteToRead[0].body}`)
    } else {
        console.log('Note does not exist');
        console.log(chalk.red.inverse('Error'));
    }
}


// ! function to load our file 
const load = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (error) {
        return []
    }
}

load()


// ! function to Save our file 
const save = (notes) => {
    const dataJSON = JSON.stringify(notes) //by dataJSON -> we're converting data to JSON 
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}