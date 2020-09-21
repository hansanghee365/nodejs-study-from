const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const fs = require("fs");

server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.use(bodyParser.json());
server.post("/login/", (req, res) => {
  console.log(req.body);
  res.send("Received POST Data!");
  var user_id = req.body.user_id;
  fs.writeFileSync("./hello.json", JSON.stringify(req.body, null, 2));
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

// server.post("/login", (req, res) => {
//   console.log(req.body);
//   // let id = req.body.user_id;
//   // let pwd = req.body.user_pwd;
//   // console.log(id);
//   res.send(req.body.user_id);
// });

server.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.log(err);
  console.log(process.env.PORT);
  console.log("The server is listening on port 5000");
});
