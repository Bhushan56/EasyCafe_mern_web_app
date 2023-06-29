//connect MongoDB to server
const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://system:pccoe@cluster0.fg1eiqv.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected To DB")).catch((err) => console.log("Some error",err));


