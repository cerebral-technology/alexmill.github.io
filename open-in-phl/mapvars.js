
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Khyber Pass Pub', 'content': '<div id="content"> <h1>Khyber Pass Pub</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/KhyberPassPub">@KhyberPassPub</a>: We\'re back in business! Come hang out. We missed you. #openinphl https://t.co/qhepJbT6R9</p> <p style="font-size: 10px;">Sat Sep 17 01:03 | <a target="_blank" href="https://twitter.com/statuses/776949580915236865">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-5888<br/> Directions: <a href="https://maps.google.com?daddr=56+S+2nd+St+%28btwn+Market+%26+Chestnut%29%2C+Philadelphia%2C+PA+19106" target="_blank">56 S 2nd St (btwn Market & Chestnut), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.khyberpasspub.com/">http://www.khyberpasspub.com/</a> </p> </div> </div>', 'lng': -75.14408029176288, 'lat': 39.9486033841628}, {'name': 'The Hungry Pigeon', 'content': '<div id="content"> <h1>The Hungry Pigeon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/hungry__pigeon">@hungry__pigeon</a>: You guys! @TheWalkingBread is a champion! Come and get it!! 🐦🏆 #openinphl @ Hungry Pigeon https://t.co/lrLMEPnmuq</p> <p style="font-size: 10px;">Sun Sep 11 12:58 | <a target="_blank" href="https://twitter.com/statuses/774955372310179840">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=743+S+4th+St+%28at+Fitzwater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">743 S 4th St (at Fitzwater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.hungrypigeon.com">http://www.hungrypigeon.com</a> </p> </div> </div>', 'lng': -75.14974679258215, 'lat': 39.939116963895856}];

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