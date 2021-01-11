let admin = null;

module.exports = function getAdminFirebaseInstance() {
  if (admin) {
    return admin;
  }

  const adminFirebase = require("firebase-admin");
  admin = adminFirebase.initializeApp();
  return admin;
};
