function sayHello(name){
    console.log('hello' + name);
}

//sayHello(' mydh ');
console.log(window);


console.log(); //global function

setTimeout()
clearTimeout();

setInterval()
clearInterval()

//undefined function
var message = '';
console.log(global.message)

//modules
var sayHello = function(){

}
window.sayHello();

console.log(module);

//creating a module- we created a file named as logger.js

//loading a module

const log = require('./logger.js');

log('message');


//path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


//os module
const os = require('os');
var totalmemory = os.totalmem();
var freememory = os.freemem();

//console.log('total memory :'+ totalmemory);

//template string
//ES6 

console.log(`total memory : ${totalmemory}`);
console.log(`free memory : ${freememory}`);



//file system module

const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);
fs.readdir('$',function(err,files){
    if(err) console.log('error',err);
    else console.log('result',files);
});


//event module
const eventemitter = require('events');
const emitter = new eventemitter();
//register a listener
emitter.on('messagelogged',function(){
    console.log('listener called');
});

//raise an event
emitter.emit('messagelogged');

//event argument
const eventemitter = require('events');
const emitter = new eventemitter();
//register a listener
emitter.on('messagelogged',function(arg) => {  //e,eventArgument
    console.log('listener called',arg);
});

//raise an event
emitter.emit('messagelogged',{id :1,url: 'http://'});

//raise : logging(data:message)

//extending event emitter
const eventemitter = require('events');
const Logger = require('./logger');

const logger = new logger();

logger.on('messagelogged',(arg) =>{
    console.log('listener called',arg);
});


logger.log('message') ;


//http module


const http = require('http');

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1 , 2 , 3]));
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000....');