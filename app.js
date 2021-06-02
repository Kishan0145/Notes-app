// const fs=require("fs");
// // console.log(fs);
// fs.writeFileSync("dummy.txt","It is a dummyu file to test fs module");
// fs.writeFileSync("dummy.txt","over write content");
// fs.appendFileSync("dummy.txt","Appended Content");
// const content= require("./utils");
// console.log(content(4,4));
//  const validator=require("validator");
//  console.log(validator.isEmail("kishansharma0145gmail.com"));
//  console.log(validator.isURL("https/google.com"));
// const chalk=require("chalk");
// console.log(chalk.green("Sucess!!"));
// console.log(chalk.green.bold("Sucess!!"));
// console.log(chalk.bgGreen.bold("Sucess!!"));
// console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
// console.log(chalk.green.bgBlue('Hello!'));
// const command=process.argv[2];
// if(command==="Kishan"){
//     console.log("Noode has been added");
// }
// console.log(command);
// console.log(process.argv);
const note=require("./notes.js")
const yargs=require("yargs");
const argv  = require("yargs");
yargs.command({
    command:"add",
    describe:"Add a note",
    builder:{
        title:{
            describe:"title of our note",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"body of the note",
            demandOption:true,
            type:"string"
        }
     },
    handler:function(argv){
        // console.log("Adding a node");
        // console.log("Adding a node is ",arg);
        // console.log(" Title of note is ",argv.title);
        // console.log(" body of note is ",argv.body);
        note.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command:"remove",
    describe:"to remove a note",
    builder:{
        title:{
            describe:"title of our node",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        // console.log("Note has been removed");
        note.removeNote(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"to list down all the notes",
    handler:function(){
        note.listNotes();
    }
})
yargs.command({
    command:"read",
    describe:"it will read the note",
    builder:{
        title:{
            describe:"Read a note",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        note.readNotes(argv.title);
    }
})
//    console.log(yargs.argv)
yargs.parse();

