
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': "Mama's Vegetarian", 'content': '<div id="content"> <h1>Mama\'s Vegetarian</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MamasVegetarian">@MamasVegetarian</a>: Mama\'s want to wish Israel a Happy independents day! Mazal tov :) #mamasvegetarian #cateringphl #openinphl... https://t.co/xQrORoLCwq</p> <p style="font-size: 10px;">Wed May 11 20:00 | <a target="_blank" href="https://twitter.com/statuses/730487771161370624">Read on Twitter</a></p> <hr> <p> Phone: (215) 751-0477<br/> Directions: <a href="https://maps.google.com?daddr=18+S+20th+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">18 S 20th St (at Ludlow St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://mamasvegetarian.com">http://mamasvegetarian.com</a> </p> </div> </div>', 'lng': -75.173362, 'lat': 39.952634}];

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