const express = require("express");
const router = express.Router();

//recipe model
const Hop = require("../../models/Hop");

//@route  GET api/hops
//@desc   Get all hops
//@access Public
router.get("/", (req, res) => {
  Hop.find()
    .then(hops => res.json(hops))
    .catch(err => console.log(err));
});

//@route  POST api/hop
//@desc   Create a hop
//@access Public
router.post("/", (req, res) => {
  const newHop = new Hop({
    name: req.body.name,
    alphaacid: req.body.alphaacid,
    amount: req.body.amount
  });

  newHop.save().then(hop => res.json(hop));
});

//@route  DELETE api/hop/id
//@desc   Delete a hop
//@access Public
router.delete("/:id", (req, res) => {
  Hop.findById(req.params.id)
    .then(hop => hop.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
