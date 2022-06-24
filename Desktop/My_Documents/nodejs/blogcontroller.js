//blog_index,blog_details,blog_create_post,blog_delete
const blog_index =(req,res)=>{
    blog.find().sort({createdAt : -1})
    .then((result) =>{
        res.render('index' {title : 'all blogs',blogs: result})
    })
    .catch((err) =>{
        console.log(err);
    })
}

const blog_details=(req,res) =>{
    const id = req.params.id;
    console.log(id);
    blog.findById(id)
    .then(result =>{
        render('details',{ blog:result , title : 'blog details'})
    })
    .catch(err =>{
        console.log(err);
    });
}

const blog_create_get = (req,res)=>{
    res.render('create',{title : 'blog'});
}

const blog_create_post= (req,res)=>{
    const blog = new blog(req.body);

    blog.save()
        .then((result) =>{
            res.redirect('blogs');
        })
        .catch((err) =>{
            console.log(err);
        })
}

const blog_delete = (req,res)=>{
    const id =req.params.id;

    blog.findByIdAndDelete(id)
     .then(result =>{
         res.json({redirect : '/blogs'})
     })
     .catch(err =>{
         console.log(err);
     })
}
module.exports ={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}