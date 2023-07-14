const express = require("express");
const router = express.Router();
const usersRouter = require("./users");

router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<html><div id='welcome'>Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨</div></html>"
    );
});
router.use(usersRouter.path, usersRouter.router);

module.exports = router;
