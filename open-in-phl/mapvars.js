
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'content': '<div id="content"> <h1>Savery Gallery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SaveryGallery">@SaveryGallery</a>: It\'s the last #Caturday at SAVERY! See #WIDEEYED : Nicole Dyer and Dave Eassa in its last day in the gallery! #bmoretophilly #openinphl</p> <p style="font-size: 10px;">Sat Feb 27 16:19 | <a target="_blank" href="https://twitter.com/statuses/703615372742803456">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.saverygallery.com/">http://www.saverygallery.com/</a> </p> </div> </div>', 'lng': -75.158798, 'name': 'Savery Gallery', 'lat': 39.961288}];    
 
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