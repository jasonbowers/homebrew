const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const recipes = require("./routes/api/recipes");
const hops = require("./routes/api/hops");

const app = express();

//bodyparser middleware
app.use(bodyparser.json());

//cors
app.use(cors());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

//use routes
app.use("/api/recipes", recipes);
app.use("/api/hops", hops);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
