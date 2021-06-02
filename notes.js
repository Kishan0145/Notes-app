const chalk = require("chalk");
const fs = require("fs");
const addNote = (noteTitle, noteBody) => {
    const note = loadNotes();
    const data = {
        title: noteTitle,
        body: noteBody
    };

    // let bool=false;
    // console.log(note);
    // note.forEach(element => {  
    //     if(element.title===noteTitle)
    //     {
    //         bool=true;
    //     }      
    // });
    // if(bool==true)
    // {
    //     console.log("Title is already present");
    // }
    // else{
    //     // console.log("run");
    //     note.push(data);
    //     saveData(note);     
    // }
    const duplicate = note.map((element) => {
        return element.title == noteTitle
    })
    // console.log(duplicate);
    if (duplicate.includes(true)) {
        console.log(chalk.bgBlue("Title is already present"));
    }
    else {
        note.push(data);
        saveData(note);
        console.log(chalk.bgGreen("Note has been added"));
    }

    // console.log(noteArr);
}
const loadNotes = () => {
    try {
        const noteBuff = fs.readFileSync("notes.json");
        const noteJson = noteBuff.toString();
        return JSON.parse(noteJson);
    }
    catch {
        return [];
    }
}
const saveData = (note) => {
    var noteJson = JSON.stringify(note)
    fs.writeFileSync("notes.json", noteJson);
    // console.log(noteJson);

}
const removeNote = (noteTitle) => {
    let jsonObj = loadNotes();
    const bool = jsonObj.map((element) => {
        return element.title == noteTitle;
    })
    const IndexOfDeletedElment = bool.indexOf(true);
    if (IndexOfDeletedElment != -1) {
        jsonObj.splice(IndexOfDeletedElment, 1)
        // console.log(jsonObj);
        const AfterDeletion = JSON.stringify(jsonObj);
        fs.writeFileSync("notes.json", AfterDeletion)
        console.log(chalk.bgGreen("The note has been removed"));
    }
    else {
        console.log(chalk.bgRed("No note is removed"));
    }
}

const listNotes = () => {
    const notes=loadNotes();
    notes.forEach(element => {
        console.log(chalk.bgBlue(`title:${element.title}   body:${element.body}`));
    });
}
const readNotes=(noteTitle)=>{
    const notes=loadNotes();
    // notes.forEach((element)=>{
    //     console.log(`${element.title} ${noteTitle}`);
    // })
    const match=notes.find((element)=>{
      return element.title==noteTitle})
    if(match==undefined)
    {
        console.log(chalk.bgRed("No note is found"));
    }
    else{
        console.log(chalk.inverse("Required note is "));
        console.log(chalk.bgGreen(match.title),match.body);
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}