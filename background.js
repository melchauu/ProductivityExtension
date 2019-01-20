chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
});
//fire when active tab changeddd
//chrome.tabs.onActivated.addListener(function callback)