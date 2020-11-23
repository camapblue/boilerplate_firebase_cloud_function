const functions = require('firebase-functions');
const util = require('../../util/index');
const getAdminFirebase = util.common;
const buildResponse = util.format;
const errorCode = util.error

const admin = require('firebase-admin');
const sharedAdmin = getAdminFirebase();
const db = sharedAdmin.firestore();

const createUser = async (req, res) => {
  const config = functions.config();

  try {
    return buildResponse.successResponse(res, { "success": true });
  } catch (error) {
    return buildResponse.errorResponse(res, 500, errorCode.GENERAL_ERROR, error);
  }
};

module.exports = {
  createUser
};