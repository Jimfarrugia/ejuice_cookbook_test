const express = require("express");
const router = express.Router();
//const recipeController = require("./../controllers/recipe_controller");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/recipes", (req, res, next) => {
  res.render("recipes/index");
});

// router.post("/recipes", recipeController.create);

// router.get("/recipes/:id", recipeController.show);

module.exports = router;
