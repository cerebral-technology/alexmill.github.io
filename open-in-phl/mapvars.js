
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.970529, 'content': '<div id="content"> <h1>Kensington Quarters - Restaurant & Butcher</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Kensington_Quar">@Kensington_Quar</a>: Last Call for Happy Hour this week. 5p-7p, patio is #openinphl @ Kensington Quarters https://t.co/xCUWVpPSnX</p> <p style="font-size: 10px;">Fri Apr 14 21:27 | <a target="_blank" href="https://twitter.com/statuses/852996758980493318">Read on Twitter</a></p> <hr> <p> Phone: (267) 314-5086<br/> Directions: <a href="https://maps.google.com?daddr=1310+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1310 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.kensingtonquarters.com">http://www.kensingtonquarters.com</a> </p> </div> </div>', 'name': 'Kensington Quarters - Restaurant & Butcher', 'lng': -75.134756}, {'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/rH0XBYFA3c</p> <p style="font-size: 10px;">Fri Apr 14 19:34 | <a target="_blank" href="https://twitter.com/statuses/852968204964171776">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lng': -75.16067}, {'lat': 39.948056528790076, 'content': '<div id="content"> <h1>Knead Bagels</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/KneadBagels">@KneadBagels</a>: ATTN BAGEL LOVERS! We will be #openinphl this Sunday for Easter - give us a call to reserve your… https://t.co/wk3zXCIpd3</p> <p style="font-size: 10px;">Fri Apr 14 16:09 | <a target="_blank" href="https://twitter.com/statuses/852916695077445635">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-9920<br/> Directions: <a href="https://maps.google.com?daddr=725+Walnut+at%2C+Philadelphia%2C+PA+19106" target="_blank">725 Walnut at, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://kneadbagels.com">http://kneadbagels.com</a> </p> </div> </div>', 'name': 'Knead Bagels', 'lng': -75.15370866146846}, {'lat': 39.948394683746855, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Weekend guest lists are now open for #voyeurnightclub https://t.co/WP8mbHlzdU #voyeurphl #housemusic #openinphl… https://t.co/xiH8O68nUp</p> <p style="font-size: 10px;">Fri Apr 14 15:36 | <a target="_blank" href="https://twitter.com/statuses/852908322709803013">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lng': -75.16172330266902}, {'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: from the "crazy brewers" - #DeDolle - their "Speciaaal Paasbier" on tap for this #EasterWeekend. We are… https://t.co/42xLbs2LLw</p> <p style="font-size: 10px;">Fri Apr 14 15:21 | <a target="_blank" href="https://twitter.com/statuses/852904536192823296">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}];

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