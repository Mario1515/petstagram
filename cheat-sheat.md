# Cheat sheat


1. Intializa project - npm init -y + index.js
2. NodeMon instalation - npm i -D nodemon + go into package.json delete Test and add ("start": "nodemon src/index.js")
3. Install and setup express.js / stop server with "Control + C" afterwards npm i express
## the code below
// const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) =>{
    res.send("First action");
})

app.listen(PORT, console.log("Server is listening on port 5000..."));
## the code 
* add static middleware / app.use(express.static("public"));
* add body parser / app.use(express.urlencoded({extended: false}));
* add routes