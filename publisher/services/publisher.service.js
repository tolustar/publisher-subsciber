const storage = require("./../config/storage.config");
const axios = require("axios");

exports.publishTopic = async (topic, data) => {
  const subscribedUrls = await storage.getItem(topic);

  let message = "Message sent successfully";

  const successResponseUrls = [];

  if (subscribedUrls) {
    if (subscribedUrls.length !== 0) {
      for (const url of subscribedUrls) {
        try {
          await axios.post(url, {
            topic,
            data,
          });
          console.log(
            `\nMessage sent to URL [${url}] subscribed to TOPIC [${topic}] successfully`
          );
          successResponseUrls.push(url);
        } catch (error) {
          console.log(
            `An error occured while sending message to ${url} subscribed to ${topic}`,
            `Error details ===> `,
            error.response
          );
        }
      }
    } else {
      message = `No url is subscribed to this topic`;
      console.log(message);
    }
  } else {
    message = `Topic does not exist`;
    console.log(message);
  }

  return {
    successResponseUrls,
    message,
  };
};
