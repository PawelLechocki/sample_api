const express = require("express");
const app = express();
const port = 1234;

const sampleDB = {
  "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550": {
    address: "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550",
    network: "ethereum",
    deploymentBlock: 5,
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

app.get("/contracts/:id", (req, res) => {
  const id = req.params.id;
  const contract = sampleDB[id];
  res.send(JSON.stringify(contract));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
