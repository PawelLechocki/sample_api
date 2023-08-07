// Simple CRUD with Mongo to save contract data

import express from "express";
import { mongoose, Schema } from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || "80";
const connection = process.env.CONNECTION;
const contractSchema = new Schema({
  id: String,
  address: String,
  network: String,
  deploymentBlock: Number,
});

const Contract = mongoose.model('contracts', contractSchema);

app.get("/contracts/:id", async (req, res) => {
  const { id } = req.params;
  await mongoose.connect(
    connection
  );
  const query = Contract.where({ id: id });
  const contract = await query.findOne();
  res.send(JSON.stringify(contract));
});

app.post("/add", bodyParser.json(), async (req, res) => {
  const { id, address, network, deploymentBlock } = req.body;
  await mongoose.connect(
    connection
  );
  const dupa = new Contract({
    id: id,
    address: address,
    network: network,
    deploymentBlock: deploymentBlock
  });
  await dupa.save();
  res.send(JSON.stringify('Added Contract!'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
