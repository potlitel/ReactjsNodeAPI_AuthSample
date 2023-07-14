const express = require("express");
const api = require("../routes/index");

//const escalas = require('../routes/Escala-Route');
module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));
  //  app.use(escalas.path, escalas.router);

  app.use("/api/v1", api);
  // Root route of express app
  app.get("/", (req, res) => {
    res
      .status(200)
      .send(
        "<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>"
      );
  });

  app.get("/welcome", (req, res) => {
    res
      .status(200)
      .send(
        "<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>"
      );
  });
};
