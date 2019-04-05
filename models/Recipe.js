const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hop: [
    {
      hopName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hop"
      },
      amount: {
        type: Number
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
