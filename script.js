const qrcontainer = document.getElementById("qr");

console.log(qrcontainer);
(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  console.log(tab.url);

  new QRCode(qrcontainer, {
    text: tab.url,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
})();
