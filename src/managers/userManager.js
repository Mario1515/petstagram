const User = require("../models/User");
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");
const SECRET = "ee9c95ba-0a4b-4adf-9695-22ddeb21b925";


exports.login = async (username, password) => {
    // find user by username
    const user = await User.findOne({ username });
    if(!user) throw new Error("Invalid user or password");

    // check password / validate hash
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) throw new Error("Invalid user or password");

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET);

    return token;
};

exports.register = async (userData) =>{
    const user = await User.findOne({username: userData.username});
    if(user){
        throw new Error("Username already in use");
    }

    return User.create(userData);

} 