const functions = require('firebase-functions');

const {
  createUser
} = require('./user/index.js');

const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

module.exports = {
  helloWorld,
  createUser
};