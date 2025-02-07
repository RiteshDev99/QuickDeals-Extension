export function CreteBackgroundTab() {
  const urlLink= 'https://www.amazon.in?&linkCode=ll2&tag=cosmickart-21&linkId=9db3cb10080d425608462000168f2197&language=en_IN&ref_=as_li_ss_tl'
  chrome.tabs.create(
    {
      url: urlLink,
      active: false,
      pinned: true,
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
  if (message.action === "CreteBackgroundTab") {
    CreteBackgroundTab();

  }
});






