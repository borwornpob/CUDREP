const express = require("express");
const multer = require("multer");

const { addImage } = require("../util/addImage");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");

router.post("/picture", upload, addImage);

module.exports = {
  routes: router,
};
