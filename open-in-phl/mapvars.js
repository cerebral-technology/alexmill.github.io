
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Voyeur', 'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #Tripp, DJ Greg Nitty, and #LowBreezy at #VoyeurNightclub tonight, #SaintPatricksDay2018 #OpenInPHL. 3 floors to pa… https://t.co/10r4yxDK6L</p> <p style="font-size: 10px;">Sat Mar 17 18:53 | <a target="_blank" href="https://twitter.com/statuses/975082589177483264">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855}, {'name': 'globar', 'lng': -75.162052, 'content': '<div id="content"> <h1>globar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/globarphl">@globarphl</a>: #FridayNight and #OpenInPHL. Five parties under one roof- arrive early and beat the lines! #Ilovewoodys… https://t.co/o1yFxXLKca</p> <p style="font-size: 10px;">Fri Mar 16 18:01 | <a target="_blank" href="https://twitter.com/statuses/974707154316877825">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.globar.woodysbar.com/">http://www.globar.woodysbar.com/</a> </p> </div> </div>', 'lat': 39.948952}, {'name': "Woody's", 'lng': -75.16220781624595, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: #FridayNight and #OpenInPHL. Five parties under one roof- arrive early and beat the lines! #Ilovewoodys… https://t.co/LpJbai9nLO</p> <p style="font-size: 10px;">Fri Mar 16 18:00 | <a target="_blank" href="https://twitter.com/statuses/974707051472486401">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'lat': 39.94873969990853}, {'name': 'La Roca', 'lng': -75.219748, 'content': '<div id="content"> <h1>La Roca</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LaRocaMNYK">@LaRocaMNYK</a>: 📺🏀Make #LaRocaManayunk your spot to watch all the #MarchMadness games, with tons of TVs, delicious food, and drink… https://t.co/LKRE9s5cmm</p> <p style="font-size: 10px;">Thu Mar 15 19:32 | <a target="_blank" href="https://twitter.com/statuses/974367638540423169">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=4161+Main+St%2C+Philadelphia%2C+PA+19127" target="_blank">4161 Main St, Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="https://twitter.com/LaRocaMNYK">https://twitter.com/LaRocaMNYK</a> </p> </div> </div>', 'lat': 40.023242}];

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