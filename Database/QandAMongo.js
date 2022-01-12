const mongoose = require('mongoose')

let questionsSchema = mongoose.schema({
  _id: Number,
  productID: Number,
  Name: String,
  Question: String,
  Email: String,
  Date: String,
  Helpfulness: Number,
  Reported: Boolean
})

let answersSchema = mongoose.schema({
  _id: Number,
  questionID: Number,
  Name: String,
  Question: String,
  Email: String,
  Date: String,
  Helpfulness: Number,
  Reported: Boolean,
  Photos: Array
})