
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Whole Foods Market', 'lat': 39.94280084676079, 'lng': -75.15822906053218, 'content': '<div id="content"> <h1>Whole Foods Market</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WFMPhilly">@WFMPhilly</a>: We are open through 12/24, but hours vary by store this week - full list here: https://t.co/KzKw9Lw9zC #openinphl</p> <p style="font-size: 10px;">Thu Dec 22 17:01 | <a target="_blank" href="https://twitter.com/statuses/811979944511283200">Read on Twitter</a></p> <hr> <p> Phone: (215) 733-9788<br/> Directions: <a href="https://maps.google.com?daddr=929+South+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">929 South St (at S 10th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.wholefoodsmarket.com/stores/southstreet">http://www.wholefoodsmarket.com/stores/southstreet</a> </p> </div> </div>'}, {'name': 'The Little Lion', 'lat': 39.94868850708008, 'lng': -75.14585876464844, 'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: That\'s right! All bars will be open and pouring on Christmas Day #openinphl - thanks @DrinkPhilly for shout-out… https://t.co/q1j0HUyGrO</p> <p style="font-size: 10px;">Wed Dec 21 20:50 | <a target="_blank" href="https://twitter.com/statuses/811675170276593666">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>'}, {'name': 'Friends Center', 'lat': 39.9557597443368, 'lng': -75.16470446252374, 'content': '<div id="content"> <h1>Friends Center</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FriendsCtr">@FriendsCtr</a>: Please note: Friends Center will be CLOSED 12/23, 24 &amp; 26. We will be open for #Quakers worship 12/25 @ 11 am #ClosedInPHL #OpenInPHL</p> <p style="font-size: 10px;">Wed Dec 21 16:48 | <a target="_blank" href="https://twitter.com/statuses/811614389891694593">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1501+Cherry+St+%2815th%29%2C+Philadelphia%2C+PA+19102" target="_blank">1501 Cherry St (15th), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.friendscentercorp.org/">http://www.friendscentercorp.org/</a> </p> </div> </div>'}, {'name': 'Ristorante Aroma', 'lat': 39.944911, 'lng': -75.16067, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/pmk1k6LiUL</p> <p style="font-size: 10px;">Mon Dec 19 20:35 | <a target="_blank" href="https://twitter.com/statuses/810946626592374784">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>'}, {'name': 'London Grill', 'lat': 39.96750024480156, 'lng': -75.17528057098389, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #holidays #openinphl xmas eve with 7 fishes &amp; latkes! #newyearseve make your reservations @… https://t.co/mjGxQkucWu</p> <p style="font-size: 10px;">Mon Dec 19 00:27 | <a target="_blank" href="https://twitter.com/statuses/810642552898473984">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>'}, {'name': 'The Industry Bar', 'lat': 39.930492, 'lng': -75.149676, 'content': '<div id="content"> <h1>The Industry Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/theindustrybar">@theindustrybar</a>: Book your reservation for #ChristmasEve and hang out at your home away from home for the #holidays! #OpenInPHL... https://t.co/QgNVUX1w1O</p> <p style="font-size: 10px;">Sat Dec 17 20:03 | <a target="_blank" href="https://twitter.com/statuses/810213850998067201">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-9500<br/> Directions: <a href="https://maps.google.com?daddr=1401+E+Moyamensing+Ave+%28at+Reed+St.%29%2C+Philadelphia%2C+PA+19147" target="_blank">1401 E Moyamensing Ave (at Reed St.), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.theindustrybar.com">http://www.theindustrybar.com</a> </p> </div> </div>'}, {'name': 'Ai Ramen', 'lat': 39.951993, 'lng': -75.167865, 'content': '<div id="content"> <h1>Ai Ramen</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/airamenlove">@airamenlove</a>: What could be better than a bowl of #ramen noodles in hot broth right now? #ramenweather #ramenseason #allnatural… https://t.co/pbebNii0W0</p> <p style="font-size: 10px;">Sat Dec 17 19:19 | <a target="_blank" href="https://twitter.com/statuses/810202678546616320">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1625+Chestnut+St%2C+Philadelphia%2C+PA+19103" target="_blank">1625 Chestnut St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="https://twitter.com/airamenlove">https://twitter.com/airamenlove</a> </p> </div> </div>'}, {'name': "Warmdaddy's", 'lat': 39.92964054399836, 'lng': -75.14500381988266, 'content': '<div id="content"> <h1>Warmdaddy\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/warmdaddys">@warmdaddys</a>: Only at Warmdaddy\'s.. We\'re open, stop on by! #Repost @juice_724 #warmdaddys #OpeninPHL https://t.co/aux0N72Wcr</p> <p style="font-size: 10px;">Sat Dec 17 18:53 | <a target="_blank" href="https://twitter.com/statuses/810196226759159808">Read on Twitter</a></p> <hr> <p> Phone: (215) 462-2000<br/> Directions: <a href="https://maps.google.com?daddr=1400+S+Columbus+Blvd+%28at+Reed+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">1400 S Columbus Blvd (at Reed St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.warmdaddys.com">http://www.warmdaddys.com</a> </p> </div> </div>'}, {'name': 'The Bards Irish Bar', 'lat': 39.95058340419652, 'lng': -75.17434296875548, 'content': '<div id="content"> <h1>The Bards Irish Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BardsPhilly">@BardsPhilly</a>: It\'s cold. It\'s wet. We have whiskey. These things are related. Come warm up with us, Philly! We are proudly… https://t.co/lAQaZNTFbl</p> <p style="font-size: 10px;">Sat Dec 17 17:38 | <a target="_blank" href="https://twitter.com/statuses/810177262234599428">Read on Twitter</a></p> <hr> <p> Phone: (215) 569-9585<br/> Directions: <a href="https://maps.google.com?daddr=2013+Walnut+St+%28btw+20th+and+21st+Sts+on+Walnut%29%2C+Philadelphia%2C+PA+19103" target="_blank">2013 Walnut St (btw 20th and 21st Sts on Walnut), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.bardsirishbar.com">http://www.bardsirishbar.com</a> </p> </div> </div>'}, {'name': 'Capofitto', 'lat': 39.948638, 'lng': -75.145446, 'content': '<div id="content"> <h1>Capofitto</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Capofitto">@Capofitto</a>: Get out of the snow and get on to our barstool! #OPENinPHL Happy Hour prices all day long! $10 margaritas!… https://t.co/djEQNEXLMG</p> <p style="font-size: 10px;">Sat Dec 17 17:23 | <a target="_blank" href="https://twitter.com/statuses/810173559632957440">Read on Twitter</a></p> <hr> <p> Phone: (215) 897-9999<br/> Directions: <a href="https://maps.google.com?daddr=223+Chestnut+St%2C+Philadelphia%2C+PA+19106" target="_blank">223 Chestnut St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.capofittoforno.com">http://www.capofittoforno.com</a> </p> </div> </div>'}, {'name': 'Home Sweet Homebrew', 'lat': 39.951321, 'lng': -75.173942, 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: #OpeninPHL! The weather outside will be less frightful later, &amp; rainy days make grat brew days!</p> <p style="font-size: 10px;">Sat Dec 17 16:32 | <a target="_blank" href="https://twitter.com/statuses/810160725549318144">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>'}, {'name': 'Tria', 'lat': 39.946607, 'lng': -75.161088, 'content': '<div id="content"> <h1>Tria</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TriaPhilly">@TriaPhilly</a>: Snow Alert! We are #OpeninPHL starting at 11 w/ $2 off holiday drafts and $1 off latkes. Get cozy @ #taproom! https://t.co/RDmtzy0VhV</p> <p style="font-size: 10px;">Sat Dec 17 15:10 | <a target="_blank" href="https://twitter.com/statuses/810140155696844800">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-9200<br/> Directions: <a href="https://maps.google.com?daddr=1137+Spruce+St%2C+Philadelphia%2C+PA+19107" target="_blank">1137 Spruce St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.triacafe.com">http://www.triacafe.com</a> </p> </div> </div>'}, {'name': 'The Tasty', 'lat': 39.9323925186011, 'lng': -75.16411165512709, 'content': '<div id="content"> <h1>The Tasty</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thetastyphilly">@thetastyphilly</a>: Up early? We\'ve got the hot food and coffee to melt your snow blues.. #openinphl</p> <p style="font-size: 10px;">Sat Dec 17 13:55 | <a target="_blank" href="https://twitter.com/statuses/810121349612142593">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-5670<br/> Directions: <a href="https://maps.google.com?daddr=1401+S+12th+St%2C+Philadelphia%2C+PA+19147" target="_blank">1401 S 12th St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://thetastyphilly.com">http://thetastyphilly.com</a> </p> </div> </div>'}];

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