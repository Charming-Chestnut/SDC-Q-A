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

}

questionHelpful = (req, res) => {

}

questionReport = (req, res) => {

}

module.exports.get = questionGet
module.exports.post = questionPost
module.exports.helpful = questionHelpful
module.exports.report = questionReport