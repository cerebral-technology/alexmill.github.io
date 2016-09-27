
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'The Olde Bar', 'lng': -75.14417150465755, 'lat': 39.946822546179085, 'content': '<div id="content"> <h1>The Olde Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheOldeBarPHL">@TheOldeBarPHL</a>: We are #OpenInPHL for brunch right now. #HappyHour starts at 4pm. Open for regular service… https://t.co/45zSVmNlyr</p> <p style="font-size: 10px;">Sat Sep 24 15:57 | <a target="_blank" href="https://twitter.com/statuses/779711425757454336">Read on Twitter</a></p> <hr> <p> Phone: (215) 253-3777<br/> Directions: <a href="https://maps.google.com?daddr=125+Walnut+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">125 Walnut St (at 2nd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.theoldebar.com">http://www.theoldebar.com</a> </p> </div> </div>'}];

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