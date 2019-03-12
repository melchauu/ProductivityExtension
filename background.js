
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });


});

chrome.windows.onFocusChanged.addListener((windowId) => {
    console.log("Newly focused window: " + windowId);
    if (windowId > -1) {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            if (tabs && tabs.length > 0) {
                console.log("Existing focused tab :" + tabs[0].id + " url: " + tabs[0].url);
            }
        });
    }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("Current window: " + activeInfo. windowId + ". Newly focused tab: " + activeInfo.tabId);
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        console.log("TabId :" + tab.id + " url: " + tab.url);
    })
});
/*

chrome.windows.onFocusChanged.addListener(function () {});
//fire when active tab changeddd
//chrome.tabs.onActivated.addListener(function callback)

// actually fire when active tab changed
//https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

//https://developer.chrome.com/extensions/windows
onFocusChanged -> returns   chrome.windows.WINDOW_ID_NONE if all Chrome windows have lost focus

chrome.tabs.onCreated.addListener(function callback)

//document.URL // gives current url
https://developer.chrome.com/extensions/background_pages

*/
