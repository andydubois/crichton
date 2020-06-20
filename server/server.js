const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
//ROUTERS
const dinoRouter = require("./routes/dino.router");
// App Set //
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/
app.use("/api/dinos", dinoRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log("Listening on port: ", PORT);
})
