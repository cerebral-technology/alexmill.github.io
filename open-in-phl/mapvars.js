
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'La Roca', 'lng': -75.219748, 'lat': 40.023242, 'content': '<div id="content"> <h1>La Roca</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LaRocaMNYK">@LaRocaMNYK</a>: 📺🏀Make #LaRocaManayunk your spot to watch all the #MarchMadness games, with tons of TVs, delicious food, and drink… https://t.co/LKRE9s5cmm</p> <p style="font-size: 10px;">Thu Mar 15 19:32 | <a target="_blank" href="https://twitter.com/statuses/974367638540423169">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=4161+Main+St%2C+Philadelphia%2C+PA+19127" target="_blank">4161 Main St, Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="https://twitter.com/LaRocaMNYK">https://twitter.com/LaRocaMNYK</a> </p> </div> </div>'}, {'name': 'globar', 'lng': -75.162052, 'lat': 39.948952, 'content': '<div id="content"> <h1>globar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/globarphl">@globarphl</a>: And it\'s #SaturdayNight and we\'re #OpeninPHL, with DJs spinning in ALL FIVE ROOMS. It\'s the most incredible weekend… https://t.co/qUap61FBPc</p> <p style="font-size: 10px;">Sat Mar 10 22:42 | <a target="_blank" href="https://twitter.com/statuses/972603509479804928">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.globar.woodysbar.com/">http://www.globar.woodysbar.com/</a> </p> </div> </div>'}, {'name': "Woody's", 'lng': -75.16220781624595, 'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: And it\'s #SaturdayNight and we\'re #OpeninPHL, with DJs spinning in ALL FIVE ROOMS. It\'s the most incredible weekend… https://t.co/so7Xch2sB6</p> <p style="font-size: 10px;">Sat Mar 10 22:41 | <a target="_blank" href="https://twitter.com/statuses/972603425379815429">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>'}];

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