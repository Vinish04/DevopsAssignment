const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  Title: String,
  Snippet: String,
  Body:String
})

const Register=mongoose.model("Add",Schema)

module.exports={ Register };