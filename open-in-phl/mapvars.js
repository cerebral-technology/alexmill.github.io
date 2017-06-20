
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: We were having some #TechnicalDifficulties but those are all solved and we are #OpenInPHL! So come in and get all... https://t.co/qqqcV2MEO9</p> <p style="font-size: 10px;">Tue Jun 20 16:02 | <a target="_blank" href="https://twitter.com/statuses/877194898033848320">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>', 'lat': 39.94876539524823, 'lng': -75.16623213887215, 'name': 'Good Dog Bar & Restaurant'}, {'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/vu3VE5PrhM</p> <p style="font-size: 10px;">Mon Jun 19 19:34 | <a target="_blank" href="https://twitter.com/statuses/876885812880654336">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lat': 39.944911, 'lng': -75.16067, 'name': 'Ristorante Aroma'}];

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