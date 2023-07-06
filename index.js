const express = require("express");
const app = express();
const port = 1234;

const sampleDB = {
  "Tesco": {
    address: "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550",
    network: "ethereum",
    deploymentBlock: 5,
  },
  "Waitrose": {
    address: "0x9b1f7F645351AF3631a656421eD2e40f2802E6c0",
    network: "ethereum",
    deploymentBlock: 11,
  },
  "Morrisons": {
    address: "0x0E696947A06550DEf604e82C26fd9E493e576337",
    network: "ethereum",
    deploymentBlock: 17,
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
