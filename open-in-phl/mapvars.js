
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.133319, 'content': '<div id="content"> <h1>The Pole Studio</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PoleBasics">@PoleBasics</a>: Open Pole $10.00 Practice Makes Perfect #noexcuses #openinphl @ The POLE Studio https://t.co/8ndn4FrwKk</p> <p style="font-size: 10px;">Thu May 19 14:09 | <a target="_blank" href="https://twitter.com/statuses/733298474716954626">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1611+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1611 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://polebasics.imaginationdigitalhosting.com">http://polebasics.imaginationdigitalhosting.com</a> </p> </div> </div>', 'lat': 39.974539, 'name': 'The Pole Studio'}, {'lng': -75.1325798034668, 'content': '<div id="content"> <h1>SugarHouse Casino</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WinAtSugarHouse">@WinAtSugarHouse</a>: Celebrate #WorldBakingDay with a larger than life slice of carrot cake from Hugo\'s Frog Bar &amp; Chop House! #OpenInPHL https://t.co/vVEFRuuGZV</p> <p style="font-size: 10px;">Tue May 17 15:08 | <a target="_blank" href="https://twitter.com/statuses/732588498029563908">Read on Twitter</a></p> <hr> <p> Phone: (877) 477-3715<br/> Directions: <a href="https://maps.google.com?daddr=1001+N+Delaware+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1001 N Delaware Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.sugarhousecasino.com">https://www.sugarhousecasino.com</a> </p> </div> </div>', 'lat': 39.964030187577244, 'name': 'SugarHouse Casino'}];

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