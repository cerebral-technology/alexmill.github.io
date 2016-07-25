
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Mixto Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Mixtophilly">@Mixtophilly</a>: @mixtophilly is ready for the demconvention! 🇺🇸 #DNC #DemsInPhilly #OpenInPHL #MixtoPhilly… https://t.co/AcGZw3mN3B</p> <p style="font-size: 10px;">Sun Jul 24 23:10 | <a target="_blank" href="https://twitter.com/statuses/757352167023968256">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0363<br/> Directions: <a href="https://maps.google.com?daddr=1141+Pine+St+%28at+12th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1141 Pine St (at 12th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.mixtorestaurante.com">http://www.mixtorestaurante.com</a> </p> </div> </div>', 'lat': 39.945115566666665, 'name': 'Mixto Restaurant', 'lng': -75.16113649}, {'content': '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: Visit the Museum at CHF, #openinphl during #PHLDNC2016: https://t.co/Z1gaOoNH5W https://t.co/WBtJY1JbfX</p> <p style="font-size: 10px;">Sun Jul 24 18:35 | <a target="_blank" href="https://twitter.com/statuses/757282999801176065">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+Street+Philadelphia%2C+PA+19106" target="_blank">315 Chestnut Street Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>', 'lat': 39.9490511, 'name': 'chemheritage', 'lng': -75.1464632}, {'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: Vote every Friday! competing in the #boardcity \'s 5 week contest! like this photo to vote! #belgianbeer #openinphl https://t.co/7sMM8Xj3d3</p> <p style="font-size: 10px;">Sat Jul 23 04:28 | <a target="_blank" href="https://twitter.com/statuses/756707422920736768">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682, 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}];

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