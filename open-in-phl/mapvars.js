
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.92737451264627, 'lng': -75.16642017132394, 'content': '<div id="content"> <h1>Chhaya Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/chhayacafe">@chhayacafe</a>: you asked we answered! now open late #coffee #openinphl #chhayajunkie https://t.co/ixLkLk00Qy</p> <p style="font-size: 10px;">Tue Jun 07 14:20 | <a target="_blank" href="https://twitter.com/statuses/740186689553989633">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1000<br/> Directions: <a href="https://maps.google.com?daddr=1819+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1819 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://chhayacafe.com">http://chhayacafe.com</a> </p> </div> </div>', 'name': 'Chhaya Cafe'}, {'lat': 39.936654, 'lng': -75.17352056073281, 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: Come get fancy with us and @AlmanacBeer tomorrow! #PBW2016 #PhillyBrunch #OpenInPHL https://t.co/gHo0s1KHWi</p> <p style="font-size: 10px;">Sun Jun 05 03:35 | <a target="_blank" href="https://twitter.com/statuses/739299488112771072">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>', 'name': 'American Sardine Bar'}];

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