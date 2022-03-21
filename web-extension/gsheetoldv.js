
function notification(tlink, reason) {
    chrome.notifications.create(
        {
            title: 'Attention',
            message: "This site has been reported to be a scam: "+tlink+" due to the following reason: "+reason,
            iconUrl: '/images/slp48.png',
            type: 'basic'
        }
    )
}


function find(url){

    function successFunc(data) {
        console.log(data);
        console.log(data[0].Link);

        if(true){
            notification(data[0].Link, data[0].Reason);

            chrome.browserAction.setPopup({
                popup: "popup2.html"
            });
        }
    }

    var searchQuery = {
        Link: url
    };
    
    Sheetsu.read("https://sheetsu.com/apis/v1.0su/292ae7b1e810", {search: searchQuery}, successFunc);
}

export{find};