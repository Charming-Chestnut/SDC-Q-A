DROP DATABASE IF EXISTS QandA;
CREATE DATABASE QandA;
USE QandA;

CREATE TABLE Questions (
  question_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  product_id INTEGER,
  body VARCHAR(1000),
  date_written VARCHAR(24),
  asker_name VARCHAR(25),
  asker_email VARCHAR(100),
  reported BOOLEAN DEFAULT(false),
  helpful INTEGER
);

CREATE TABLE Answers (
  answer_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  question_id INTEGER,
  body VARCHAR(1000),
  date_written VARCHAR(24),
  asker_name VARCHAR(25),
  asker_email VARCHAR(100),
  reported BOOLEAN DEFAULT(false),
  FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);

CREATE TABLE Photos (
  photo_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  answer_id INTEGER,
  url VARCHAR(500),
  FOREIGN KEY (answer_id) REFERENCES Answers(answer_id)
);

/* mysql -u root < Database/QandA.sql