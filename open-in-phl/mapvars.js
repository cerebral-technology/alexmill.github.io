
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>OCF Coffee House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ocfcoffeehouse">@ocfcoffeehouse</a>: We heard calories don’t count on #Mondays 😉\U0001f92b . . . #fairmount #phillyfood #phillyfoodie #philadelphiafoodie… https://t.co/RyieAAAu74</p> <p style="font-size: 10px;">Mon Jul 16 12:04 | <a target="_blank" href="https://twitter.com/statuses/1018828813814333440">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1745+South+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1745 South St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.ocfrealty.com/coffee-house">http://www.ocfrealty.com/coffee-house</a> </p> </div> </div>', 'lng': -75.17199446931554, 'lat': 39.94450520117838, 'name': 'OCF Coffee House'}];

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