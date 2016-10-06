
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.13542052725909, 'name': 'Good Spoon Soupery', 'lat': 39.971977955281794, 'content': '<div id="content"> <h1>Good Spoon Soupery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GoodSpoon">@GoodSpoon</a>: Sunday Sunday Sunday #treats #fallhours #soupseason #openinphl Today\'s Menu: SOUPS- Roasted… https://t.co/9VpOZWY5Cd</p> <p style="font-size: 10px;">Sun Oct 02 16:31 | <a target="_blank" href="https://twitter.com/statuses/782619019467710464">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1400+N+Front+St%2C+Philadelphia%2C+PA+19122" target="_blank">1400 N Front St, Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="http://www.goodspoonfoods.com">http://www.goodspoonfoods.com</a> </p> </div> </div>'}, {'lng': -75.16220781624595, 'name': "Woody's", 'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Stop by Woody\'s today. The #MidtownVillage #FallFestival returns to #13thStreet right outside our door! #OpeninPHL… https://t.co/hbzoejkhKV</p> <p style="font-size: 10px;">Sat Oct 01 15:06 | <a target="_blank" href="https://twitter.com/statuses/782235258020175872">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>'}];

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