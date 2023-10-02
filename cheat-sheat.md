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

4. Add static resources / added CSS and Images to Public folder 
5. Add views folder with ready htmls
6. Add view engine which is express handlebars
    * install ('first stop the server then npm i express-handlebars)
    * add to express
    * config exstenion
    * code below:
    app.engine("hbs", handlebars.engine({
    extname: "hbs",
    }));
    app.set("view engine", "hbs");	
    * end
    * config views folder (only for src)
    * add main layout
    * add partials folder+ logo to lead to home 
    * fix nav to home 
    * render home page / -> fix styles and images (remove static name)
7. Add controllers folder with home controller
8. Add DB
* install mongoose ( stop the server and write - npm i mongoose)
* connect db 
* CODE BELOW
mongoose.connect("mongodb://127.0.0.1:27017/petstagram")
.then(() => console.log("DB Connected Succesfully"))
.catch(error => console.log("DB Error: " + error));
* END
9. Authentication
    * add user controller
    * add controller to routes
    * fix header navigation to login, register and logout
    * render login page
    * render register page
10. Add user model in models/User.js 
    * add unique index for username
    * validate repeat password
11. Modify login and register forms.
12. Add login and register post actions
13. Add user manager
    * add login and register methods (empty) in userManager;
    * add register methods.
    * validate if user already exists 
14. Hash passwrd 
    * install bcrypt (npm i bcrypt)    \