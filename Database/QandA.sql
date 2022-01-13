DROP DATABASE IF EXISTS QandA;
CREATE DATABASE QandA;
USE QandA;

CREATE TABLE Questions (
  question_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  product_id INTEGER,
  name VARCHAR(25),
  body VARCHAR(1000),
  email VARCHAR(100),
  date VARCHAR(24),
  helpfulness INTEGER,
  reported BOOLEAN DEFAULT(false)
)

CREATE TABLE Answers (
  answer_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  question_id INTEGER FOREIGN KEY REFRENCES Questions(Question_id),
  name VARCHAR(25),
  body VARCHAR(1000),
  email VARCHAR(100),
  date VARCHAR(24),
  helpfulness INTEGER,
  reported BOOLEAN DEFAULT(false)
)

CREATE TABLE Photos (
  photo_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  answer_id FOREIGN KEY REFRENCES Answers(Answer_id),
  url VARCHAR(100)
)