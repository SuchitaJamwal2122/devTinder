const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from the req cookies
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    // Validate the token
    const decodedobj = await jwt.verify(token, "DEV@Tinder$790");

    const { _id } = decodedobj;
    const user = await User.findById(_id);
    // Find the user
    if (!user) {
      throw new Error("Please login again");
    }
    req.user = user;

    // Move to the request handler
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
