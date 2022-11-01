let url = new URLSearchParams(window.location.search).get("url");

document.getElementById("body").innerHTML = document.getElementById("body").innerHTML.replace(/{{URL}}/g, url);
document.getElementById("body").innerHTML = document.getElementById("body").innerHTML.replace(/{{OAS}}/g, new URLSearchParams(window.location.search).get("oas"));

document.getElementById("continue-button").addEventListener("click", async () => {
  console.info("continue button clicked")

  console.log(await browser.storage.local.get("opir-allowed-sites"))

  if ((await browser.storage.local.get("opir-allowed-sites")) == {}) {
    console.log('opir-allowed-sites is empty, setting...')

    await browser.storage.local.set({"opir-allowed-sites": "test"})
  } 

  // window.location.href = url
})