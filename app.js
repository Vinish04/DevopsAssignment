const express=require("express");
const app=express();
const mongoose = require('mongoose');
/* const cors = require('cors'); */
const controller=require("./controller");
const path=require("path");

const PORT= process.env.PORT || 8080;

/* app.use(cors({ origin: "http://localhost:4200" })); */

mongoose.connect('mongodb+srv://Admin:admin@crud.iiipx.mongodb.net/CRUDDataBase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(()=>{
  app.listen(PORT,()=>{
    console.log("Database Connected");
    console.log("Server Listening On Port",PORT);
  })
})
.catch((e)=>{
  console.log("Error",e);
})

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/index.html"));
})

app.use("/register",controller);

