const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  alphaacid: {
    type: Number,
    required: true
  }
});

module.exports = Hop = mongoose.model("hop", HopSchema);
