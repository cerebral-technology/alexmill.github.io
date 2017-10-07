
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Philadelphia Museum of Art</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/philamuseum">@philamuseum</a>: The Museum is OPEN this Monday, Oct 9, for Columbus Day. Off from work or school? Stop by and visit your favorite w… https://t.co/PmZIsCVy8a</p> <p style="font-size: 10px;">Fri Oct 06 23:00 | <a target="_blank" href="https://twitter.com/statuses/916437945023913984">Read on Twitter</a></p> <hr> <p> Phone: (215) 763-8100<br/> Directions: <a href="https://maps.google.com?daddr=2600+Benjamin+Franklin+Pkwy%2C+Philadelphia%2C+PA+19130" target="_blank">2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.philamuseum.org">http://www.philamuseum.org</a> </p> </div> </div>', 'lng': -75.18106848275961, 'lat': 39.965705518332456, 'name': 'Philadelphia Museum of Art'}];

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