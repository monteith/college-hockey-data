const conferences = [
  "__all",
  "atlantic-hockey",
  "big-ten",
  "ecac-hockey",
  "hockey-east",
  "nchc",
  "wcha",
  "division-i-independent",
];

const baseUrl = {
  conference: (conference) =>
    `https://collegehockeyinc.com/conferences/${conference}/index.php`,
};

function getBaseUrl(pageType, ...args) {
  return baseUrl[pageType](args[0]);
}

module.exports = {
  conferences,
  getBaseUrl,
};
