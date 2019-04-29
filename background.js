import  { CurrentTab } from './classes/CurrentTab.js';

(function tabTrackingInit() {

	chrome.runtime.onInstalled.addListener(function () {
		chrome.storage.sync.set({color: '#3aa757'}, function () {
			console.log("The color is green.");
		});


	});

	chrome.windows.onFocusChanged.addListener((windowId) => {
		console.log("Newly focused window: " + windowId);
		if (windowId !== -1) {
			chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
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
		console.log("Current window: " + activeInfo.windowId + ". Newly focused tab: " + activeInfo.tabId);
		chrome.tabs.get(activeInfo.tabId, (tab) => {
			var domain = getDomain(tab.url);
			console.log("TabId :" + tab.id + " url: " + domain);

			chrome.storage.sync.get([domain], function (result) {
				// Notify that we saved.
				debugger;
				console.log(result);
				if (isEmpty(result)) {
					var domainConfig = {
						[domain]: {
							startTime: new Date().getTime(),
							endTime: null,
							totalElasped: 0
						}
					};
					chrome.storage.sync.set(domainConfig, function () {
						// Notify that we saved.
						debugger;
						console.log('Settings saved');
					});
				} else {
					//result.
				}

			});

		})

	});
//chrome.tabs.onRemoved TODO

	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		// read changeInfo data and do something with it (like read the url)
		if (changeInfo.url) {
			console.log("New Url for tab :" + tab.id + "  is : " + getDomain(changeInfo.url));
			// do something here

		}
	});

	function isEmpty(obj) {
		return Object.entries(obj).length === 0;
	}

	function getDomain(tabUrl) {
		var url = new URL(tabUrl);
		return url.hostname;
	}

}());