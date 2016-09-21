
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.15789844306211, 'lat': 39.94620097040777, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @VargaBar is #OpenInPHL all day today! Brunch til 3pm, dinner til 1am, bar til 2am! $5 draft &amp; shot specials during NFL games too! Stop by!</p> <p style="font-size: 10px;">Sun Sep 18 16:53 | <a target="_blank" href="https://twitter.com/statuses/777551111339315200">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar'}, {'lng': -75.14408029176288, 'lat': 39.9486033841628, 'content': '<div id="content"> <h1>Khyber Pass Pub</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/KhyberPassPub">@KhyberPassPub</a>: We\'re back in business! Come hang out. We missed you. #openinphl https://t.co/qhepJbT6R9</p> <p style="font-size: 10px;">Sat Sep 17 01:03 | <a target="_blank" href="https://twitter.com/statuses/776949580915236865">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-5888<br/> Directions: <a href="https://maps.google.com?daddr=56+S+2nd+St+%28btwn+Market+%26+Chestnut%29%2C+Philadelphia%2C+PA+19106" target="_blank">56 S 2nd St (btwn Market & Chestnut), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.khyberpasspub.com/">http://www.khyberpasspub.com/</a> </p> </div> </div>', 'name': 'Khyber Pass Pub'}];

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