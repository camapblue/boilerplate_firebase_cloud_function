const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const rest = express();
rest.use(cors({ origin: true }));
rest.use(bodyParser.json());
rest.use(bodyParser.urlencoded({ extended: false }));

rest.post('/test/check', async (req, res) => {
  try {
    const data = await check(req.body);

    return res.send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
});

exports.rest = functions.https.onRequest(rest);

const api = require('./api/index');

exports.api = api;
