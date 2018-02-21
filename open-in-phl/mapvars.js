
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Memphis Taproom', 'lat': 39.98034176413913, 'content': '<div id="content"> <h1>Memphis Taproom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/memphistap">@memphistap</a>: Cornhole time. Patio is open. Come enjoy the day. #memphistaproom #openinphl https://t.co/froha25T8b</p> <p style="font-size: 10px;">Tue Feb 20 20:26 | <a target="_blank" href="https://twitter.com/statuses/966046459136233474">Read on Twitter</a></p> <hr> <p> Phone: (215) 425-4460<br/> Directions: <a href="https://maps.google.com?daddr=2331+E+Cumberland+St+%28at+Memphis+St%29%2C+Philadelphia%2C+PA+19125" target="_blank">2331 E Cumberland St (at Memphis St), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.memphistaproom.com">http://www.memphistaproom.com</a> </p> </div> </div>', 'lng': -75.12318587076385}, {'name': 'Dock Street Brewery & Restaurant', 'lat': 39.94786332555632, 'content': '<div id="content"> <h1>Dock Street Brewery & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DockStreetBeer">@DockStreetBeer</a>: When winter\'s away the city will play! 🌞 Join us today &amp; tomorrow as we kick it outdoors in this amazing spring wea… https://t.co/VnavDfTykZ</p> <p style="font-size: 10px;">Tue Feb 20 18:31 | <a target="_blank" href="https://twitter.com/statuses/966017385089196032">Read on Twitter</a></p> <hr> <p> Phone: (215) 726-2337<br/> Directions: <a href="https://maps.google.com?daddr=701+S+50th+St+%28at+Baltimore+Ave%29%2C+Philadelphia%2C+PA+19143" target="_blank">701 S 50th St (at Baltimore Ave), Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://dockstreetbeer.com">http://dockstreetbeer.com</a> </p> </div> </div>', 'lng': -75.22299078876362}, {'name': 'Brulee Catering', 'lat': 39.929952, 'content': '<div id="content"> <h1>Brulee Catering</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Brulee_Catering">@Brulee_Catering</a>: It\'s the last week to enjoy #RothmanCabin and the seasonal offerings from @AirGrille_PHL! They are open for Preside… https://t.co/AOH3V98OVX</p> <p style="font-size: 10px;">Mon Feb 19 20:18 | <a target="_blank" href="https://twitter.com/statuses/965682001507442688">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1406+S+Front+St%2C+Philadelphia%2C+PA+19147" target="_blank">1406 S Front St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="https://www.brulee-catering.com/">https://www.brulee-catering.com/</a> </p> </div> </div>', 'lng': -75.146603}, {'name': 'Butcher Bar', 'lat': 39.95223224023609, 'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: @butcherbarphl is #OpenInPHL normal hours today! Happy Hour 4-630pm at the bar! https://t.co/kLcIprPU00</p> <p style="font-size: 10px;">Mon Feb 19 18:40 | <a target="_blank" href="https://twitter.com/statuses/965657295752441856">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'lng': -75.17487696250731}, {'name': 'Varga Bar', 'lat': 39.946212231855064, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @vargabar is #OpenInPHL regular hours for President\'s Day. Kitchen/bar open at 4pm... kitchen… https://t.co/Ed5boFyFUk</p> <p style="font-size: 10px;">Mon Feb 19 17:30 | <a target="_blank" href="https://twitter.com/statuses/965639810357526530">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lng': -75.1578756272796}, {'name': 'Philadelphia Runner', 'lat': 39.95053654349037, 'content': '<div id="content"> <h1>Philadelphia Runner</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhillyRun">@PhillyRun</a>: Happy President\'s Day! We are #openinphl with our regular store hours. Stop by and say hi!</p> <p style="font-size: 10px;">Mon Feb 19 15:30 | <a target="_blank" href="https://twitter.com/statuses/965609577067745281">Read on Twitter</a></p> <hr> <p> Phone: (215) 972-8333<br/> Directions: <a href="https://maps.google.com?daddr=1601+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1601 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.philadelphiarunner.com">http://www.philadelphiarunner.com</a> </p> </div> </div>', 'lng': -75.1674454719403}, {'name': 'Independence Seaport Museum', 'lat': 39.94610247783623, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: Steer your way over to the waterfront to explore the Museum, and our historic ships. We are open today!… https://t.co/b0S6uZviwf</p> <p style="font-size: 10px;">Mon Feb 19 15:05 | <a target="_blank" href="https://twitter.com/statuses/965603130283982848">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lng': -75.14019638734368}, {'name': 'Mütter Museum', 'lat': 39.95325817317365, 'content': '<div id="content"> <h1>Mütter Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MutterMuseum">@MutterMuseum</a>: Today is #PresidentsDay and we are #OpeninPHL. What presidential piece do we have in our collection? Find out here:… https://t.co/aWRM0Macbq</p> <p style="font-size: 10px;">Mon Feb 19 13:55 | <a target="_blank" href="https://twitter.com/statuses/965585569731547137">Read on Twitter</a></p> <hr> <p> Phone: (215) 560-8564<br/> Directions: <a href="https://maps.google.com?daddr=19+S+22nd+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">19 S 22nd St (at Ludlow St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://muttermuseum.org">http://muttermuseum.org</a> </p> </div> </div>', 'lng': -75.17665662902431}, {'name': 'The Belgian Cafe', 'lat': 39.96531090100131, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: we are #OpeninPHL all #PresidentsDayWeekend - stop in for today\'s #SundayBrunch Special: Breakfast Tacos with pork… https://t.co/W4iZZvoCou</p> <p style="font-size: 10px;">Sun Feb 18 16:47 | <a target="_blank" href="https://twitter.com/statuses/965266607835623426">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17252802654721}, {'name': 'ComedySportz', 'lat': 39.95138337811553, 'content': '<div id="content"> <h1>ComedySportz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/cszphilly">@cszphilly</a>: Snow problems? No problem! ComedySportz is #OpeninPHL tonight! 7:30 and 10PM. BYOB. Tickets ----&gt;… https://t.co/mx7eF7RA1u</p> <p style="font-size: 10px;">Sat Feb 17 20:00 | <a target="_blank" href="https://twitter.com/statuses/964952604475379713">Read on Twitter</a></p> <hr> <p> Phone: (877) 985-2844<br/> Directions: <a href="https://maps.google.com?daddr=2030+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">2030 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.comedysportzphilly.com">http://www.comedysportzphilly.com</a> </p> </div> </div>', 'lng': -75.17462751555908}];

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