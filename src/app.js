const express = require("express");
const connectDB = require("./config/database");
const app = express(); //instance of an expressjs application
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Suchita",
    lastName: "Jamwal",
    emailId: "suchita7j@gmail.com",
    password: "suchita@123",
    age: 25,
    gender: "female",
  };
  // Creating a new instance of the User model
  const user = new User(userObj);
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

app.get("/admin/getAllData", (req, res) => {
  // Logic to Check if the request is authorised
  // Logic of fetching all data
  const token = "xyz1"; //req.body?.token;
  const isAdminAuthorised = token === "xyz";
  isAdminAuthorised
    ? res.send("All Data sent")
    : res.status(401).send("Unauthorised request");
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic to delete a user

  res.send("Deleted a user");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("Something went wrong");
  }
});

app.use(
  "/user",
  (req, res, next) => {
    //Route Handler

    next();
    res.send("Route Handler 1");
  },
  (req, res) => {
    res.send("Route Handler 2");
  }
);

// This will handle only GET API call to /user
app.get("/user", (req, res) => {
  res.send({ firstname: "Suchita", lastname: "Jamwal" });
});

app.post("/user", (req, res) => {
  console.log("Save data to the database");
  res.send("Data successfully saved to the database");
});

app.use("/test", (req, res) => {
  // app.use is a request handler
  res.send("Hello from the server");
});

app.use("/", (req, res) => {
  res.send("Namaste Suchita");
});
