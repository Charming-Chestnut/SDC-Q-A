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
  let query = `INSERT INTO Answers (question_id, date_written, body, asker_name, asker_email, reported, helpful) VALUES (${req.params.question}, '${Date.now()}', '${req.body.body}', '${req.body.name}', '${req.body.email}', 0, 0)`
  connection.query(query, (error, data) => {
    if (error) {
      throw ('Error', error)
    }
    res.sendStatus(201)
  })
}

answerHelpful = (req, res) => {

}

answerReport = (req, res) => {

}

module.exports.get = answerGet
module.exports.post = answerPost
module.exports.helpful = answerHelpful
module.exports.report = answerReport