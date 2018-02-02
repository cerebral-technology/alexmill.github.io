
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'globar', 'content': '<div id="content"> <h1>globar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/globarphl">@globarphl</a>: Get a #HeartOn this #FridayNight at #WoodysPhilly! #5rooms1Cover #OpenInPHL #Nightclubbing #LGBTQ #gayborhood https://t.co/ADFKGqvrdW</p> <p style="font-size: 10px;">Sat Jan 27 00:00 | <a target="_blank" href="https://twitter.com/statuses/957040476955332610">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.globar.woodysbar.com/">http://www.globar.woodysbar.com/</a> </p> </div> </div>', 'lat': 39.948952, 'lng': -75.162052}, {'name': "Woody's", 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Get a #HeartOn this #FridayNight at #WoodysPhilly! #5rooms1Cover #OpenInPHL #Nightclubbing #LGBTQ #gayborhood https://t.co/USSIF9yEiw</p> <p style="font-size: 10px;">Fri Jan 26 23:59 | <a target="_blank" href="https://twitter.com/statuses/957040421540126722">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'lat': 39.94873969990853, 'lng': -75.16220781624595}];

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