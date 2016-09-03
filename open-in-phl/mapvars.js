
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Federal Donuts</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FederalDonuts">@FederalDonuts</a>: #openinPHL all weekend and Labor Day always and forever https://t.co/pXYEszjzSV</p> <p style="font-size: 10px;">Sat Sep 03 16:51 | <a target="_blank" href="https://twitter.com/statuses/772114840093687808">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-8258<br/> Directions: <a href="https://maps.google.com?daddr=1632+Sansom+St+%28at+17th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1632 Sansom St (at 17th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.federaldonuts.com">http://www.federaldonuts.com</a> </p> </div> </div>', 'name': 'Federal Donuts', 'lat': 39.95063066163185, 'lng': -75.16814156131629}, {'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: Hey guys, in addition to serving brunch on Sat &amp; Sun, we\'re also gonna do it on Monday! 11am-3pm | #LaborDayWeekend #OpenInPHL</p> <p style="font-size: 10px;">Sat Sep 03 00:00 | <a target="_blank" href="https://twitter.com/statuses/771860420395208704">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'name': 'South Philadelphia Tap Room', 'lat': 39.927221, 'lng': -75.1713124}, {'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: Shop our sales all weekend long, we\'re open normal hours (8am-10pm) #openinphl</p> <p style="font-size: 10px;">Thu Sep 01 20:32 | <a target="_blank" href="https://twitter.com/statuses/771445665994043392">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'name': 'Mariposa Food Co-op', 'lat': 39.94819089608984, 'lng': -75.22062916994227}];

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