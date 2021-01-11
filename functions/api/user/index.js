const functions = require('firebase-functions');
const { createUser } = require('./create');

module.exports = {
  createUser: functions.https.onCall(createUser),
};
