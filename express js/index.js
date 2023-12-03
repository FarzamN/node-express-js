const express = require("express");
const router = require("./src/Router/auth-router");
const app = express();

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("status");
});

app.get("/register", (req, res) => {
  res.status(200).send(`${req.body} page`);
});

app.listen(8000, () => console.log("running in 8000"));
