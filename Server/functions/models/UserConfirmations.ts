import mongoose from 'mongoose'


const UserConfirmationsSchema = new mongoose.Schema({
    email:{type:String,require:true},
    passCode:{type:String,required:true},
    created_at: { type: Date, default: Date.now }, 
    expiration_date: { type: Date, default: function() {
        const currentDate = new Date();
        return new Date(currentDate.getTime() + 60 * 60 * 1000); 
    }}
})


module.exports = mongoose.model('confirmations',UserConfirmationsSchema)