
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Field House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FieldHousePHL">@FieldHousePHL</a>: We are #OPENinPHL today! Gearing up for a fun @PhilaFlowerShow and thrilled this storm is moving out quick! Hey… https://t.co/htMNokSevD</p> <p style="font-size: 10px;">Fri Mar 02 14:18 | <a target="_blank" href="https://twitter.com/statuses/969577724510658562">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-1520<br/> Directions: <a href="https://maps.google.com?daddr=1150+Filbert+St+%28btwn+11th+St.+%26+12th+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">1150 Filbert St (btwn 11th St. & 12th St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://fieldhousephilly.com">http://fieldhousephilly.com</a> </p> </div> </div>', 'lat': 39.95283975478648, 'lng': -75.15929642409702, 'name': 'Field House'}];

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