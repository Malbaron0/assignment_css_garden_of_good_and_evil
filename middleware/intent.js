const fs = require('fs');

const getJson = (intent) => {
  const data = fs.readFileSync("./json_data/description.json");
  const json = JSON.parse(data);
  return json[intent];
};

const intentMiddleware = (req, res, next) => {
    const intent = req.cookies.intent || "evil";

    req.intent = intent;
    req.intentDescription = getJson(intent);

    next();
}

module.exports = intentMiddleware;