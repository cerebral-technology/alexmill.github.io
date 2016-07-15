
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.14478148953366, 'lat': 39.97141019008453, 'name': 'Helm', 'content': '<div id="content"> <h1>Helm</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/helmPhilly">@helmPhilly</a>: Hey y\'all... Our phones at helm are down right now due to construction work but rest assured we are #openinphl sorry for the inconvenience</p> <p style="font-size: 10px;">Tue Jul 12 23:30 | <a target="_blank" href="https://twitter.com/statuses/753008653016457216">Read on Twitter</a></p> <hr> <p> Phone: (215) 309-2211<br/> Directions: <a href="https://maps.google.com?daddr=1303+N+5th+St%2C+Philadelphia%2C+PA+19122" target="_blank">1303 N 5th St, Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="https://twitter.com/helmPhilly">https://twitter.com/helmPhilly</a> </p> </div> </div>'}, {'lng': -75.1464632, 'lat': 39.9490511, 'name': 'chemheritage', 'content': '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: Starting today, the Museum at CHF is open on Saturdays! #OpenInPHL https://t.co/zLtVqEcW7h https://t.co/d3MYecPz2X</p> <p style="font-size: 10px;">Sat Jul 09 13:01 | <a target="_blank" href="https://twitter.com/statuses/751763272710389760">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=877.CHF.4550+The+Conference+Center+at+CHF+315+Chestnut+Street+Philadelphia%2C+PA+19106-2702" target="_blank">877.CHF.4550 The Conference Center at CHF 315 Chestnut Street Philadelphia, PA 19106-2702</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>'}];

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