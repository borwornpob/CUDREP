var admin = require("firebase-admin");

var serviceAccount = JSON.parse(process.env["KEYADMIN"]);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { admin, db };
