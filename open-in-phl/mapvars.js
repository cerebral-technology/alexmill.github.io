
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.159976, 'name': 'Garces Trading Company', 'content': '<div id="content"> <h1>Garces Trading Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GarcesTradingCo">@GarcesTradingCo</a>: We will be #openinphl with some brand new menu items! This is a sneak preview of our Squash… https://t.co/VuX02j1hqY</p> <p style="font-size: 10px;">Fri Oct 14 14:37 | <a target="_blank" href="https://twitter.com/statuses/786938886941323265">Read on Twitter</a></p> <hr> <p> Phone: (215) 574-1099<br/> Directions: <a href="https://maps.google.com?daddr=1111+Locust+St+%28at+Quince+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1111 Locust St (at Quince St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.garcestradingcompany.com">http://www.garcestradingcompany.com</a> </p> </div> </div>', 'lat': 39.947674}];

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