"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT 
const mongoose=require("mongoose");
const MONGO_SERVER=process.env.MONGO_SERVER

const { bookController } = require("./controllers/Book.controller");

mongoose.connect(`${MONGO_SERVER}/books`,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/books',bookController)

app.listen(PORT, () => console.log(`listening on ${PORT}`));


