chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.cookies) {
      console.log('Cookies:', message.cookies);
    }
    if (message.localStorageData) {
      console.log('LocalStorage Data:', message.localStorageData);
    }
  });