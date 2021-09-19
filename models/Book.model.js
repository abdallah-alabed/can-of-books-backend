"use strict";
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const bookModel = mongoose.model("book", bookSchema);

let seedBook = () => {
  let booksList = new bookModel (
    {
        title: "The Wolf of Wall Street ",
        description: "book about stocks life",
        status: "Available",
        email: "abd.alabed97@gmail.com",}
  )
  
 let booksList2 = new bookModel( 
      {
        title: "The Hunger Games",
        description: "a fantasy story where people from different districts fight to survive",
        status: "Available",
        email: "abd.alabed97@gmail.com",
      }
     )

let booksList3 = new bookModel ( {
    title: "Harry Potter and the Half-Blood Prince",
    description: "a fantasy story magicians fight for order ",
    status: "Available",
    email: "abd.alabed97@gmail.com",
  })     


  booksList.save();
  booksList2.save();
  booksList3.save();

// console.log(booksList)

  }


module.exports={
    bookModel,
    seedBook
}