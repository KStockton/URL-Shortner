const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");

mongoose.connect("mongodb://localhost/urlShortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.listen(5000);
