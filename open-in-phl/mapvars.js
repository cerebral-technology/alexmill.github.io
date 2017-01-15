
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/TStRwqwGUt</p> <p style="font-size: 10px;">Sat Jan 14 00:07 | <a target="_blank" href="https://twitter.com/statuses/820059703237603328">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lng': -75.16067, 'lat': 39.944911}, {'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: Thank you for your concern @yardsbrew. We are open for business once again! #openinPHL https://t.co/ULAiescTVk</p> <p style="font-size: 10px;">Fri Jan 13 20:26 | <a target="_blank" href="https://twitter.com/statuses/820004235647520773">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28at+Manning+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (at Manning St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com/">http://www.josepistolas.com/</a> </p> </div> </div>', 'name': "José Pistola's", 'lng': -75.16617507121423, 'lat': 39.947505895213666}, {'content': '<div id="content"> <h1>Capofitto</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Capofitto">@Capofitto</a>: Trying to stop myself from devouring these candied blood orange slices! #capofitto #dessert #whatsnowday #openinphl… https://t.co/oxB5W3I7yG</p> <p style="font-size: 10px;">Mon Jan 09 17:10 | <a target="_blank" href="https://twitter.com/statuses/818505273862131712">Read on Twitter</a></p> <hr> <p> Phone: (215) 897-9999<br/> Directions: <a href="https://maps.google.com?daddr=223+Chestnut+St%2C+Philadelphia%2C+PA+19106" target="_blank">223 Chestnut St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.capofittoforno.com">http://www.capofittoforno.com</a> </p> </div> </div>', 'name': 'Capofitto', 'lng': -75.145446, 'lat': 39.948638}];

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