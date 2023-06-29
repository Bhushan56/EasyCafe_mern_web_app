// import "./database/conn.mjs";

const express = require('express');
const index=require("./routes/index.js");
const app = express();
const cors=require("cors");
const path = require("path");

const port = 3001;

//To register middleware
app.use(cors({
  origin:["https://preeminent-yeot-55f07f.netlify.app","https://64671a23d4042f4ae816adde--preeminent-yeot-55f07f.netlify.app","https://Cafe_WebApp1.onrender.com"]
})) 
app.use(express.json());

require("./database/conn.js");

app.use(index);
// app.use(connection);

app.listen(port, (err) => {
    if (err) throw "Error";
    console.log("Listening to port ", port);
});