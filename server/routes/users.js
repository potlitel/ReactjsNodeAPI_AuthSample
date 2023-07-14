// import { Router } from "express";
// // import middlewares from "../middlewares";
// const route = Router();

// route.get("/", (req, res) => {
//   return res.send("Hello from express and javascript");
// });

// route.get("/register", (req, res) => {
//   return res.json({ msg: "req.currentUser" }).status(200);
// });

// export default route;

//To delete
// const express = require("express");
// module.exports = function (app) {
//   app.use(express.json({ limit: "50mb" }));
//   // app.use();
//   app.get("users/", (req, res) => {
//     return res.send("Endpoint to handlers everything related to user entity.");
//   });

//   app.get("/ping", (req, res) => {
//     return res.send("Hello from express and javascript");
//   });
// };

const express = require("express");
const router = express.Router();
const Controller = require("../controllers/users");

// const validationRol = require("../validations/RolValidation");
// const { validate } = require("../middlewares/validationMiddleware");

// const { cacheMiddleware } = require("../middlewares/memory-cache.middleware");

// GET ALL
router.get("/", Controller.get_all);

// POST
router.post("/register", Controller.register);

// GET SINGLE
router.get("/:id", Controller.get);

//UPDATE
router.put("/:id", Controller.update);

// DELETE
router.delete("/:id", Controller.delete);

module.exports = {
  router: router,
  path: "/users",
};
