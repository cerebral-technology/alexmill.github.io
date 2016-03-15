
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'content': '<div id="content"> <h1>Sancho Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Sancho_Pistolas">@Sancho_Pistolas</a>: Outdoor seating weather! 😎🍹 #OpenInPHL at 4pm https://t.co/uIRNTMJKdS</p> <p style="font-size: 10px;">Wed Mar 09 18:54 | <a target="_blank" href="https://twitter.com/statuses/707640693251043328">Read on Twitter</a></p> <hr> <p> Phone: (267) 324-3530<br/> Directions: <a href="https://maps.google.com?daddr=19+W+Girard+Ave+%28at+Leopard+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">19 W Girard Ave (at Leopard St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.sanchopistolas.com">http://www.sanchopistolas.com</a> </p> </div> </div>', 'name': "Sancho Pistola's", 'lat': 39.96893097540645, 'lng': -75.13511180877686}];    
 
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