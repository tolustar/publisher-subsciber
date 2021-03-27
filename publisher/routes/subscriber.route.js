const express = require("express");
const SubscriberController = require("./../controllers/subscriber.controller");

const router = express.Router();

router.post("/:topic", SubscriberController.subscribeTopic);

module.exports = router;
