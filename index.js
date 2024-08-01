const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const { connectToMongoDB } = require("./connect");
const { shortUrlGenreate, getRedirect, getAnalytics, hello } = require('./controller/url');

const app = express();
app.set("view engine", "ejs");
app.set('views', path.resolve('./views'));

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post("/", shortUrlGenreate);
app.get('/url/:shortid', getRedirect);
app.get("/analytics", getAnalytics);
// app.get("/analytics/:shortid", getAnalytics);

// app.get('/analytics', (req, res) => res.redirect('/analytics/all'));
app.get('/', hello);

app.listen(8000, () => console.log("Server Started"));
