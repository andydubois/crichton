const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `
  SELECT * FROM dino_table;`;
  pool
    .query(queryText)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log("error in server side dino GET", error);
      res.sendStatus(500);
    });
});

module.exports = router;
