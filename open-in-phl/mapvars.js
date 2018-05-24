
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.15469483778953, 'content': '<div id="content"> <h1>Brauhaus Schmitz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BrauhausSchmitz">@BrauhausSchmitz</a>: Dunno about you but this weather has us real Thirsty on this fine Thursday!! Doors opened at 11:30am and Happy Hour… https://t.co/2jNbxSOoRv</p> <p style="font-size: 10px;">Thu May 24 15:53 | <a target="_blank" href="https://twitter.com/statuses/999679842642726912">Read on Twitter</a></p> <hr> <p> Phone: (267) 909-8814<br/> Directions: <a href="https://maps.google.com?daddr=718+South+St+%28at+8th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">718 South St (at 8th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://brauhausschmitz.com">http://brauhausschmitz.com</a> </p> </div> </div>', 'lat': 39.942260518142334, 'name': 'Brauhaus Schmitz'}, {'lng': -75.17541492227016, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: Memorial Day #openinphl https://t.co/DaOzUOT8Om</p> <p style="font-size: 10px;">Tue May 22 16:22 | <a target="_blank" href="https://twitter.com/statuses/998962439055183873">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'lat': 39.96740055333233, 'name': 'London Grill'}, {'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #THURDSAYNIGHT #DJGHOST spins tonight on the mainfloor with #DJMIKENYCE in the lounge! Doors open at Midnight. Gues… https://t.co/dP9utSM5Jg</p> <p style="font-size: 10px;">Thu May 17 21:44 | <a target="_blank" href="https://twitter.com/statuses/997231368626233354">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855, 'name': 'Voyeur'}];

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