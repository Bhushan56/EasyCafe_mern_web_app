const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    pid:{
        type:mongoose.SchemaTypes.Number,
        required: true,
    },
    image:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    name:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    category:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    price:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    description:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.String,
        required:true,
        default: new Date(),
    }
});

module.exports=mongoose.model('Product',ProductSchema);