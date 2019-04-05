const express = require("express");
const router = express.Router();

//recipe model
const Recipe = require("../../models/Recipe");

//@route  GET api/recipes
//@desc   Get all recipes
//@access Public
router.get("/", (req, res) => {
  Recipe.find()
    .populate({ path: "hop.hopName", model: Hop })
    .sort({ date: -1 })
    .then(function(recipes) {
      res.json(recipes);
    });
});

//@route  POST api/recipes
//@desc   Create a recipe
//@access Public
router.post("/", (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    hop: req.body.hop
  });

  newRecipe.save().then(recipe => res.json(recipe));
});

//@route  DELETE api/recipes/id
//@desc   Delete a recipe
//@access Public
router.delete("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
