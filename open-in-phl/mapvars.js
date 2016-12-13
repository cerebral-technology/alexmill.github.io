
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.944911, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/faP4plJrmw</p> <p style="font-size: 10px;">Mon Dec 12 16:15 | <a target="_blank" href="https://twitter.com/statuses/808344555401707521">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067}, {'lat': 39.930492, 'name': 'The Industry Bar', 'content': '<div id="content"> <h1>The Industry Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/theindustrybar">@theindustrybar</a>: We\'re #OpenInPHL for #ChristmasEve so book your reservations now! Can\'t wait to ring in the holidays with all our... https://t.co/u0nh6idp5c</p> <p style="font-size: 10px;">Sat Dec 10 23:21 | <a target="_blank" href="https://twitter.com/statuses/807726972579225600">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-9500<br/> Directions: <a href="https://maps.google.com?daddr=1401+E+Moyamensing+Ave+%28at+Reed+St.%29%2C+Philadelphia%2C+PA+19147" target="_blank">1401 E Moyamensing Ave (at Reed St.), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.theindustrybar.com">http://www.theindustrybar.com</a> </p> </div> </div>', 'lng': -75.149676}];

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