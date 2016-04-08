
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Friends Center</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FriendsCtr">@FriendsCtr</a>: Alert: 1500 block of Cherry St closed. PECO is repairing fire damage. We have power from a generator. #OpenInPHL https://t.co/nbdDNuCteu</p> <p style="font-size: 10px;">Thu Apr 07 13:27 | <a target="_blank" href="https://twitter.com/statuses/718067597808427008">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1501+Cherry+St+%2815th%29%2C+Philadelphia%2C+PA+19102" target="_blank">1501 Cherry St (15th), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.friendscentercorp.org/">http://www.friendscentercorp.org/</a> </p> </div> </div>', 'lng': -75.16476716317528, 'name': 'Friends Center', 'lat': 39.95557237154348}];

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