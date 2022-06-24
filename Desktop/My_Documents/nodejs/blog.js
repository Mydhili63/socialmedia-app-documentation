const mongoose = require('mongoose');
const schema = mongoose.schema;

const blogschema = new schema({
    title: {
        type:String,
        reqired : true
    },
    snippet :{
            type:String,
            required :true
    },
    body:{
        type : String,
        required:true
    }
},{timestamps : true});

const blog = mongoose.model('blog',blogschema);
module.exports = blog;


//getting and saving data