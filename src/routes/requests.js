const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  console.log("Sending connection request");
  res.send("Connection request send");
});

module.exports = requestRouter;
