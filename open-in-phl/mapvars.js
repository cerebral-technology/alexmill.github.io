
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Taproom on 19th', 'content': '<div id="content"> <h1>Taproom on 19th</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TaproomOn19th">@TaproomOn19th</a>: Hey Kids! Looks like significant snow for tomorrow! That means you can stay up late and drink!!! We\'re here for you… https://t.co/palo2Cyu4E</p> <p style="font-size: 10px;">Wed Feb 08 15:45 | <a target="_blank" href="https://twitter.com/statuses/829355434335170562">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7817<br/> Directions: <a href="https://maps.google.com?daddr=2400+S+19th+St+%28Ritner%29%2C+Philadelphia%2C+PA+19145" target="_blank">2400 S 19th St (Ritner), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.taproomon19th.com">http://www.taproomon19th.com</a> </p> </div> </div>', 'lng': -75.17857779638472, 'lat': 39.92167188213936}, {'name': "McGillin's Olde Ale House", 'content': '<div id="content"> <h1>McGillin\'s Olde Ale House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/McGillins">@McGillins</a>: It\'s finally going to snow! 1 inch, 6 inches, 6 feet, @mcgillins will be #OpenInPHL! https://t.co/jB1WA0KLfu</p> <p style="font-size: 10px;">Wed Feb 08 15:29 | <a target="_blank" href="https://twitter.com/statuses/829351473586774016">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5562<br/> Directions: <a href="https://maps.google.com?daddr=1310+Drury+St+%2813th+Street%29%2C+Philadelphia%2C+PA+19107" target="_blank">1310 Drury St (13th Street), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.mcgillins.com">http://www.mcgillins.com</a> </p> </div> </div>', 'lng': -75.16245862268727, 'lat': 39.95025425116089}, {'name': 'Voyeur', 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #TheWeekend at #VOYEURNIGHTCLUB #specialEventFriday #simplychristopher #OpeninPHL https://t.co/tqDGQwABJJ</p> <p style="font-size: 10px;">Fri Feb 03 21:04 | <a target="_blank" href="https://twitter.com/statuses/827623746290724865">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lng': -75.16172330266902, 'lat': 39.948394683746855}, {'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/YIZ2SU6qib</p> <p style="font-size: 10px;">Fri Feb 03 16:10 | <a target="_blank" href="https://twitter.com/statuses/827549827487653888">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067, 'lat': 39.944911}, {'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: Watch the #SuperBowl here at The Bar this Sunday #OpeninPHL with SuperBowl Specials and #CraftBeer @PhillyTapFinder</p> <p style="font-size: 10px;">Thu Feb 02 16:06 | <a target="_blank" href="https://twitter.com/statuses/827186537230135296">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17257690429688, 'lat': 39.965362315682}];

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