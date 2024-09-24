// This is an http module
const express = require("express");
const http = require("http");
let serv = http.createServer((request, response) => {
  response.end("3093");
  console.log("gggggg");
});
serv.listen(8000);
let newServ = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, world!");
  } else if (request.url === "/homepage") {
    response.end("HOMEPAGE");
  } else if (request.url === "/profile") {
    response.end("PROFILE");
  } else {
    response.end("ERROR 404 NOT FOUND!");
  }
});
newServ.listen(4000);

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
let app2 = express();
app2.get("/about", function (request, response) {
  response.send(`THIS IS THE ABOUT PAGE`);
  console.log(`99 succesful`);
});
app2.get("/", function (request, response) {
  response.send("HOME PAGE");
});
app2.get("*", function (request, response) {
  response.send("NOT THE RIGHT PATH");
});
app2.listen(999);
