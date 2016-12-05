
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Good Dog Bar & Restaurant', 'lat': 39.94876539524823, 'lng': -75.16623213887215, 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: Our kitchen is officially open! Sorry for the inconvenience! No you can get your booze and grub on! #OpenInPHL... https://t.co/oIfuyKdFeT</p> <p style="font-size: 10px;">Tue Nov 29 18:18 | <a target="_blank" href="https://twitter.com/statuses/803664328033468416">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>'}];

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