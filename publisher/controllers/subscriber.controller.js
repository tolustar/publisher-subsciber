const SubscriberService = require("../services/subscriber.service");

exports.subscribeTopic = async (req, res, next) => {
  try {
    const message = await SubscriberService.subscribe(
      req.params.topic,
      req.body.url
    );

    res.json({
      code: 200,
      message,
    });
  } catch (error) {
    next(error);
  }
};
