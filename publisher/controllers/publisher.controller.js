const PublisherService = require("./../services/publisher.service");

exports.publishTopic = async (req, res, next) => {
  try {
    const {
      successResponseUrls,
      message,
    } = await PublisherService.publishTopic(req.params.topic, req.body.data);

    res.json({
      code: 200,
      data: successResponseUrls,
      message,
    });
  } catch (error) {
    next(error);
  }
};
