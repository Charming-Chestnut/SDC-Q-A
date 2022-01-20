const express = require('express')
const sql = require('mysql2')
const connection = require('./sqlConnector.js')

questionGet = (req, res) => {
  let query = `SELECT * FROM Questions WHERE product_id=${req.query.product_id} ORDER BY helpful DESC`
  connection.query(query, (error, data) => {
    if (error) {
      throw ('Error', error)
    }
    res.send(data)
  })
}

questionPost = (req, res) => {
  let query = `INSERT INTO Questions (product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES (${req.query.product_id}, '${req.body.body}', ${Date.now()}, '${req.body.name}', '${req.body.email}', 0, 0)`
  connection.query(query, (error, data) => {
    if (error) {
      throw ('Error', error)
    }
    res.sendStatus(201)
  })
}

questionHelpful = (req, res) => {

}

questionReport = (req, res) => {

}

module.exports.get = questionGet
module.exports.post = questionPost
module.exports.helpful = questionHelpful
module.exports.report = questionReport