require("dotenv").config({ path: __dirname + "/.env" });
process.env["KEYADMIN"] = JSON.stringify({
  type: "service_account",
  project_id: "cudtraffy",
  private_key_id: "e3632c52abf8b624107b95fed5a7fedd3345b363",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3muUWQZHpAUg4\nK38GnefjPDehs2kFnWjBys5Alc6ukv+QllgfhuYGoD9DkkL7Bmrfw3PyuCUiQM2x\n8AaeJ/tmSzPCWPi4BN/z7TLOCKYNLNY/ssTs8b/KtdHLmwT/ah9ndnV2R2EEKk4N\n1g6KVxIZkEeJiMlEWFIXLKBfivvXXAY/YxfQYZ0PBkDhQJltUa91jUI/BdeHQ5RP\n1WuEeoOuWemRoq8lhjrxO80J73GKMAlXbMoerB36OsAJhL5lAN2O5XLjRlHEFvfn\nvS/2AOBnAYBQFrTL+kQwyTVHDvJFpdgciqscEQ7Xl5kFGpr1euIPMUFCednDJf0S\nhjvIljhjAgMBAAECggEAAgdqZ0rxvq+CZy+Uez2zBGTWWNqSAp3MKPKLfMthKxkr\nEkr4RAZ2mzWF+v2QteytOw65pzfaMdDJDb8uwRPnkihb+daH3Wi61+piljBxM3nD\nmZUQ2ll4BuJyGmDnBZ7v6SME1SFlkl9dnemuC00rfEQQwClWbPmdzzw2ecuCjC+w\n+akNOwVvug9BFwJYgeNcMZlSRNmjNA6nu2em6nPTC6gDvkmYtLtMPeCaOM7i5bUY\n/A1l0wznlfsfKq0e0rg++wZxU2P8LCuLlOs8WOTpz4TYXhYBkyOG34oQ5HMq6aF7\nXBFtf6vW85dWubY2zxH+MdReFEUMBWEz9BzzyN2g2QKBgQDeiMO1t8mSM0FQg6Sq\njDnWPSD601xuqQ26bpLN5Dluktlw12tSIqJ919Ua+HguTOVJLw7f5eh15hplGkb4\nhWB60wJJ/ASNiHhV6/mwwpW4OlYEA2ayQwXfAtrXsaSHCfCbNa75e66iw1erHRfk\nRqUj+wLNytKBd+qX5Ne943DOPwKBgQDTN2pKjOW0152mZUJEHvHAroUtjlXxT1Gv\n7kHubUgxisWcs96WkRF0oOuKjRBCg09KpBzBW+Gx4WkQsaJyUZzLL6bIABup6XDE\nrYTkOPttFgF5r7hChIqCtldHE+mf5CaLc5cwyhWGP1Nr/6kgb4YI3Ip/GOdwc5XZ\neEyBcJjU3QKBgQDCPvNGjZS/r0nV8/Mqg5iAr384MoK+fYZkM9ylKBARutFetEsT\nuPPJkTqNflG5aJnD1fXP7qmJMD/d/J/yksnyrHmVBw0aVgNkTMT5TADQfOtUOXvN\nIr/fOGi6Wm/ZCA4kDSocz59Sp9zAmnaeZiQEUjjSVbaGGJyH1dOUBxISlQKBgQDS\n9JYEv5TteizK9Heq8f0jJSt+xJqx2TcNMDpJmHxyftfAGyZF275DbjXSu/FxfRTE\nyASwWsSglTIKqmBFLZ4ckgtR1knK+ozW4zfHeeIkocX3c7nlNdvhkZy6MPk16PlW\nbqyi3jOBUd5QD5kr/DcywpLRPl5pwgf4nF5NKdh7QQKBgB3WsnS0ijZJQZ5IZ6AZ\nqmJbfNs+S+pyQQk7nSxRMZlC7C4DrRoUsg2HbbSf85EVNCy5PNoKFwxQmmCGtwr0\nbSG1eb1tx+ZUpuTNFtxnTI99aXRXp+AV6EG34PAz2za4UKIDre7VQbVpHKU1wFJy\nQGt5YzlaKW6guS1W3cVGe2yV\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-i7wuu@cudtraffy.iam.gserviceaccount.com",
  client_id: "114211160307624560000",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i7wuu%40cudtraffy.iam.gserviceaccount.com",
});
var express = require("express");
var app = express();
const PORT = process.env.PORT || 5050;
const { tasks } = require("./handlers/tasks");

console.log(process.env["KEYADMIN"]);

app.get("/tasks", tasks);

app.get("/", (req, res) => {
  res.send("This is my demo project");
});
app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
