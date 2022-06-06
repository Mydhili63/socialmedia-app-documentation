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

app.use((req,res) =>{
    console.log('new request made:');
    console.log('host',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
});

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
    res.render('create', {title : 'blog'});
});


//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
app.use(''(req,res) => {
    res.redirect('/node.js/404.html',{root : __dirname});
});

//using next()
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

app.use((req,res,next) =>{
    console.log('new request made:');
    console.log('host',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});



app.get('/',(req,res) =>{
    const blogs={
        {title : 'hii'},
        {title : 'hi'},
        {title : 'hloo'},
    };
    res.render('index',{title : 'home' , blogs});
});
app.use((req,res,next) =>{
    console.log('in the next middleware');
    
    next();
});
app.get('/about,(req,res)' =>{
    res.render('about',{title : 'about'}
});
app.get('/blogs/create',(req,res) =>{
    res.render('create',{title : 'blog'});
});


//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
app.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});

//third party middleware

const express = require('express');
const morgan =require('morgan');
//express app
const app =express();

app.set('view engine','ejs');
//listen for requests
app.listen(2022);

app.use(morgan('dev'));

app.use((req,res,next) =>{
    console.log('new request made:');
    console.log('host',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});



app.get('/',(req,res) =>{
    const blogs={
        {title : 'hii'},
        {title : 'hi'},
        {title : 'hloo'},
    };
    res.render('index',{title : 'home' , blogs});
});
app.use((req,res,next) =>{
    console.log('in the next middleware');
    
    next();
});
app.get('/about,(req,res)' =>{
    res.render('about',{title : 'about'}
});
app.get('/blogs/create',(req,res) =>{
    res.render('create',{title : 'blog'});
});


//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
app.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});


//static files
const express = require('express');
const morgan =require('morgan');
//express app
const app =express();

app.set('view engine','ejs');
//listen for requests
app.listen(2022);

app.use(express.static('public'));  //we created a file named as style.css and added some features.that file sends to newly created folder named as public

app.use(morgan('dev'));

app.use((req,res,next) =>{
    console.log('new request made:');
    console.log('host',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});



app.get('/',(req,res) =>{
    const blogs={
        {title : 'hii'},
        {title : 'hi'},
        {title : 'hloo'},
    };
    res.render('index',{title : 'home' , blogs});
});
app.use((req,res,next) => {
    console.log('in the next middleware');
    
    next();
});
app.get('/about,(req,res') => {
    res.render('about',{title : 'about'}
});
app.get('/blogs/create',(req,res) =>{
    res.render('create',{title : 'blog'});
});


//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
app.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});