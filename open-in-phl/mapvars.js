
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/bDCGCdsFVV</p> <p style="font-size: 10px;">Tue Jan 24 13:08 | <a target="_blank" href="https://twitter.com/statuses/823880108582768640">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lat': 39.944911, 'name': 'Ristorante Aroma', 'lng': -75.16067}, {'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #womensmarch and we are #OpeninPHL. Join us for #Brunch while heading down there..then stop back for Dinner and drinks afterwards</p> <p style="font-size: 10px;">Sat Jan 21 14:41 | <a target="_blank" href="https://twitter.com/statuses/822816489321402368">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682, 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}, {'content': '<div id="content"> <h1>Wash Cycle Laundry Inc.</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WashCyclistHOYA">@WashCyclistHOYA</a>: Good morning and Happy Friday! Despite road closures for #Inauguration and demonstrations, we are #openinPHL and… https://t.co/53SNrCXnpN</p> <p style="font-size: 10px;">Fri Jan 20 12:00 | <a target="_blank" href="https://twitter.com/statuses/822413377389600768">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=230+S+Broad+St%2C+Philadelphia%2C+PA+19102" target="_blank">230 S Broad St, Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.washcyclelaundry.com/georgetown-university-select-your-service-laundry-dry-cleaning">http://www.washcyclelaundry.com/georgetown-university-select-your-service-laundry-dry-cleaning</a> </p> </div> </div>', 'lat': 39.948208, 'name': 'Wash Cycle Laundry Inc.', 'lng': -75.164853}, {'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Guestlists are open for this #weekend at #VOYEURNIGHTCLUB #openinPHL https://t.co/OubTjnneWZ https://t.co/n1W4JnxkW0</p> <p style="font-size: 10px;">Fri Jan 20 05:26 | <a target="_blank" href="https://twitter.com/statuses/822314259862331393">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855, 'name': 'Voyeur', 'lng': -75.16172330266902}];

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