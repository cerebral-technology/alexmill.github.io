
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Brauhaus Schmitz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BrauhausSchmitz">@BrauhausSchmitz</a>: Huuuuge surprise... snows coming again tomorrow. Luckily we’re already getting the brown bags together for another… https://t.co/9hI4JHWJ8I</p> <p style="font-size: 10px;">Tue Mar 06 17:27 | <a target="_blank" href="https://twitter.com/statuses/971074742949117952">Read on Twitter</a></p> <hr> <p> Phone: (267) 909-8814<br/> Directions: <a href="https://maps.google.com?daddr=718+South+St+%28at+8th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">718 South St (at 8th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://brauhausschmitz.com">http://brauhausschmitz.com</a> </p> </div> </div>', 'lat': 39.942260518142334, 'lng': -75.15469483778953, 'name': 'Brauhaus Schmitz'}, {'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: #BrewGoodDrinkGood #DrinkGoodDoGood #GoldenTicket #OpeninPHL It\'s a beautiful day to replenish your beer stocks,... https://t.co/J90BiVEY43</p> <p style="font-size: 10px;">Sun Mar 04 17:57 | <a target="_blank" href="https://twitter.com/statuses/970357603648884737">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'lat': 39.95133267106301, 'lng': -75.17401059383587, 'name': 'Home Sweet Homebrew'}, {'content': '<div id="content"> <h1>Monk\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MonksCafePhilly">@MonksCafePhilly</a>: Emerge from your snow caves, Philadelphia... we are #OpenInPHL and ready to freshen you up with summer cherries!… https://t.co/l3SqoLpzBP</p> <p style="font-size: 10px;">Sat Mar 03 17:01 | <a target="_blank" href="https://twitter.com/statuses/969981045423648774">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-7005<br/> Directions: <a href="https://maps.google.com?daddr=264+S+16th+St+%28btwn+Spruce+St+%26+Locust+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">264 S 16th St (btwn Spruce St & Locust St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://monkscafe.com">http://monkscafe.com</a> </p> </div> </div>', 'lat': 39.9477629747096, 'lng': -75.16807079315186, 'name': "Monk's Cafe"}, {'content': '<div id="content"> <h1>Philadelphia flower show</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhilaFlowerShow">@PhilaFlowerShow</a>: @mrcoaster1 @wdwamy We\'re still #OpenInPHL! There are a few options to get to the show, including various parking o… https://t.co/ZsbiBKOUsh</p> <p style="font-size: 10px;">Sat Mar 03 14:26 | <a target="_blank" href="https://twitter.com/statuses/969942070206128130">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="https://theflowershow.com/">https://theflowershow.com/</a> </p> </div> </div>', 'lat': 39.954, 'lng': -75.159935, 'name': 'Philadelphia flower show'}, {'content': '<div id="content"> <h1>Good Good Comedy Theatre</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/goodgoodcomedy">@goodgoodcomedy</a>: #Philly! Heads-up: we\'ve canceled our 7 PM &amp; 8:30 PM shows tonight and are postponing to a later date. Our 10 PM sh… https://t.co/EoMraIkAs9</p> <p style="font-size: 10px;">Fri Mar 02 23:12 | <a target="_blank" href="https://twitter.com/statuses/969711975323373568">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=215+N+11th+St%2C+Philadelphia%2C+PA+19107" target="_blank">215 N 11th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="https://goodgoodcomedy.com/">https://goodgoodcomedy.com/</a> </p> </div> </div>', 'lat': 39.95611718085746, 'lng': -75.15722970260802, 'name': 'Good Good Comedy Theatre'}, {'content': '<div id="content"> <h1>Saint Benjamin Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/stbenjaminbrew">@stbenjaminbrew</a>: We are #OpenInPHL @StBenjamins https://t.co/UG9UG39LHK</p> <p style="font-size: 10px;">Fri Mar 02 22:54 | <a target="_blank" href="https://twitter.com/statuses/969707663973076993">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1710-14+N+5th+St+%28Cecil+B+Moore%29%2C+Philadelphia%2C+PA+19122" target="_blank">1710-14 N 5th St (Cecil B Moore), Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lat': 39.97727552620923, 'lng': -75.14343764555336, 'name': 'Saint Benjamin Brewing Company'}, {'content': '<div id="content"> <h1>The Trestle Inn</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheTrestleInn">@TheTrestleInn</a>: We\'re Here. For Beer. And Cocktails. And Vinyl &amp; Go Go. #HappyHour 5P-8P. SOULed OUT - A Classic Funk &amp; Soul on Vin… https://t.co/FprrADYjwE</p> <p style="font-size: 10px;">Fri Mar 02 21:47 | <a target="_blank" href="https://twitter.com/statuses/969690806671036416">Read on Twitter</a></p> <hr> <p> Phone: (267) 239-0290<br/> Directions: <a href="https://maps.google.com?daddr=339+N+11th+St+%28at+Callowhill+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">339 N 11th St (at Callowhill St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.thetrestleinn.com">http://www.thetrestleinn.com</a> </p> </div> </div>', 'lat': 39.95884296625862, 'lng': -75.15666079997288, 'name': 'The Trestle Inn'}, {'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: The weather outside is frightful but our bottle shop at One Penn Center is open to fortify you for the evening.… https://t.co/qBHIdRI4c9</p> <p style="font-size: 10px;">Fri Mar 02 21:21 | <a target="_blank" href="https://twitter.com/statuses/969684029325930497">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>', 'lat': 39.929794448959385, 'lng': -75.16348648828463, 'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room'}, {'content': '<div id="content"> <h1>Tria</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TriaPhilly">@TriaPhilly</a>: Revision: this is a "forget the snow; bring on spring; time for Burrata Bruschetta AND ALL THE WINE" kind of Friday… https://t.co/1jfrVHTypL</p> <p style="font-size: 10px;">Fri Mar 02 19:45 | <a target="_blank" href="https://twitter.com/statuses/969659919015260170">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-9200<br/> Directions: <a href="https://maps.google.com?daddr=1137+Spruce+St%2C+Philadelphia%2C+PA+19107" target="_blank">1137 Spruce St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.triacafe.com">http://www.triacafe.com</a> </p> </div> </div>', 'lat': 39.946575119202905, 'lng': -75.16100768016959, 'name': 'Tria'}, {'content': '<div id="content"> <h1>The Bards Irish Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BardsPhilly">@BardsPhilly</a>: Come on out, friends. The weather\'s fine. Okay, it\'s not, but we have beer and whiskey! #OpenInPHL https://t.co/dXZcQHb5vn</p> <p style="font-size: 10px;">Fri Mar 02 19:43 | <a target="_blank" href="https://twitter.com/statuses/969659398346952704">Read on Twitter</a></p> <hr> <p> Phone: (215) 569-9585<br/> Directions: <a href="https://maps.google.com?daddr=2013+Walnut+St+%28btw+20th+and+21st+Sts+on+Walnut%29%2C+Philadelphia%2C+PA+19103" target="_blank">2013 Walnut St (btw 20th and 21st Sts on Walnut), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.bardsirishbar.com">http://www.bardsirishbar.com</a> </p> </div> </div>', 'lat': 39.95062826865508, 'lng': -75.17428857367297, 'name': 'The Bards Irish Bar'}, {'content': '<div id="content"> <h1>Tria Taproom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TriaTaproom">@TriaTaproom</a>: Whatever, winter. (Spring??) We are #openinPHL with 40 draft lines ready to keep you warm. https://t.co/LgA9BFWeDS</p> <p style="font-size: 10px;">Fri Mar 02 19:42 | <a target="_blank" href="https://twitter.com/statuses/969659116170940416">Read on Twitter</a></p> <hr> <p> Phone: (215) 557-8277<br/> Directions: <a href="https://maps.google.com?daddr=2005+Walnut+St%2C+Philadelphia%2C+PA+19103" target="_blank">2005 Walnut St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="https://www.triaphilly.com/tria-taproom/">https://www.triaphilly.com/tria-taproom/</a> </p> </div> </div>', 'lat': 39.950563064058805, 'lng': -75.1738974781862, 'name': 'Tria Taproom'}, {'content': '<div id="content"> <h1>Field House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FieldHousePHL">@FieldHousePHL</a>: We are #OPENinPHL today! Gearing up for a fun @PhilaFlowerShow and thrilled this storm is moving out quick! Hey… https://t.co/htMNokSevD</p> <p style="font-size: 10px;">Fri Mar 02 14:18 | <a target="_blank" href="https://twitter.com/statuses/969577724510658562">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-1520<br/> Directions: <a href="https://maps.google.com?daddr=1150+Filbert+St+%28btwn+11th+St.+%26+12th+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">1150 Filbert St (btwn 11th St. & 12th St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://fieldhousephilly.com">http://fieldhousephilly.com</a> </p> </div> </div>', 'lat': 39.95283975478648, 'lng': -75.15929642409702, 'name': 'Field House'}];

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