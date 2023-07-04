const express = require("express");
const app = express();
const port = 3000;

const sampleDB = {
  "0x6208E657cdE072C248B9Ff224EE6f83255394d0f": {
    address: "0x6208E657cdE072C248B9Ff224EE6f83255394d0f",
    network: "ethereum",
    deploymentBlock: 10,
  },
  "0xF4d60295bC6f9497d5eA101aFCD9742Efd466373": {
    address: "0xF4d60295bC6f9497d5eA101aFCD9742Efd466373",
    network: "matic",
    deploymentBlock: 6,
  },
  "0x95256A32cdd07047174771fcb682A3c1a0b2dC89": {
    address: "0x95256A32cdd07047174771fcb682A3c1a0b2dC89",
    network: "arbitrum",
    deploymentBlock: 3323,
  },
};

app.get("/getContractAddress", (req, res) => {
  const contractId = req.headers.contractid;
  const contract = sampleDB[contractId];

  res.send(contract.address);
});

app.get("/getContractNetwork", (req, res) => {
  const contractId = req.headers.contractid;
  const contract = sampleDB[contractId];

  res.send(contract.network);
});

app.get("/getContractDeploymentBlock", (req, res) => {
  const contractId = req.headers.contractid;
  const contract = sampleDB[contractId];

  res.send(contract.deploymentBlock);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
