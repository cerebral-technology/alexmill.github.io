
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.149676, 'name': 'The Industry Bar', 'lat': 39.930492, 'content': '<div id="content"> <h1>The Industry Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/theindustrybar">@theindustrybar</a>: We\'re #OpenInPHL for #ChristmasEve so book your reservations now! Can\'t wait to ring in the holidays with all our... https://t.co/u0nh6idp5c</p> <p style="font-size: 10px;">Sat Dec 10 23:21 | <a target="_blank" href="https://twitter.com/statuses/807726972579225600">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-9500<br/> Directions: <a href="https://maps.google.com?daddr=1401+E+Moyamensing+Ave+%28at+Reed+St.%29%2C+Philadelphia%2C+PA+19147" target="_blank">1401 E Moyamensing Ave (at Reed St.), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.theindustrybar.com">http://www.theindustrybar.com</a> </p> </div> </div>'}];

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