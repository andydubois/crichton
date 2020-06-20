const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();
//MundoScript
let LeagueAPI = require("leagueapiwrapper");
let leagueAPIKey = process.env.REACT_APP_RIOT_API_KEY;
LeagueAPI = new LeagueAPI(leagueAPIKey, Region.NA);

router.get("/:searchTerm", (req, res) => {
  let summonerName = req.params.searchTerm;
  LeagueAPI.initialize()
    .then(() => {
      return LeagueAPI.getSummonerByName(summonerName);
    })
    .then(function (accountInfo) {
      // do something with accountInfo
      console.log("success server side summoner GET", accountInfo);
      res.send(accountInfo);
      console.log(accountInfo);
    })
    .catch((error) => {
      console.log("error in server side summoner GET", error);
    }); // LeagueAPI returned objects will now have details from DDRagon API.
});

module.exports = router;
