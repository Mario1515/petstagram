const User = require("../models/User");

exports.login = (username, password) => {
    
};

exports.register = async (userData) =>{
    const user = User.findOne({username: userData.username});
    if(user){
        throw new Error("Username already in use");
    }

    return User.create(userData);

} 