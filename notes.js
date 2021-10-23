const fs= require('fs')
const chalk=require('chalk')



const getNotes=function()
{
    return 'Your notes...'
}
const list=()=>{
    const notes=loadNotes()
    notes.forEach(element => {
        console.log(element.title)
        
    });
}

const removeNote=function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    


}

const addNote=function(title,body){
    const notes=loadNotes()
    const checkDuplicateTitle=notes.filter(function(note){
        return note.title===title
    })

    debugger

    if(checkDuplicateTitle.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        
    }
    else{
        console.log('taken')
    }

  
  
  
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    
    
        
     catch (error) {
        return []
    }
}
   
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote: removeNote,
    list:list
}
