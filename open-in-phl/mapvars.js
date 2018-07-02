
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Smith Playground', 'lat': 39.92420004756826, 'lng': -75.18701961780873, 'content': '<div id="content"> <h1>Smith Playground</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SmithPlayground">@SmithPlayground</a>: Smith is #openinphl this Wed #July4th 10a-4p! As you plan your #IndependenceDay #family outings be sure to include… https://t.co/T7Nu0zv4Sq</p> <p style="font-size: 10px;">Mon Jul 02 14:22 | <a target="_blank" href="https://twitter.com/statuses/1013789899508547585">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2408-2498+W+Snyder+Ave+%2825th+and+Snyder%29%2C+Philadelphia%2C+PA+19145" target="_blank">2408-2498 W Snyder Ave (25th and Snyder), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://smithplayground.org/">http://smithplayground.org/</a> </p> </div> </div>'}];

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