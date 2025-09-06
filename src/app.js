const express = require("express");
const connectDB = require("./config/database");
const app = express(); //instance of an expressjs application
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating a new instance of the User model
  const user = new User(req.body);
  try {
    await user.save(); // Returns you a promise
    res.send("User added successfully.");
  } catch (err) {
    res.status(400).send("Error saving the user." + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established....");
    app.listen(3000, () => {
      console.log("server is up and running on port 3000");
    }); // 3000 is the port
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
