
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'lat': 39.94180471, 'content': '<div id="content"> <h1>Crash Bang Boom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CrashBang528">@CrashBang528</a>: Yea, it\'s cold outside today, try forgetting Valentine\'s Day and see just how cold it can get tomorrow #openinphl https://t.co/2SRIOg4l43</p> <p style="font-size: 10px;">Sat Feb 13 17:46 | <a target="_blank" href="https://twitter.com/statuses/698563904843161601">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-1123<br/> Directions: <a href="https://maps.google.com?daddr=528+S+4th+St+%28South+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">528 S 4th St (South St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.crashbangboomonline.com">http://www.crashbangboomonline.com</a> </p> </div> </div>', 'lng': -75.149045, 'name': 'Crash Bang Boom'}, {'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #LetitSnow Let It Snow!! @thebelgiancafe is #openinphl #Fairmount for #brunch with lotsa #craftbeer @PhillyTapFinder</p> <p style="font-size: 10px;">Sat Feb 13 17:00 | <a target="_blank" href="https://twitter.com/statuses/698552460483420162">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17257690429688, 'name': 'The Belgian Cafe'}, {'lat': 39.948401867469556, 'content': '<div id="content"> <h1>Locust Rendezvous</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheVousOnLocust">@TheVousOnLocust</a>: Lights are out, but our door is open! Candlelight cocktail anyone? #ohphilly #lightsout #blackout2016 #openinphl https://t.co/4O2RWVbf8w</p> <p style="font-size: 10px;">Fri Feb 12 00:02 | <a target="_blank" href="https://twitter.com/statuses/697933702156914688">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-1163<br/> Directions: <a href="https://maps.google.com?daddr=1415+Locust+St+%28btwn+Broad+St+%26+15th+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">1415 Locust St (btwn Broad St & 15th St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.locustrendezvous.com">http://www.locustrendezvous.com</a> </p> </div> </div>', 'lng': -75.16579887030171, 'name': 'Locust Rendezvous'}];    
 
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