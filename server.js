"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT 
const mongoose=require("mongoose");
// const MONGO_SERVER=process.env.MONGO_SERVER
const ATLAS=process.env.ATLAS
// const jwt=require('jsonwebtoken');
// const jwksClient=require('jwks-rsa');

const { bookController,createBookController,deleteBookController,updateBookController } = require("./controllers/Book.controller");
mongoose.connect(`http://${ATLAS}`,{useNewUrlParser: true, useUnifiedTopology: true});


// const client = jwksClient({
//     // this url comes from your app on the auth0 dashboard 
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//   });
//   const getKey=(header, callback)=>{
//     client.getSigningKey(header.kid, function(err, key) {
//         const signingKey = key.publicKey || key.rsaPublicKey;
//         callback(null, signingKey);
//       });
// }

// app.get('/auth',(req,res)=>{
//     console.log("i was called")
//     // getting the JWT from the request headers
//     "Bearer ljdlasiudo87waudljaslidu"
//     ["Bearer","ljdlasiudo87waudljaslidu"]
//     const token=req.headers.authorization.split(' ')[1];
//     // token="ljdlasiudo87waudljaslidu"
//     // checking the token if it is valid/verfied
//     jwt.verify(token,getKey,{},(err,user)=>{
//         if(err){
//             res.send('invalid token');
//         }
//         res.send("Your are authenticated/Authorized");
//     })
// });


app.get('/books',bookController)
app.post('/create',createBookController)
app.delete('/delete/:id',deleteBookController);
app.put('/update/:id',updateBookController)



app.listen(PORT, () => console.log(`listening on ${PORT}`));


