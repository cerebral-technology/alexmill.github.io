
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'SugarHouse Casino', 'lat': 39.964030187577244, 'content': '<div id="content"> <h1>SugarHouse Casino</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WinAtSugarHouse">@WinAtSugarHouse</a>: Hugo\'s Frog Bar &amp; Chop House is NOW #OpenInPHL for #lunch and dinner! #FrogInPhilly | https://t.co/fu5Mpyq4vb https://t.co/GKsAQsueEg</p> <p style="font-size: 10px;">Fri May 06 14:01 | <a target="_blank" href="https://twitter.com/statuses/728585478568611841">Read on Twitter</a></p> <hr> <p> Phone: (877) 477-3715<br/> Directions: <a href="https://maps.google.com?daddr=1001+N+Delaware+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1001 N Delaware Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.sugarhousecasino.com">https://www.sugarhousecasino.com</a> </p> </div> </div>', 'lng': -75.1325798034668}];

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