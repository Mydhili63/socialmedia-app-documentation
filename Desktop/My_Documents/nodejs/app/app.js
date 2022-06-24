const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blogroutes');
const { result } = require('lodash');
//express app
const app =express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://mydh63:Mydhiliy63@cluster0.rcgbksg.mongodb.net/cluster0?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.set('view engine','ejs');
//listen for requests


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

/*app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog',
        snippet:'about my new blog',
        body:'more about my new blog'
    });
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});
app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
})
app.get('/single-blog',(req,res)=>{
    Blog.findById('62b33532c3663d2c3c484673')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
})
*/

app.get('/',(req,res) =>{
    res.redirect('/blogs');
    /*const blogs=[
        {title:'hi',snippet:'bdksjbdkjbdjkd'},
        {title:'hii',snippet:'bdksjbdkjbdjkd'},
        {title:'hiii',snippet:'bdksjbdkjbdjkd'},
    ];
    res.render('index.ejs',{title:'Home',blogs });*/
});



app.get('/about',(req,res) =>{
    //res.send('<p> about page</p>');
    res.render('about.ejs',{title:'About'});
});

app.use('/blogs',blogroutes);

//404 page
app.use((req,res) =>{
    res.status(404).render('404.ejs',{title:'Page not found'});
});
