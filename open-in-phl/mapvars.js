
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: New 11PM opening time at #VoyeurNightclub starting this weekend. #OpeninPHL #HouseMusic #EDM https://t.co/CguCNhmZaI</p> <p style="font-size: 10px;">Fri Oct 07 14:31 | <a target="_blank" href="https://twitter.com/statuses/784400865453047808">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lat': 39.948394683746855}, {'lng': -75.13542052725909, 'content': '<div id="content"> <h1>Good Spoon Soupery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GoodSpoon">@GoodSpoon</a>: Sunday Sunday Sunday #treats #fallhours #soupseason #openinphl Today\'s Menu: SOUPS- Roasted… https://t.co/9VpOZWY5Cd</p> <p style="font-size: 10px;">Sun Oct 02 16:31 | <a target="_blank" href="https://twitter.com/statuses/782619019467710464">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1400+N+Front+St%2C+Philadelphia%2C+PA+19122" target="_blank">1400 N Front St, Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="http://www.goodspoonfoods.com">http://www.goodspoonfoods.com</a> </p> </div> </div>', 'name': 'Good Spoon Soupery', 'lat': 39.971977955281794}];

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