const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**
 * Load environment variables from .env file
 */
dotenv.config();

const {
  MONGO_URI,
  MONGODB_OPTIONS,
} = require('./db/mongo');

const routes = require('../app/routes');

const server = (app) => {
  if (process.env.DB_DIALECT === 'mongo') {
    mongoose.connect(MONGO_URI, MONGODB_OPTIONS, (err) => {
      if (err) {
        return console.log('Error while connecting to Mongo database');
      }
      return console.log('Succesfull Mongo database connection!');
    });
  }

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(cors());

  app.use('/', routes);
}

module.exports = server;