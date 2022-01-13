const mongoose = require('mongoose')

let questionsSchema = mongoose.schema({
  QuestionID: Number,
  productID: Number,
  Name: String,
  Question: String,
  Email: String,
  Date: String,
  Helpfulness: Number,
  Reported: Boolean
  Answers: Array
})

let answersSchema = mongoose.schema({
  AnswerID: Number,
  questionID: Number,
  Name: String,
  Question: String,
  Email: String,
  Date: String,
  Helpfulness: Number,
  Reported: Boolean,
  Photos: Array
})