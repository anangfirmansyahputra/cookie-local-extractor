chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getLocalStorage") {
      const localStorageData = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageData.push({
            key: key,
            value:value
        })
      }
      chrome.runtime.sendMessage({ localStorageData: localStorageData });
    }
  });