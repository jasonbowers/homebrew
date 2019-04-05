const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const recipes = require("./routes/api/recipes");

const app = express();

//bodyparser middleware
app.use(bodyparser.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

//use routes
app.use("/api/recipes", recipes);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
