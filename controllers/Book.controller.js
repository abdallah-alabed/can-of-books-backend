"use strict";
const { bookModel, seedBook } = require("../models/Book.model");


let bookController = (req, res) => {
// seedBook();        // uncomment when clearing the data base (use once then uncomment)
  bookModel.find({}).then((data) => {
    res.json(data);
  });
};

module.exports = {
  bookController,
};
