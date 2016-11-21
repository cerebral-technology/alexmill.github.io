
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'The Little Lion', 'lat': 39.94868850708008, 'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: Join us for Southern Thanksgiving feast! #openinphl bar opens 12p, dinner w all trimmings starts 2p. @OpenTable_PHL… https://t.co/gekOkKOFmA</p> <p style="font-size: 10px;">Sun Nov 20 18:09 | <a target="_blank" href="https://twitter.com/statuses/800400702535143424">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>', 'lng': -75.14585876464844}];

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