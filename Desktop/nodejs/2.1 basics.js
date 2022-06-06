
//printing a variable
const name = 'swathi';
console.log(name);

//greetings using strings
const greet = (name) => {
    console.log(`hello, ${name}`);
}
greet('mydh');
greet('swathi');ṇ

//global object
console.log(global);
global.setTimeout(() => {
   console.log('in the timeout'); 
}, 3000);

//setting time
setTimeout(() => {
    console.log('in the timeout'); 
    clearInterval(int);
 }, 3000);

 const int = setInterval(() =>{
     console.log('in the inetrval');
 },1000);
 
//printing directory and file name
 console.log(__dirname);
 console.log(__filename);
 
//couldn't access query selector
console.log(document.querySelector);


//modules & require



//importing files from other js files(basics2.js file)
const m = require('./basics2');
console.log(m);


 //accessing other js file
 const m = require('./basics2');
 console.log(m);
 
 //another way
 const m = require('./basics2');
 console.log(m);

 //printing at a time ages and students
 const m = require('./basics2');
 console.log(m.ages , m.students);
 

 //taking direct variables
 const {ages, students} = require('./basics2');
 console.log(students,ages);

//adding null js file then output becomes big error
const os = require('os');

//
console.log(os.platform(),os.homedir());


//file system - reading files,writing files,directories,deleting files(text file name is text.txt)
 
const fs = require('fs');
//reading file
fs.readFile('./text.txt',(err,data) => {
    if (err){
       console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

//writing file(it will update the file)
const fs = require('fs');
fs.writeFile('./text.txt','hello girls',() => {
    console.log('hii frnds');
});

//directories
const fs = require('fs');
fs.mkdir('./assests' , (err) => {             //mkdir - make directory
    if(err){
        console.log(err);
    }
    console.log('foler created');

})   //{by using this code we can create a folder}     

//folder exists
const fs = require('fs');
if(!fs.existsSync('./assests')){
const fs = require('fs');
fs.mkdir('./assests' , (err) => {             //mkdir - make directory
    if(err){
        console.log(err);
    }
    console.log('foler created');

})
}else{
    fs.readdir('./assests',(err) => {
        if(err){
            console.log(err);
        }
        console.log('foler deleted');
        
    })
}


//deleting file(before deleting check the file is exists or not)
const fs = require('fs');
if(fs.existsSync('./delete.txt' )){
    fs.unlink('./delete.txt',(err) => {
        if(err){
            console.log(err);
        }
        console.log('deleted');
    })
}

//streams and buffers(streams - start using data,before it has finished loading)

//readstream
const fs = require('fs');

const readstream = fs.createReadStream('./text.txt');
readstream.on('data',(chunk) =>{
    console.log('---------');
    console.log(chunk.toString());
});

const fs = require('fs');

const readstream = fs.createReadStream('./text.txt',{encoding : 'utf-8'});
readstream.on('data',(chunk) =>{
    console.log('---------');
    console.log(chunk);
});

//writestream
const fs = require('fs');
const readStream = fs.createReadStream('./text.txt',{encoding : 'utf-8'});
const writeStream = fs.createWriteStream('./text1.txt');
readStream.on('data',(chunk) =>{
    console.log('---------');
    console.log(chunk);
    writeStream.write('\n New\n');
    writeStream.write(chunk);       //text1 file created
});


//piping
const fs = require('fs');
const readStream = fs.createReadStream('./text.txt',{encoding : 'utf-8'});
const writeStream = fs.createWriteStream('./text1.txt');
readStream.pipe(writeStream);