const mongoose = require('mongoose')


const PracUser = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    phone : {
        type:Number,
        required: true
    },
    password : {
        type:String,
        required: true
    }
},{
    timestamps:true
}
)



const UserPrac = mongoose.model('PracUser',PracUser)

module.exports = UserPrac;