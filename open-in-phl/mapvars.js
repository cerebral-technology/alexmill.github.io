
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.15282, 'lat': 39.91699, 'name': 'Wander Inn', 'content': '<div id="content"> <h1>Wander Inn</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/wanderinnphilly">@wanderinnphilly</a>: Happy Memorial Day 🇺🇸 we’re open, bb! Enjoy dinner til 1am, happy hour til 7pm! • #happyhour #happymemorialday… https://t.co/yudw6TRbPb</p> <p style="font-size: 10px;">Mon May 28 20:48 | <a target="_blank" href="https://twitter.com/statuses/1001203463911591936">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2500+S+3rd+St+%28W+Porter+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">2500 S 3rd St (W Porter St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="https://twitter.com/wanderinnphilly">https://twitter.com/wanderinnphilly</a> </p> </div> </div>'}, {'lng': -75.16221921405011, 'lat': 39.94847864242782, 'name': 'Indeblue', 'content': '<div id="content"> <h1>Indeblue</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/IndeBlue">@IndeBlue</a>: #openinphl #indeblue Try our new #scallops pan seared black pepper tamarind chive malai blinis #cheframola… https://t.co/Fl4UPCNR6q</p> <p style="font-size: 10px;">Mon May 28 20:15 | <a target="_blank" href="https://twitter.com/statuses/1001195378216140803">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4633<br/> Directions: <a href="https://maps.google.com?daddr=205+S+13th+St+%28Walnut%29%2C+Philadelphia%2C+PA+19107" target="_blank">205 S 13th St (Walnut), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.indebluerestaurant.com">http://www.indebluerestaurant.com</a> </p> </div> </div>'}];

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