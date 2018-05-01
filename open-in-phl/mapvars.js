
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.974539, 'content': '<div id="content"> <h1>The Pole Studio</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PoleBasics">@PoleBasics</a>: Open 1611 Frankford Ave #weareopen #openinphl #thingstodoinphilly #christmasover #floorwork @… https://t.co/f7X7ZyhQ9X</p> <p style="font-size: 10px;">Sat Apr 28 04:48 | <a target="_blank" href="https://twitter.com/statuses/990090463502831616">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1611+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1611 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.polebasics.com/">http://www.polebasics.com/</a> </p> </div> </div>', 'lng': -75.133319, 'name': 'The Pole Studio'}, {'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Welcome #PENNRELAYS and gorgeous weather scheduled throughout this weekend. Head to #WoodysPHL #lgbtq #community… https://t.co/1i0DlAuY9A</p> <p style="font-size: 10px;">Fri Apr 27 15:37 | <a target="_blank" href="https://twitter.com/statuses/989891303021346822">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'lng': -75.16220781624595, 'name': "Woody's"}, {'lat': 39.948394683746855, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Guestlist open for tonight AND for tomorrow\'s #GLOWparty. Note our special opening time for #GLOW. #voyeurnightclub… https://t.co/SwF5qY4RkX</p> <p style="font-size: 10px;">Fri Apr 27 15:13 | <a target="_blank" href="https://twitter.com/statuses/989885153102229504">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lng': -75.16172330266902, 'name': 'Voyeur'}];

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