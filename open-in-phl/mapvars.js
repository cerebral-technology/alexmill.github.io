
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Sweet Freedom Bakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/sfbakery">@sfbakery</a>: #OpenInPHL #SundayFunDay #FindMeGlutenFree</p> <p style="font-size: 10px;">Sun Jul 23 15:28 | <a target="_blank" href="https://twitter.com/statuses/889145137368109058">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1899<br/> Directions: <a href="https://maps.google.com?daddr=1424+South+St+%28at+15th+St.%29%2C+Philadelphia%2C+PA+19146" target="_blank">1424 South St (at 15th St.), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.sweetfreedombakery.com">http://www.sweetfreedombakery.com</a> </p> </div> </div>', 'lng': -75.166464, 'lat': 39.943829, 'name': 'Sweet Freedom Bakery'}, {'content': '<div id="content"> <h1>The Bagel Place</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/The_Bagel_Place">@The_Bagel_Place</a>: Come on down and get some fresh bagels and delicious coffee to brighten your day on this gloomy Sunday. We\'re #openinPHL from 7-4!</p> <p style="font-size: 10px;">Sun Jul 23 14:15 | <a target="_blank" href="https://twitter.com/statuses/889126893731147776">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=404+Queen+St%2C+Philadelphia%2C+PA+19147" target="_blank">404 Queen St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.TheBagelPlace.com/">http://www.TheBagelPlace.com/</a> </p> </div> </div>', 'lng': -75.15024, 'lat': 39.937473, 'name': 'The Bagel Place'}];

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