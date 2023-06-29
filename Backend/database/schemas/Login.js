const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.String,
        required:true,
        default: new Date(),
    }
});

module.exports=mongoose.model('Login',LoginSchema);