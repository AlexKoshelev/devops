const express = require("express");
const { default: fetch } = require("node-fetch");
const app = express();

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST;

app.get("/", (req, res) => {
  fetch(DATE_SERVER_HOST)
    .then((res) => res.json())
    .then((date) => {
      res.send(date);
    });
});

app.listen(3000, () => {
  console.log("Ready");
});
