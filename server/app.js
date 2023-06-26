const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const apiReviews = require("./routes/api/api-reviews");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jdekf4w.mongodb.net/cscie31?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("**** connected ****");
  })
  .catch((err) => {
    console.error(`database connection error: ${err}`);
    process.exit();
  });

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/api/reviews", apiReviews);

/*
 * Below adapted from Week 13 lecture notes
 *  note I am using public/  within /server to access the 
 *  compiled Angular code
 */ 
app.use('/', (req, res) => {
   // filter for actual files we want to deliver from disk
   var pattern = new RegExp('(.css|.html|.js|.ico|.jpg|.png)+\/?$', 'gi'); 
   if (pattern.test(req.url)) {
      // in cases where the Angular app is mounted at the root url, we may need to strip a trailing slash from the redirected request 
      let url = req.url.replace(/\/$/, "");
      // deliver the requested file
      res.sendFile(path.resolve(__dirname, `./public/${url}`));
   } else {
      // in this case, the request should be handled by Angular, which is index.html
      res.sendFile(path.resolve(__dirname, './public/index.html'));
   }
});

app.use((req, res, next) => {
  res.status(404);
  res.end(`Not Found: ${req.protocol}://${req.headers.host}${req.url}`);
});

module.exports = app;
