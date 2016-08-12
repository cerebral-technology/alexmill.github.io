
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 40.00219112908278, 'name': 'PYKNIC', 'lng': -75.71137905120848, 'content': '<div id="content"> <h1>PYKNIC</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Pyknic">@Pyknic</a>: Putting on massive amounts of @PiperWai then headed to @2ndStFestival. Pyknic is #OpeninPHL today, 12-10pm on 2nd St near @GunnersRun.</p> <p style="font-size: 10px;">Sun Aug 07 12:30 | <a target="_blank" href="https://twitter.com/statuses/762264664432672768">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=215+W+Lancaster+Ave%2C+Downingtown%2C+PA+19335" target="_blank">215 W Lancaster Ave, Downingtown, PA 19335</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>'}];

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