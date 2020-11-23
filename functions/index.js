const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const {
  createUser,
  helloWorld,
} = require('./api/index.js');

app.post("/user/create", async (req, res) => createUser(req, res));

exports.api = functions.https.onRequest(app);
exports.helloWorld = helloWorld;