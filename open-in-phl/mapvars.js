
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Sonesta Philadelphia Rittenhouse Square</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonestaPhilly">@SonestaPhilly</a>: #DYN our @RuthsChrisPhilly will be open on July 4th from 4:30 PM - 9:00 PM?! #OpenInPHL #VisitPhilly #RuthsChris #July4th #RittenhouseSquare</p> <p style="font-size: 10px;">Tue Jun 27 14:01 | <a target="_blank" href="https://twitter.com/statuses/879701102760996865">Read on Twitter</a></p> <hr> <p> Phone: (215) 561-7500<br/> Directions: <a href="https://maps.google.com?daddr=1800+Market+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1800 Market St (at 18th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square">https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square</a> </p> </div> </div>', 'lng': -75.17009092719478, 'lat': 39.953140176691775, 'name': 'Sonesta Philadelphia Rittenhouse Square'}, {'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/DPvRx1XA3c</p> <p style="font-size: 10px;">Thu Jun 22 14:50 | <a target="_blank" href="https://twitter.com/statuses/877901512944623616">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067, 'lat': 39.944911, 'name': 'Ristorante Aroma'}];

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