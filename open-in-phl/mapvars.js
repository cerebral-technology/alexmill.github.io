
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17352056073281, 'lat': 39.936654, 'name': 'American Sardine Bar', 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: Come get fancy with us and @AlmanacBeer tomorrow! #PBW2016 #PhillyBrunch #OpenInPHL https://t.co/gHo0s1KHWi</p> <p style="font-size: 10px;">Sun Jun 05 03:35 | <a target="_blank" href="https://twitter.com/statuses/739299488112771072">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>'}, {'lng': -75.15403747558594, 'lat': 39.94175842522628, 'name': 'The Good King Tavern', 'content': '<div id="content"> <h1>The Good King Tavern</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TGKtavern">@TGKtavern</a>: Come on by until then! #openinphl @ The Good King Tavern https://t.co/O0JA0Fco6U</p> <p style="font-size: 10px;">Mon May 30 20:44 | <a target="_blank" href="https://twitter.com/statuses/737384172348657664">Read on Twitter</a></p> <hr> <p> Phone: (215) 625-3700<br/> Directions: <a href="https://maps.google.com?daddr=614+S+7th+St+%28at+Kater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">614 S 7th St (at Kater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://thegoodkingtavern.com">http://thegoodkingtavern.com</a> </p> </div> </div>'}, {'lng': -75.1713124, 'lat': 39.927221, 'name': 'South Philadelphia Tap Room', 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: just a heads up, we are totally open tonight til 2am, kitchen til 1am #openinphl</p> <p style="font-size: 10px;">Mon May 30 20:06 | <a target="_blank" href="https://twitter.com/statuses/737374575974027264">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>'}, {'lng': -75.15789844306211, 'lat': 39.94620097040777, 'name': 'Varga Bar', 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @VargaBar is #OpenInPHL today. Normal business hours... Open at 4pm, kitchen til 1am, bar til 2am. Happy hour is still 4-6pm! See you soon!</p> <p style="font-size: 10px;">Mon May 30 19:36 | <a target="_blank" href="https://twitter.com/statuses/737367053745721344">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>'}];

    var contentStrings = [];
    var infowindow = [];
    var marker = [];

    for(i = 0; i < tweets.length; i++){
        infowindow[i] = new google.maps.InfoWindow({
            content: tweets[i]["content"],
            maxWidth: 400
        });
        marker[i] = new google.maps.Marker({
            position: {lat: tweets[i]["lat"], lng: tweets[i]["lng"]},
            map: map,
            title: tweets[i]["name"],
            tweet_index: i
        });
        marker[i].addListener('click', function() {
            infowindow[this.tweet_index].open(map, marker[this.tweet_index]);
        });
    }
}