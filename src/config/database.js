const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev_node_sj:GsMsdCZrstf8fiQs@namastenode.nmyrow7.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
