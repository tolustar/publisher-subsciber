const storage = require("node-persist");

exports.subscribe = async (topicToSubscribe, urlToSubscribe) => {
  const subscribedUrls = await storage.getItem(topicToSubscribe);

  let message = `${urlToSubscribe} subscribed to ${topicToSubscribe} successfully`;

  if (!subscribedUrls) {
    await storage.setItem(topicToSubscribe, [urlToSubscribe]);
  } else {
    if (!subscribedUrls.includes(urlToSubscribe)) {
      subscribedUrls.push(urlToSubscribe);
    }
    await storage.setItem(topicToSubscribe, subscribedUrls);
  }

  console.log(message);

  return message;
};
