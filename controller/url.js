const shortid = require("shortid");
const URL = require("../models/url");

const hello = (req, res) => {
  return res.render("form", { title: "ShortId URL Generator" });
};

async function shortUrlGenreate(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortID = shortid.generate();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("form", { id: shortID, title: "ShortId URL Generator" });
}

const getRedirect = async (req, res) => {
  const shortid = req.params.shortid;

  const entry = await URL.findOneAndUpdate(
    { shortId: shortid },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) return res.status(404).send("URL not found");

  res.redirect(entry.redirectURL);
};

const getAnalytics = async (req, res) => {
  // const shortid = req.params.shortid;
  // const result = await URL.findOne({ shortId: shortid });
  const allUrl = await URL.find({});

  // if (!result) return res.status(404).send("Analytics not found");
  if (!allUrl) return res.status(404).send("Analytics not found");

  return res.render("home", {
    urls: allUrl,
    // totalClicks: result.visitHistory.length,
    // analytics: result.visitHistory,
    // shortid,
    title: "URL Analytics"
  });
};

module.exports = { shortUrlGenreate, getRedirect, getAnalytics, hello };
