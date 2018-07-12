
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.14687347252482, 'content': '<div id="content"> <h1>Yards Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/yardsbrew">@yardsbrew</a>: Outdoor seating at the brewery is #OpeninPHL! #YARDS #BrewUntoOthers https://t.co/C9ihndwxSJ</p> <p style="font-size: 10px;">Sat Jul 07 22:35 | <a target="_blank" href="https://twitter.com/statuses/1015725904482496512">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=500+Spring+Garden+St+%285th+Street%29%2C+Philadelphia%2C+PA+19123" target="_blank">500 Spring Garden St (5th Street), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.yardsbrewing.com/">http://www.yardsbrewing.com/</a> </p> </div> </div>', 'name': 'Yards Brewing Company', 'lat': 39.96095722167941}, {'lng': -75.17252802654721, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: World Cup: Belgium at The Belgian Café - Fri July 6th 2:00 PM - Watch the Red Devils play while enjoying a $6 bottl… https://t.co/IvmQclsLA5</p> <p style="font-size: 10px;">Fri Jul 06 16:04 | <a target="_blank" href="https://twitter.com/statuses/1015265305239662592">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com/">http://www.thebelgiancafe.com/</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lat': 39.96531090100131}, {'lng': -75.16198486017369, 'content': '<div id="content"> <h1>Lolita</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/lolitaphilly">@lolitaphilly</a>: Days like this you gotta get yourself a blood orange #margarita (or five). Whatever, it’s been like, a billion degr… https://t.co/OyXwh1UTfY</p> <p style="font-size: 10px;">Thu Jul 05 18:31 | <a target="_blank" href="https://twitter.com/statuses/1014939781455843328">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=106+S+13th+St+%28btw+Chestnut+%26+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">106 S 13th St (btw Chestnut & Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.lolitaphilly.com/">http://www.lolitaphilly.com/</a> </p> </div> </div>', 'name': 'Lolita', 'lat': 39.95005083529092}];

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