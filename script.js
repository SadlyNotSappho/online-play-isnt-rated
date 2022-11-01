let thing = chrome ?? browser;
const blockedPageRegexes = [
  /^https:\/\/([a-zA-Z]*\.)?(old\.)?reddit.com\/?.*/gm,
  /^https:\/\/([a-zA-Z]*\.)?twitter.com\/?.*/gm,
];
let match = false;
blockedPageRegexes.forEach((regex) => {
  if (window.location.href.match(regex)) {
    match = true;
  };
});

if (window.localStorage.getItem("opir-allowed-sites") == null || window.localStorage.getItem("opir-allowed-sites") == "") {
  window.localStorage.setItem("opir-allowed-sites", '[]')
}

(async () => {
  if (match) {
      window.location.href = `${thing.runtime.getURL("online-play-isnt-rated.html")}?url=${document.URL}&oas=${(await browser.storage.local.get("opir-allowed-sites"))['opir-allowed-sites']}`;
  }
})()  