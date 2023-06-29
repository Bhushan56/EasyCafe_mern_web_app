const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    email:{
        type:mongoose.SchemaTypes.String,
        required: true,
    },
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
    quantity:{
        type:mongoose.SchemaTypes.Number,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.String,
        required:true,
        default: new Date(),
    }
});

module.exports=mongoose.model('Cart',CartSchema);