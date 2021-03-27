const express = require("express");
const router = express.Router();

const publisherRoute = require("./publisher.route");
const subscriberRoute = require("./subscriber.route");

router.use("/publish", publisherRoute);
router.use("/subscribe", subscriberRoute);

module.exports = router;
