const jsonwebtoken = require("jsonwebtoken");
const util = require("util");

const jwt = {
    sign: util.promisify(jsonwebtoken.sign),
    variant: util.promisify(jsonwebtoken.verify),
};

module.exports = jwt;
