
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>The Pole Studio</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PoleBasics">@PoleBasics</a>: Open Pole $10.00 Practice Makes Perfect #noexcuses #openinphl @ The POLE Studio https://t.co/8ndn4FrwKk</p> <p style="font-size: 10px;">Thu May 19 14:09 | <a target="_blank" href="https://twitter.com/statuses/733298474716954626">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1611+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1611 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://polebasics.imaginationdigitalhosting.com">http://polebasics.imaginationdigitalhosting.com</a> </p> </div> </div>', 'lat': 39.974539, 'name': 'The Pole Studio', 'lng': -75.133319}];

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