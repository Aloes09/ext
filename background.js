
var time = 180000;
var isStreamOnline = false;
var game = "";

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
                if(data.stream.game!== null)
                {
                game = data.stream.game;
                localStorage.setItem("game",game);
                }
                
                console.log("Gra = " + game);
                isStreamOnline = true;
                chrome.browserAction.setBadgeText({text: "LIVE"});
                localStorage.setItem("isStreamOnline", "true");


            }
            console.log("Online = " + isStreamOnline);
            console.log("----------------------------------------");
        },
        error: function (data) {
            console.log("error");
        }
    });

    setTimeout(reapeat, 1);
}

function reapeat() {
  
        setTimeout(isOnline, time);
 
}



localStorage.removeItem("isStreamOnline");
localStorage.removeItem("streamName");


isOnline();

