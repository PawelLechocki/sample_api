const express = require("express");
const app = express();
const port = process.env.PORT || "80";
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path: '.env'});

app.get("/contracts/:id", async (req, res) => {
  const connection = process.env.CONNECTION
  console.log(connection)
  await mongoose.connect(connection);
  const id = req.params.id;
  const contract = sampleDB[id];
  res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
