
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.94876539524823, 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: Phillytapfinder Craft Beer Locator @RussianRiverBC Pliny the Elder just replaced RR Blind Pig #Hoptastic #OpeninPHL #WeRBackBaby!</p> <p style="font-size: 10px;">Thu Oct 19 18:23 | <a target="_blank" href="https://twitter.com/statuses/921079312270483456">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>', 'lng': -75.16623213887215, 'name': 'Good Dog Bar & Restaurant'}, {'lat': 39.927221, 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: Hey, guys. Are you looking for a space to host your holiday party or social event? #OpenInPHL #SouthPhilly https://t.co/KWXyoSB0nY</p> <p style="font-size: 10px;">Wed Oct 18 22:35 | <a target="_blank" href="https://twitter.com/statuses/920780305660817410">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'lng': -75.1713124, 'name': 'South Philadelphia Tap Room'}];

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