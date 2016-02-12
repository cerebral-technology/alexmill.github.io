
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'lng': -75.16579887030171, 'lat': 39.948401867469556, 'content': '<div id="content"> <h1>Locust Rendezvous</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheVousOnLocust">@TheVousOnLocust</a>: Lights are out, but our door is open! Candlelight cocktail anyone? #ohphilly #lightsout #blackout2016 #openinphl https://t.co/4O2RWVbf8w</p> <p style="font-size: 10px;">Fri Feb 12 00:02 | <a target="_blank" href="https://twitter.com/statuses/697933702156914688">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-1163<br/> Directions: <a href="https://maps.google.com?daddr=1415+Locust+St+%28btwn+Broad+St+%26+15th+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">1415 Locust St (btwn Broad St & 15th St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.locustrendezvous.com">http://www.locustrendezvous.com</a> </p> </div> </div>', 'name': 'Locust Rendezvous'}, {'lng': -75.17257690429688, 'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: @thebelgiancafe #openinphl for #SB50 #Sundaydinner great beer and great food!!</p> <p style="font-size: 10px;">Sun Feb 07 22:37 | <a target="_blank" href="https://twitter.com/statuses/696462815998115843">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe'}];    
 
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