let admin = null;

module.exports = function getAdminFirebaseInstance() {
    if (admin) {
        console.log("[Firebase instance ]", admin);
        return admin;
    }

    const adminFirebase = require('firebase-admin');
    admin = adminFirebase.initializeApp();
    return admin;
}