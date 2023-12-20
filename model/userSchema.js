const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const userSchema= Schema({
    username:{
        type:String
    },  
    password:{
        type:String
    },
    email:{
        type: String
    }
})

module.exports = model('user', userSchema);
