import {find} from "./gsheet.js";

var currenturl;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {

        currenturl = current_tab_info.url;
        console.log(currenturl);
        
        chrome.browserAction.setPopup({
            popup: "popup.html"
        });

        find(currenturl);
    }); 
});