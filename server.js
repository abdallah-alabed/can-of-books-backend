"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT 
const mongoose=require("mongoose");
const MONGO_SERVER=process.env.MONGO_SERVER
const { bookController,createBookController,deleteBookController } = require("./controllers/Book.controller");
mongoose.connect(`${MONGO_SERVER}/books`,{useNewUrlParser: true, useUnifiedTopology: true});





app.get('/books',bookController)
app.post('/create',createBookController)
app.delete('/delete/:id',deleteBookController);



app.listen(PORT, () => console.log(`listening on ${PORT}`));


