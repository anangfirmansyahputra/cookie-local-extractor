document.getElementById("id_button_getAll").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const currentTabId = tabs[0].id;
    const currentUrl = tabs[0].url;
    const details = { url: currentUrl };

    chrome.cookies.getAll(details, async (cookies) => {
      chrome.runtime.sendMessage({ cookies: cookies });
    });

    chrome.tabs.sendMessage(currentTabId, { action: "getLocalStorage" });
  });
};