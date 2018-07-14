
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Yards Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/yardsbrew">@yardsbrew</a>: Outdoor seating at the brewery is #OpeninPHL! #YARDS #BrewUntoOthers https://t.co/C9ihndwxSJ</p> <p style="font-size: 10px;">Sat Jul 07 22:35 | <a target="_blank" href="https://twitter.com/statuses/1015725904482496512">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=500+Spring+Garden+St+%285th+Street%29%2C+Philadelphia%2C+PA+19123" target="_blank">500 Spring Garden St (5th Street), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.yardsbrewing.com/">http://www.yardsbrewing.com/</a> </p> </div> </div>', 'lat': 39.96095722167941, 'lng': -75.14687347252482, 'name': 'Yards Brewing Company'}];

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