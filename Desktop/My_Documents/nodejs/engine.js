const app =express();

//express app

const app = express();

//register view engine
app.set('view engine','ejs');


//listen for requests
app.listen(3000);

app.get('/',(req,res) =>{
    res.send('<p> home page</p>');

});

//routing & html
const express = require('express');
//express app
const app =express();

//listen for requests
app.listen(3000);

app.get('/',(req,res) =>{
    res.sendFile('./node.js/index.html',{root : __dirname});

});
app.get('/about',(req,res) =>{
    res.send('<p> about page</p>');
});

//redirects and 404's
const express = require('express');
//express app
const app =express();

app.set('view engine','ejs');
//listen for requests
app.listen(3000);

app.get('/',(req,res) =>{
    res.render('index');

app.get('/',(req,res) =>{
    res.sendFile('./node.js/index.html',{root : __dirname});

});
app.get('/about',(req,res) =>{
    res.send('<p> about page</p>');
});
app.get('/about,(req,res) =>{
    res.render('about');
});
app.get('/blogs/create',(req,res) =>{
    res.render('create');
});
//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
app.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});

//passing data into views
app.get('/',(req,res) =>{
    const blogs={
        {title : 'hii'},
        {title : 'hi'},
        {title : 'hloo'},
    };
    res.render('index',{title : 'home' , blogs});
});
app.get('/about,(req,res) =>{
    res.render('about',{title : 'about'}
});
app.get('/blogs/create',(req,res) =>{
    res.render('create' {title : 'blog'});
});

//partials

