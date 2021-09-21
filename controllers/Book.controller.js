"use strict";
const { bookModel, seedBook } = require("../models/Book.model");

let bookController = (req, res) => {
  // seedBook();        // uncomment when clearing the data base (use once then uncomment)
  bookModel.find({}).then((data) => {
    res.json(data);
  });
};

const createBookController = async (req, res) => {
  let { title, description, email } = req.body;
  let newBook = new bookModel({
    title: title,
    description: description,
    status: "Available",
    email: email,
  });
  newBook.save();
  let booksList = await bookModel.find({});
  res.status(201).json(booksList);
};

const deleteBookController = (req, res) => {
  let id = req.params.id;
  bookModel.findByIdAndDelete(id, async (err, data) => {
    if (err) {
      res.status(500).send("an error occured");
    }
    let booksList = await bookModel.find({});
    res.json(booksList);
  });
};

const updateBookController = async (req, res) => {
  let id = req.params.id;
  let { title, description, email } = req.body;
  bookModel.findOne({ _id: id }).then((book) => {
    book.title = title;
    book.description=description;
    book.email = email;
    book.save();
  });
  let booksList = await bookModel.find({});
  res.status(200).send(booksList);
};

module.exports = {
  bookController,
  createBookController,
  deleteBookController,
  updateBookController
};
