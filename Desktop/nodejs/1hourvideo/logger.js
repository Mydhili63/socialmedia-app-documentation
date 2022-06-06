
//(function(exports,require,module,__filename,__dirname){ //here function is a module wrapper function
//creating a module
console.log(__filename);
console.log(__dirname);
var url ='http://mylogger.io/log';
function log(message){
    //send an http request
    console.log(message);
}
module.exports =log ;
//loading module

//extending event emitter
const eventemitter = require('events');

var url ='http://mylogger.io/log';

class Logger extends eventemitter{
    log(message){
        console.log('message');
        this.emit('messagelogged',{id :1,url: 'http://'});
    }
}
module.exports =Logger;

