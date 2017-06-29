
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Sonesta Philadelphia Rittenhouse Square', 'lng': -75.17009092719478, 'content': '<div id="content"> <h1>Sonesta Philadelphia Rittenhouse Square</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonestaPhilly">@SonestaPhilly</a>: #DYN our @RuthsChrisPhilly will be open on July 4th from 4:30 PM - 9:00 PM?! #OpenInPHL #VisitPhilly #RuthsChris #July4th #RittenhouseSquare</p> <p style="font-size: 10px;">Thu Jun 29 14:01 | <a target="_blank" href="https://twitter.com/statuses/880425879649890304">Read on Twitter</a></p> <hr> <p> Phone: (215) 561-7500<br/> Directions: <a href="https://maps.google.com?daddr=1800+Market+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1800 Market St (at 18th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square">https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square</a> </p> </div> </div>', 'lat': 39.953140176691775}];

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