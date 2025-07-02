const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema =  new mongoose.Schema({

    fullname:{
        firstname:{
            type:String,
            required: true,
            minlegth:[3,'first name must be atleast of 3 characters'],
        },
        lastname:{
            type:String,
            required: true,
            minlegth:[3,'last name must be atleast of 3 characters'],
        }

    },
    email: {
        type:String,
        required:true,
        unique:true,
        minlegth:[5,'email must be atleast of 3 characters'],
         
    },

    password:{
        type:String,
        required:true,
        select: false,
    },
    socketId:{
        type:String,
    },
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword= async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel; 