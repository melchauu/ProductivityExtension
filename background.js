
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });


});

chrome.windows.onFocusChanged.addListener((windowId) => {
    console.log("Newly focused window: " + windowId);
    if (windowId !== -1) {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            if (tabs && tabs.length > 0) {
                console.log("Existing focused tab :" + tabs[0].id + " url: " + getDomain(tabs[0].url));
            }
        });
    } /*else {
        chrome.storage.sync.set({'value': theValue}, function() {
            // Notify that we saved.
            message('Settings saved');
        });
    }*/
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("Current window: " + activeInfo. windowId + ". Newly focused tab: " + activeInfo.tabId);
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        console.log("TabId :" + tab.id + " url: " + getDomain(tab.url));
    })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
        console.log("New Url for tab :" + tab.id + "  is : " + getDomain(changeInfo.url));
        // do something here

    }
});

function getDomain(tabUrl) {
    var url = new URL(tabUrl);
    return url.hostname;
}

