
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="a"></head>');
    res.write('<p>hello</p>');
    res.write('<p>hello girls</p>');
    res.end();
});
server.listen(2022, 'localhost', () => {
    console.log('listening for requests on port 2022');
});

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');
   
    //send an html file
    fs.readFile('./node.js/index.html'(err,data) =>{
        if (err){
            console.log(err);
            res.end();
        
        }else{
            res.write(data);
            res.end();
        }
    })
});
server.listen(2022, 'localhost', () => {
    console.log('listening for requests on port 2022');
});

//routing
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './node.js';
    switch(req.url){
        case '/';
            path += 'index.html';
            break;
        case '/about';
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
 }
    //send an html file
    fs.readFile('./node.js/index.html'(err,data) =>{
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
    console.log('listening for requests on port 2022');
});

//status codes(response sent to browser)

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './node.js';
    switch(req.url){
        case '/':
            path += 'index.html';
             res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
 }
    //send an html file
    fs.readFile('./node.js/index.html'(err,data) =>{
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

//redirects
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

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
    fs.readFile('./node.js/index.html'(err,data) =>{
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