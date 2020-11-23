const util = require('../../util/index.js')
const getAdminFirebase = util.common;
const buildResponse = util.format;
const errorCode = util.error

const admin = require('firebase-admin');
const sharedAdmin = getAdminFirebase();
const db = sharedAdmin.firestore();

const createUser = async (req, res) => {
  try {
    return buildResponse.successResponse(res)
  } catch (error) {
    return buildResponse.errorResponse(res, 500, errorCode.GENERAL_ERROR, error);
  }
};

module.exports = {
  createUser
};