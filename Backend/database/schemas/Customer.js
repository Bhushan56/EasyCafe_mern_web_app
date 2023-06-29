//Will have mongodb schema of customer collection present in Mongodb
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    email:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    password:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    phone:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    address:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.String,
        required:true,
        default: new Date(),
    }
});

module.exports= mongoose.model('Customer',CustomerSchema);