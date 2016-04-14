
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #OpeninPHL join us here for #sundaybrunch after the @LOVERUNPHILLY here in #fairmount great food and #craftbeer https://t.co/BWnelaGY4S</p> <p style="font-size: 10px;">Sun Apr 10 14:17 | <a target="_blank" href="https://twitter.com/statuses/719167334343122945">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682, 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}, {'content': '<div id="content"> <h1>City Tap House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/citytaplogan">@citytaplogan</a>: Happy folks leaving #Logan on their way to the next stop on #CraftBeerExpress Thanks for coming out all #OpenInPhl https://t.co/3Zu2rvIMY6</p> <p style="font-size: 10px;">Sat Apr 09 19:18 | <a target="_blank" href="https://twitter.com/statuses/718880732249251840">Read on Twitter</a></p> <hr> <p> Phone: (215) 587-9040<br/> Directions: <a href="https://maps.google.com?daddr=2+Logan+Sq+%28at+18th+%26+Arch+Sts%29%2C+Philadelphia%2C+PA+19103" target="_blank">2 Logan Sq (at 18th & Arch Sts), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.citytaphouseucity.com">http://www.citytaphouseucity.com</a> </p> </div> </div>', 'lat': 39.9557051041166, 'name': 'City Tap House', 'lng': -75.16932144355557}, {'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: #OpenInPhl ❄️ https://t.co/f11ib1szPr</p> <p style="font-size: 10px;">Sat Apr 09 14:52 | <a target="_blank" href="https://twitter.com/statuses/718813905754189828">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28btwn+Locust+St+and+Spruce+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (btwn Locust St and Spruce St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com">http://www.josepistolas.com</a> </p> </div> </div>', 'lat': 39.947505895213666, 'name': "José Pistola's", 'lng': -75.16617507121423}];

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