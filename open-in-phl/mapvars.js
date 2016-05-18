
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>SugarHouse Casino</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WinAtSugarHouse">@WinAtSugarHouse</a>: Celebrate #WorldBakingDay with a larger than life slice of carrot cake from Hugo\'s Frog Bar &amp; Chop House! #OpenInPHL https://t.co/vVEFRuuGZV</p> <p style="font-size: 10px;">Tue May 17 15:08 | <a target="_blank" href="https://twitter.com/statuses/732588498029563908">Read on Twitter</a></p> <hr> <p> Phone: (877) 477-3715<br/> Directions: <a href="https://maps.google.com?daddr=1001+N+Delaware+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1001 N Delaware Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.sugarhousecasino.com">https://www.sugarhousecasino.com</a> </p> </div> </div>', 'lat': 39.964030187577244, 'lng': -75.1325798034668, 'name': 'SugarHouse Casino'}, {'content': '<div id="content"> <h1>Mama\'s Vegetarian</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MamasVegetarian">@MamasVegetarian</a>: Thank you Monika for the new board. It really looks amazing! #mamasvegetarian #falafel #philadelphia #openinphl... https://t.co/Rv9sbWwcyt</p> <p style="font-size: 10px;">Sun May 15 23:48 | <a target="_blank" href="https://twitter.com/statuses/731994660709621760">Read on Twitter</a></p> <hr> <p> Phone: (215) 751-0477<br/> Directions: <a href="https://maps.google.com?daddr=18+S+20th+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">18 S 20th St (at Ludlow St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://mamasvegetarian.com">http://mamasvegetarian.com</a> </p> </div> </div>', 'lat': 39.952634, 'lng': -75.173362, 'name': "Mama's Vegetarian"}];

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