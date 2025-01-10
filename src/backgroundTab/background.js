export function handleButtonClick() {
  chrome.tabs.create(
    {
      url: "https://www.amazon.in/gp/buy/payselect/handlers/display.html?_from=cheetah",
      active: false,
    },
    function (tab) {
      chrome.tabs.onUpdated.addListener(function listener(
        tabId,
        changeInfo,
        updatedTab
      ) {
        if (tabId === tab.id && changeInfo.status === "complete") {
          console.log("Tab fully loaded:", updatedTab);
          chrome.tabs.remove(tab.id, function () {
            if (chrome.runtime.lastError) {
              console.error("Error removing tab:", chrome.runtime.lastError);
            }
          });
          chrome.tabs.onUpdated.removeListener(listener);
        }
      });
    }
  );
}

chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === "handleButtonClick") {
    handleButtonClick(); 
  }
});
