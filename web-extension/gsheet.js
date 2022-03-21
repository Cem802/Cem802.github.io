
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

        for(let i = 0; i < data.length; i++){

            if(data[i].Link == url){

                notification(data[i].Link, data[i].Reason);

                chrome.browserAction.setPopup({
                    popup: "popup2.html"
                });
            }
        }
    }

    Sheetsu.read("https://sheetsu.com/apis/v1.0su/292ae7b1e810", {}, successFunc);
}

export{find};