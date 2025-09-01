const express = require("express");

const app = express(); //instance of an expressjs application

app.use("/test", (req, res) => {
  // app.use is a request handler
  res.send("Hello from the server");
});
app.listen(3000, () => {
  console.log("server is up and running on port 3000");
}); // 3000 is the port
