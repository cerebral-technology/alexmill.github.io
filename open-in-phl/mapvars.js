
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Bottle Bar East', 'lng': -75.134573, 'lat': 39.970523, 'content': '<div id="content"> <h1>Bottle Bar East</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Bottlebareast">@Bottlebareast</a>: Lunchtime at Bottle Bar East. 12pm-4pm Lunch Special with a Pint for $12. Any Sandwich. Any pint. #openinphl... https://t.co/fX7FCJWO1L</p> <p style="font-size: 10px;">Fri Aug 19 16:50 | <a target="_blank" href="https://twitter.com/statuses/766678795894022144">Read on Twitter</a></p> <hr> <p> Phone: (267) 909-8867<br/> Directions: <a href="https://maps.google.com?daddr=1308+Frankford+Ave+%28at+Thompson+St%29%2C+Philadelphia%2C+PA+19125" target="_blank">1308 Frankford Ave (at Thompson St), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://bottlebareast.com">http://bottlebareast.com</a> </p> </div> </div>'}];

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