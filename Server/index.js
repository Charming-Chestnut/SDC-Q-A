const express = require('express')
const questions = require('./Questions.js')
const answers = require('./Answers.js')
const connection = require('./sqlConnector.js')

let server = express();
server.use(express.json())
let port = 3001
server.listen(port, () => {
  console.log(`listening at http://localhost:${port}/`);
});

server.get('/qa/questions', questions.get)
server.post('/qa/questions', questions.post)
server.put(`/qa/questions/:question/helpful`, questions.helpful)
server.put(`/qa/questions/:question/report`, questions.report)

server.get('/qa/questions/:question/answers', answers.get)
server.post('/qa/questions/:question/answers', answers.post)
server.put(`/qa/answers/:answer/helpful`, answers.helpful)
server.put(`/qa/answers/:answer/report`, answers.report)