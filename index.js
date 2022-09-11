const express = require("express");

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("api");
});

app.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});
