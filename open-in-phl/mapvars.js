
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'name': "Sonny's Famous Steaks", 'content': '<div id="content"> <h1>Sonny\'s Famous Steaks</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonnysSteaks">@SonnysSteaks</a>: leaving @OldCityDistrict bars? we\'re #openinphl til 3am! #LateNightSnack #philly #cheesesteak @Philly360 @visitphilly @ThingsToDoPHL</p> <p style="font-size: 10px;">Sat Mar 05 06:15 | <a target="_blank" href="https://twitter.com/statuses/706000250381721600">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-5760<br/> Directions: <a href="https://maps.google.com?daddr=228+Market+St+%28btwn+2nd+St+%26+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">228 Market St (btwn 2nd St & 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://sonnyscheesesteaks.com">http://sonnyscheesesteaks.com</a> </p> </div> </div>', 'lng': -75.144828, 'lat': 39.950064}];    
 
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