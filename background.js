console.log("funkcja");
var recheckTime = 10000;
var recheckTimeWhileOnline = 25000;
var isStreamOnline = false;

function isOnline() {
 console.log("Sprawdzam czy Izak jest Online....")
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 120]});
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/izakooo ',
        headers: {
            'Client-ID': 'o5a2cwx9qbuuha36m578spkb0n8tkf'


        },
        success: function (data) {
            if (data['stream'] == null) {

                isStreamOnline = false;
                chrome.browserAction.setBadgeText({text: ""});
                localStorage.setItem("isStreamOnline", "false");

            } else {

                isStreamOnline = true;
                chrome.browserAction.setBadgeText({text: "LIVE"});
                localStorage.setItem("isStreamOnline", "true");


            }
            console.log("isStreamOnline = " + isStreamOnline);
            console.log("----------------------------------------");
        },
        error: function (data) {
            console.log("isOnline() failed getting data");
        }
    });

    setTimeout(delayChecking, 1);
}

function delayChecking() {
    if (isStreamOnline == true) {
        setTimeout(isOnline, recheckTimeWhileOnline);
    } else {
        setTimeout(isOnline, recheckTime);
    }
}



localStorage.removeItem("isStreamOnline");
localStorage.removeItem("streamName");


isOnline();

