const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  //check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //verify that token is valid if there is one
  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));

    req.user = decode.user;
    next();

    //if we get an invalid token
    //return status 401
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
