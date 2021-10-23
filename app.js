const chalk=require('chalk')
const { demandOption } = require('yargs')
const yargs=require('yargs')
const notes=require('./notes.js')


yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        },
    },

    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }

})

yargs.command({
    command:'list',
    describe:'list a note',
   handler(){
       notes.list()
   }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})


console.log(yargs.argv)





// const msg=getNotes()

// console.log(msg)

// console.log(chalk.bgRed.blue.bold('Hello world!'))

// console.log(process.argv[2])
// //console.log()


//console.log(validator.isEmail('mr.hoangenglishmail.com'))



// const them=
// require('./utils.js')

// const sum=them(4,-2)

// console.log(sum)