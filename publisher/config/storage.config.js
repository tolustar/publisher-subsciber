const storage = require("node-persist");

(async () => {
  await storage.init({
    dir: "./storage",
    expiredInterval: 60 * 60 * 1000,
  });
})();

module.exports = storage;
