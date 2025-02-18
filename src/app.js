// import statements
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";

import {home, about, contact, privacy} from "./controllers/PageController.js";

// create an instance of express
const app = express();

// use express layouts
app.use(expressLayouts)
// set the view enigine to ejs
app.set("view engine", "ejs");
app.set("layout", "layouts/main")
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// page routes
app.get("/", home)
app.get("/about", about)
app.get("/contact", contact)
app.get("/privacy", privacy)

app.get("*", (req, res) => {
  res.status(404).render("errors/404", {
    layout: "layouts/error",
  });
});

// GET route to serve the index.html file
app.get("/", (req, res) => {
  res.render("home", {
    title: "Dinosaurs are awesome",
    content: 
      "Dinosaurs are cool creatures",
  });
});

app.get("/about", (req, res) => {
  res.render("home", {
    title: "about",
    content: "this content is about dinosaurs!",
  });
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
