// Simple CRUD with Mongo to save contract data

const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const port = process.env.PORT || "80";
const connection = process.env.CONNECTION;
const contractSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  network: String,
  deploymentBlock: Number,
});

const Contract = mongoose.model('contracts', contractSchema);

app.get("/contracts/:id", async (req, res) => {
  const { id } = req.params;
  console.info('Finding ' + id)
  await mongoose.connect(
    connection
  );
  const query = Contract.where({ id: id });
  const contract = await query.findOne();
  console.info('Found: ' + JSON.stringify(contract))
  console.info(contract)
  res.send(JSON.stringify(contract));
});

app.post("/add", bodyParser.json(), async (req, res) => {
  const { id, name, address, network, deploymentBlock } = req.body;
  await mongoose.connect(
    connection
  );
  console.info('connected')
  const dupa = new Contract({
    id: id,
    name: name,
    address: address,
    network: network,
    deploymentBlock: deploymentBlock
  });
  console.info('saving ' + dupa)
  await dupa.save();
  console.info('saved')
  res.send(JSON.stringify('Added Contract!'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
