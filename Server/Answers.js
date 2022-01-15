const express = require('express')
const sql = require('mysql2')
const connection = require('./sqlConnector.js')

answerGet = (req, res) => {
  res.send(req.params.question)
}

answerPost = (req, res) => {

}

answerHelpful = (req, res) => {

}

answerReport = (req, res) => {

}

module.exports.get = answerGet
module.exports.post = answerPost
module.exports.helpful = answerHelpful
module.exports.report = answerReport