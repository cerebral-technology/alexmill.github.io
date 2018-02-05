
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.15955, 'lat': 39.961225, 'content': '<div id="content"> <h1>Prohibition Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ProhibitionTR">@ProhibitionTR</a>: You know what you need today? Rainbow Sprinkle Griddle Cakes. We\'re running brunch 11am until 4pm all day.… https://t.co/DtYSyUXII6</p> <p style="font-size: 10px;">Mon Feb 05 15:35 | <a target="_blank" href="https://twitter.com/statuses/960537312999493632">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-1818<br/> Directions: <a href="https://maps.google.com?daddr=501+N+13th+St%2C+Philadelphia%2C+PA+19123" target="_blank">501 N 13th St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://theprohibitiontaproom.com">http://theprohibitiontaproom.com</a> </p> </div> </div>', 'name': 'Prohibition Tap Room'}, {'lng': -75.1664188069332, 'lat': 39.94378257690332, 'content': '<div id="content"> <h1>Sweet Freedom Bakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/sfbakery">@sfbakery</a>: Are you ready for some #Eagles #Football?? Happy #SuperBowlSunday!! We’re ready!!!! #GoEagles #FlyEaglesFly #WereGonnaWin #OpenInPHL</p> <p style="font-size: 10px;">Sun Feb 04 15:20 | <a target="_blank" href="https://twitter.com/statuses/960171259517702149">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1899<br/> Directions: <a href="https://maps.google.com?daddr=1424+South+St+%28at+15th+St.%29%2C+Philadelphia%2C+PA+19146" target="_blank">1424 South St (at 15th St.), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.sweetfreedombakery.com">http://www.sweetfreedombakery.com</a> </p> </div> </div>', 'name': 'Sweet Freedom Bakery'}];

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