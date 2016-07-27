
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.9490511, 'content': '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: Visit the Museum at CHF, #openinphl during #PHLDNC2016: https://t.co/Z1gaOoNH5W https://t.co/M0JtBIbTa8</p> <p style="font-size: 10px;">Tue Jul 26 14:40 | <a target="_blank" href="https://twitter.com/statuses/757948714254266368">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=877.CHF.4550+The+Conference+Center+at+CHF+315+Chestnut+Street+Philadelphia%2C+PA+19106-2702" target="_blank">877.CHF.4550 The Conference Center at CHF 315 Chestnut Street Philadelphia, PA 19106-2702</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>', 'name': 'chemheritage', 'lng': -75.1464632}, {'lat': 39.950012, 'content': '<div id="content"> <h1>VERDE</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/verdephilly">@verdephilly</a>: Happy #DNC Week! We\'re open 7 days a week. Mon-Sat 11-8 &amp; Sun 12-6! #openinphl #welove13thst https://t.co/zLDy8Y86hk</p> <p style="font-size: 10px;">Mon Jul 25 20:34 | <a target="_blank" href="https://twitter.com/statuses/757675432175099908">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-8700<br/> Directions: <a href="https://maps.google.com?daddr=108+S+13th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">108 S 13th St (at Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.verdephiladelphia.com/">http://www.verdephiladelphia.com/</a> </p> </div> </div>', 'name': 'VERDE', 'lng': -75.161923}, {'lat': 39.94992612847324, 'content': '<div id="content"> <h1>Pennsylvania 6</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/penn6philly">@penn6philly</a>: The Doctor is in. Dr Neville with Lillet Rose, and grapefruit liqueur #openinPHL #happyhourphilly #DNChappyhour https://t.co/B7gXjqY7NK</p> <p style="font-size: 10px;">Mon Jul 25 20:22 | <a target="_blank" href="https://twitter.com/statuses/757672481117396992">Read on Twitter</a></p> <hr> <p> Phone: (267) 639-5606<br/> Directions: <a href="https://maps.google.com?daddr=114+S+12th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">114 S 12th St (at Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.pennsylvania6philly.com">http://www.pennsylvania6philly.com</a> </p> </div> </div>', 'name': 'Pennsylvania 6', 'lng': -75.1603889465332}, {'lat': 39.945115566666665, 'content': '<div id="content"> <h1>Mixto Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Mixtophilly">@Mixtophilly</a>: @mixtophilly is ready for the demconvention! 🇺🇸 #DNC #DemsInPhilly #OpenInPHL #MixtoPhilly… https://t.co/AcGZw3mN3B</p> <p style="font-size: 10px;">Sun Jul 24 23:10 | <a target="_blank" href="https://twitter.com/statuses/757352167023968256">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0363<br/> Directions: <a href="https://maps.google.com?daddr=1141+Pine+St+%28at+12th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1141 Pine St (at 12th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.mixtorestaurante.com">http://www.mixtorestaurante.com</a> </p> </div> </div>', 'name': 'Mixto Restaurant', 'lng': -75.16113649}, {'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: Vote every Friday! competing in the #boardcity \'s 5 week contest! like this photo to vote! #belgianbeer #openinphl https://t.co/7sMM8Xj3d3</p> <p style="font-size: 10px;">Sat Jul 23 04:28 | <a target="_blank" href="https://twitter.com/statuses/756707422920736768">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}];

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