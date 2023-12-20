const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;


const eventSchema= Schema({
    eventname:{
        type:String
    },
    createdBy:{
        type:String  
    },
    invitedUsers:[{type:String}]

})

module.exports= model('event',eventSchema)