
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.92801736693317, 'name': 'Watkins Drinkery', 'content': '<div id="content"> <h1>Watkins Drinkery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WatkinsDrinkery">@WatkinsDrinkery</a>: ✨Beer tastes better when u drink it over a long weekend✨ $3 draughts til 7! Happy holidays! #happyhour… https://t.co/FpQvvSZTqk</p> <p style="font-size: 10px;">Fri Dec 22 22:37 | <a target="_blank" href="https://twitter.com/statuses/944336238919737347">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-0175<br/> Directions: <a href="https://maps.google.com?daddr=1712+S+10th+St%2C+Philadelphia%2C+PA+19148" target="_blank">1712 S 10th St, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://watkinsdrinkery.com">http://watkinsdrinkery.com</a> </p> </div> </div>', 'lng': -75.1619572958356}, {'lat': 39.95133267106301, 'name': 'Home Sweet Homebrew', 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: Last minute gifts? Stocking stuffers? No problem! #OpeninPHL tonight til 7! Come in for Happy Hour! #FreeBeer... https://t.co/p13z7TZWT9</p> <p style="font-size: 10px;">Fri Dec 22 18:44 | <a target="_blank" href="https://twitter.com/statuses/944277394839490560">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'lng': -75.17401059383587}, {'lat': 39.94940796479056, 'name': 'Philly PR Girl', 'content': '<div id="content"> <h1>Philly PR Girl</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Philly_PR_Girl">@Philly_PR_Girl</a>: Did you know @YakitoriBoy is open on Christmas Day? Doors open at 5 p.m., happy hour is from 5 - 7 p.m. and karaoke… https://t.co/gc45QPt3EN</p> <p style="font-size: 10px;">Fri Dec 22 17:03 | <a target="_blank" href="https://twitter.com/statuses/944251968519835649">Read on Twitter</a></p> <hr> <p> Phone: (267) 930-8733<br/> Directions: <a href="https://maps.google.com?daddr=1315+Walnut+St+Ste+302%2C+Philadelphia%2C+PA+19107" target="_blank">1315 Walnut St Ste 302, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.16295850276947}, {'lat': 39.96740055333233, 'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #OpeninPHL #christmaseve #sevenfishes + regular menu #holidaydrinks #beforeandafter mass… https://t.co/4c6Ffkxxig</p> <p style="font-size: 10px;">Tue Dec 19 19:30 | <a target="_blank" href="https://twitter.com/statuses/943201993593585665">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'lng': -75.17541492227016}];

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