const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstname:{ type:String, required:true,},
        lastname:{type:String,required:true},
        email: {type: String, required:true, unique:true},
        password: {type:String,required:true},
        isAdmin:{
            type:Boolean,
            default: false
        },
        favorites: {type: [mongoose.Schema.Types.ObjectId],ref:'Product'},
    },{timestamps:true}
)



module.exports = mongoose.model('user',userSchema)