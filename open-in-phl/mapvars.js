
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16067, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/XrVY5ZLS5Z</p> <p style="font-size: 10px;">Sat Apr 01 13:55 | <a target="_blank" href="https://twitter.com/statuses/848171854732898304">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lat': 39.944911}, {'lng': -75.29762453026139, 'content': '<div id="content"> <h1>Meridian Bank</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MeridianBank">@MeridianBank</a>: See you soon, #Philly ! Via @PHLBizJournal #openinphl https://t.co/MNButrzNS1</p> <p style="font-size: 10px;">Wed Mar 29 14:20 | <a target="_blank" href="https://twitter.com/statuses/847091025478868993">Read on Twitter</a></p> <hr> <p> Phone: (215) 874-3481<br/> Directions: <a href="https://maps.google.com?daddr=920+Germantown+Pike%2C+Plymouth+Meeting%2C+PA+19462" target="_blank">920 Germantown Pike, Plymouth Meeting, PA 19462</a><br/> Website: <a target="_blank" href="http://www.joegonzalez.net">http://www.joegonzalez.net</a> </p> </div> </div>', 'name': 'Meridian Bank', 'lat': 40.12835333599643}, {'lng': -75.17257690429688, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #SundayBrunch here after the #phillyloverun #openinphl #Craftbeer @PhillyTapFinder @BeerMenus also #marchmadness at the Bar</p> <p style="font-size: 10px;">Sun Mar 26 17:04 | <a target="_blank" href="https://twitter.com/statuses/846045101780545537">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lat': 39.965362315682}];

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