chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.executeScript({
        file: 'scripts.js'
    });
});