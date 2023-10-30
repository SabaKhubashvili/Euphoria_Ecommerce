const mongoose = require('mongoose')


const UserConfirmationsSchema = new mongoose.Schema({
    emaiL:{type:String,require:true},
    passCode:{type:String,required:true},
    }
    ,{timestamps:true})