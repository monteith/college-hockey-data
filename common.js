export const conferences = [
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

export function getBaseUrl(pageType, ...args) {
  return baseUrl[pageType](args[0]);
}
