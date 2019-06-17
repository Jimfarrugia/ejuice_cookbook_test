const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Use handlebars as view template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Convert icoming data from stream data to form data or json data.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes"));

const recipes = [
  {
    name: "Dragon Milk",
    pg: 25,
    vg: 75,
    flavors: [
      {
        name: "TFA Dragonfruit",
        pgBase: true,
        qty: 7 // percentage of total mix
      },
      {
        name: "TFA Strawberry",
        pgBase: true,
        qty: 2
      },
      {
        name: "INW Coconut",
        pgBase: true,
        qty: 1
      },
      {
        name: "TFA Vanilla Swirl",
        pgBase: true,
        qty: 2
      }
    ]
  }
];

console.log(recipes[0]);

module.exports = app;
