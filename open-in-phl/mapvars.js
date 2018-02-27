
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room', 'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: Rest assured, our Passyunk Avenue windows will be #OpenInPHL this evening. https://t.co/DFBiTwTmWp</p> <p style="font-size: 10px;">Wed Feb 21 19:38 | <a target="_blank" href="https://twitter.com/statuses/966396616440770561">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>', 'lat': 39.929794448959385, 'lng': -75.16348648828463}, {'name': 'Memphis Taproom', 'content': '<div id="content"> <h1>Memphis Taproom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/memphistap">@memphistap</a>: Cornhole time. Patio is open. Come enjoy the day. #memphistaproom #openinphl https://t.co/froha25T8b</p> <p style="font-size: 10px;">Tue Feb 20 20:26 | <a target="_blank" href="https://twitter.com/statuses/966046459136233474">Read on Twitter</a></p> <hr> <p> Phone: (215) 425-4460<br/> Directions: <a href="https://maps.google.com?daddr=2331+E+Cumberland+St+%28at+Memphis+St%29%2C+Philadelphia%2C+PA+19125" target="_blank">2331 E Cumberland St (at Memphis St), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.memphistaproom.com">http://www.memphistaproom.com</a> </p> </div> </div>', 'lat': 39.98034176413913, 'lng': -75.12318587076385}, {'name': 'Dock Street Brewery & Restaurant', 'content': '<div id="content"> <h1>Dock Street Brewery & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DockStreetBeer">@DockStreetBeer</a>: When winter\'s away the city will play! 🌞 Join us today &amp; tomorrow as we kick it outdoors in this amazing spring wea… https://t.co/VnavDfTykZ</p> <p style="font-size: 10px;">Tue Feb 20 18:31 | <a target="_blank" href="https://twitter.com/statuses/966017385089196032">Read on Twitter</a></p> <hr> <p> Phone: (215) 726-2337<br/> Directions: <a href="https://maps.google.com?daddr=701+S+50th+St+%28at+Baltimore+Ave%29%2C+Philadelphia%2C+PA+19143" target="_blank">701 S 50th St (at Baltimore Ave), Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://dockstreetbeer.com">http://dockstreetbeer.com</a> </p> </div> </div>', 'lat': 39.94786332555632, 'lng': -75.22299078876362}];

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