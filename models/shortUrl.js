const mongooes = require("mongoose");
const shortId = require('shortid');

const shortUrlSchema = new mongooes.Schema({
  full: {
    type: String,
    require: true,
  },
  short: {
    type: String,
    require: true,
    default: shortId.generate
  },
});

module.exports = mongooes.model('ShortUrl', shortUrlSchema)