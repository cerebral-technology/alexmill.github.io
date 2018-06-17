
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.942260518142334, 'name': 'Brauhaus Schmitz', 'lng': -75.15469483778953, 'content': '<div id="content"> <h1>Brauhaus Schmitz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BrauhausSchmitz">@BrauhausSchmitz</a>: There’s customers here already &amp; doors are open for the opening ceremony &amp; first @fifaworldcup match at 11:00am!! I… https://t.co/9osAmh505I</p> <p style="font-size: 10px;">Thu Jun 14 14:26 | <a target="_blank" href="https://twitter.com/statuses/1007268116311740416">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=718+South+St+%28at+8th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">718 South St (at 8th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="https://www.brauhausschmitz.com/">https://www.brauhausschmitz.com/</a> </p> </div> </div>'}];

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