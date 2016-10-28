
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>The Avenue Delicatessen</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheAvenueDeli">@TheAvenueDeli</a>: Lansdowne Ave is closed for a film shoot but we\'re open! Please park at the PNC Bank lot or the municipal lot off H… https://t.co/ZBZIiCCFLh</p> <p style="font-size: 10px;">Sun Oct 23 14:47 | <a target="_blank" href="https://twitter.com/statuses/790203043669127168">Read on Twitter</a></p> <hr> <p> Phone: (610) 622-3354<br/> Directions: <a href="https://maps.google.com?daddr=27+N+Lansdowne+Ave%2C+Lansdowne%2C+PA+19050" target="_blank">27 N Lansdowne Ave, Lansdowne, PA 19050</a><br/> Website: <a target="_blank" href="http://theavenuedeli.com">http://theavenuedeli.com</a> </p> </div> </div>', 'lat': 39.93896160586083, 'name': 'The Avenue Delicatessen', 'lng': -75.27220487594604}, {'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Tonight #FRIDAYNIGHT at #VOYEURNIGHTCLUB #openinPHL, House Music, Hip Hop, Classics, 3 floors, #Afterparty. https://t.co/AutEsn2WeO</p> <p style="font-size: 10px;">Sat Oct 22 00:01 | <a target="_blank" href="https://twitter.com/statuses/789617700888870912">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855, 'name': 'Voyeur', 'lng': -75.16172330266902}];

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