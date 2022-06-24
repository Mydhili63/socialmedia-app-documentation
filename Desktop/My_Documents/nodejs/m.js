//creating a server
const http = require('http');
const server = http.createServer((req,res) => {
    console.log('request made');
});
server.listen(300,'localhost', () =>{
    console.log('listening for requests on port 300');
});