const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

// repeat Password check
userSchema.virtual("repeatPassword")
.set(function(value){
    if (this.password !== value){
        throw new Error("Password missmatch!");
    }
});

userSchema.pre("save", function(){

});

const User = mongoose.model("User", userSchema);

module.exports = User;