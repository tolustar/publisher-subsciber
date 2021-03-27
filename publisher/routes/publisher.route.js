const express = require("express");
const PublisherController = require("./../controllers/publisher.controller");

const router = express.Router();

router.post("/:topic", PublisherController.publishTopic);

module.exports = router;
