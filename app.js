
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
yargs.parse();

