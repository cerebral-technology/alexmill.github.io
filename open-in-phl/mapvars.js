
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>The Hungry Pigeon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/hungry__pigeon">@hungry__pigeon</a>: You guys! @TheWalkingBread is a champion! Come and get it!! 🐦🏆 #openinphl @ Hungry Pigeon https://t.co/lrLMEPnmuq</p> <p style="font-size: 10px;">Sun Sep 11 12:58 | <a target="_blank" href="https://twitter.com/statuses/774955372310179840">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=743+S+4th+St+%28at+Fitzwater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">743 S 4th St (at Fitzwater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.hungrypigeon.com">http://www.hungrypigeon.com</a> </p> </div> </div>', 'name': 'The Hungry Pigeon', 'lng': -75.14974679258215, 'lat': 39.939116963895856}, {'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #SATURDAYNIGHT #OPENinPHL #AFTERPARTY #VoyeurNightclub #Guestlist https://t.co/hGmkUb9opB https://t.co/xXHd3eWPCu</p> <p style="font-size: 10px;">Sat Sep 10 17:42 | <a target="_blank" href="https://twitter.com/statuses/774664261029298176">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lng': -75.16172330266902, 'lat': 39.948394683746855}];

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