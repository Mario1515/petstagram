const express = require("express");

const routes = require("./routes");

const app = express();

const PORT = 5000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(PORT, console.log("Server is listening on port 5000..."));