const http = require('http');
const fs = require('fs');
const __ = require('lodash');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once( () =>{
        console.log('hello');
    });
    greet();
    greet();
    //set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './node.js';
    switch(req.url){
        case '/';
            path += 'index.html';
             res.statusCode = 200;
            break;
        case '/about';
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me';
        
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
 }
    //send an html file
    fs.readFile('./node.js/index.html'(err,data) => {
        if (err){
            console.log(err);
        }else{
    //res.write(data);
    res.statusCode = 200;
    res.end(data);
}
})
});
server.listen(2022, 'localhost', () => {
console.log('listening for requests on port  2022');
});

//dependencies

