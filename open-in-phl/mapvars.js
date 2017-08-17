
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': "José Pistola's", 'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: We\'ll be ready for any and all soccer fans and ALL of the Liverpool games! #openinphl Premier League - Tomorrow 7:30AM vs Watford</p> <p style="font-size: 10px;">Fri Aug 11 15:16 | <a target="_blank" href="https://twitter.com/statuses/896027638304841729">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28at+Manning+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (at Manning St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com/">http://www.josepistolas.com/</a> </p> </div> </div>', 'lat': 39.947505895213666, 'lng': -75.16617507121423}];

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