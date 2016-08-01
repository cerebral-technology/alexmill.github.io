
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.9490511, 'lng': -75.1464632, 'content': '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: Visit the Museum at CHF, #openinphl during #PHLDNC2016: https://t.co/Z1gaOoNH5W https://t.co/M0JtBIbTa8</p> <p style="font-size: 10px;">Tue Jul 26 14:40 | <a target="_blank" href="https://twitter.com/statuses/757948714254266368">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=877.CHF.4550+The+Conference+Center+at+CHF+315+Chestnut+Street+Philadelphia%2C+PA+19106-2702" target="_blank">877.CHF.4550 The Conference Center at CHF 315 Chestnut Street Philadelphia, PA 19106-2702</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>', 'name': 'chemheritage'}, {'lat': 39.950012, 'lng': -75.161923, 'content': '<div id="content"> <h1>VERDE</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/verdephilly">@verdephilly</a>: Happy #DNC Week! We\'re open 7 days a week. Mon-Sat 11-8 &amp; Sun 12-6! #openinphl #welove13thst https://t.co/zLDy8Y86hk</p> <p style="font-size: 10px;">Mon Jul 25 20:34 | <a target="_blank" href="https://twitter.com/statuses/757675432175099908">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-8700<br/> Directions: <a href="https://maps.google.com?daddr=108+S+13th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">108 S 13th St (at Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.verdephiladelphia.com/">http://www.verdephiladelphia.com/</a> </p> </div> </div>', 'name': 'VERDE'}, {'lat': 39.94992612847324, 'lng': -75.1603889465332, 'content': '<div id="content"> <h1>Pennsylvania 6</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/penn6philly">@penn6philly</a>: The Doctor is in. Dr Neville with Lillet Rose, and grapefruit liqueur #openinPHL #happyhourphilly #DNChappyhour https://t.co/B7gXjqY7NK</p> <p style="font-size: 10px;">Mon Jul 25 20:22 | <a target="_blank" href="https://twitter.com/statuses/757672481117396992">Read on Twitter</a></p> <hr> <p> Phone: (267) 639-5606<br/> Directions: <a href="https://maps.google.com?daddr=114+S+12th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">114 S 12th St (at Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.pennsylvania6philly.com">http://www.pennsylvania6philly.com</a> </p> </div> </div>', 'name': 'Pennsylvania 6'}];

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