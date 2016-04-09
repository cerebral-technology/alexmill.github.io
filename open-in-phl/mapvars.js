
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17257690429688, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: rain and snow and Spring and Winter - time for Saturday #brunch at The Belg. #OpeninPHL #craftbeer @PhillyTapFinder</p> <p style="font-size: 10px;">Sat Apr 09 14:54 | <a target="_blank" href="https://twitter.com/statuses/718814427437514752">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682, 'name': 'The Belgian Cafe'}, {'lng': -75.16617507121423, 'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: #OpenInPhl ❄️ https://t.co/f11ib1szPr</p> <p style="font-size: 10px;">Sat Apr 09 14:52 | <a target="_blank" href="https://twitter.com/statuses/718813905754189828">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28btwn+Locust+St+and+Spruce+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (btwn Locust St and Spruce St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com">http://www.josepistolas.com</a> </p> </div> </div>', 'lat': 39.947505895213666, 'name': "José Pistola's"}, {'lng': -75.16476716317528, 'content': '<div id="content"> <h1>Friends Center</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FriendsCtr">@FriendsCtr</a>: Alert: 1500 block of Cherry St closed. PECO is repairing fire damage. We have power from a generator. #OpenInPHL https://t.co/nbdDNuCteu</p> <p style="font-size: 10px;">Thu Apr 07 13:27 | <a target="_blank" href="https://twitter.com/statuses/718067597808427008">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1501+Cherry+St+%2815th%29%2C+Philadelphia%2C+PA+19102" target="_blank">1501 Cherry St (15th), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.friendscentercorp.org/">http://www.friendscentercorp.org/</a> </p> </div> </div>', 'lat': 39.95557237154348, 'name': 'Friends Center'}];

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