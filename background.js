
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });


});

chrome.windows.onFocusChanged.addListener((windowId) => {
    console.log("Newly focused window: " + windowId);
    // if newly focused window === -1 then the browser is not in focus, this means other applications like the file browser is active
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("Newly focused window: " + activeInfo. windowId + ". Newly focused tab: " + activeInfo.tabId);
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
