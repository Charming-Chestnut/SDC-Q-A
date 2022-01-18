const express = require('express')
const sql = require('mysql2')
const connection = require('./sqlConnector.js')

answerGet = (req, res) => {
  let query = `SELECT * FROM Answers WHERE question_id=${req.params.question} ORDER BY helpful DESC`
  connection.query(query, (error, data) => {
    if (error) {
      throw ('Error', error)
    }
    res.send(data)
  })
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