
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.953140176691775, 'name': 'Sonesta Philadelphia', 'content': '<div id="content"> <h1>Sonesta Philadelphia</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonestaPhilly">@SonestaPhilly</a>: #DraftDeals for #NFLdraft in #ARTBAR: Any Draft &amp; 2 Hot Dogs for $7. Burger and a Draft $10. Salsa Chips &amp; Guacamol… https://t.co/i8e1PEYhvp</p> <p style="font-size: 10px;">Fri Apr 28 14:20 | <a target="_blank" href="https://twitter.com/statuses/857962621374537728">Read on Twitter</a></p> <hr> <p> Phone: (215) 561-7500<br/> Directions: <a href="https://maps.google.com?daddr=1800+Market+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1800 Market St (at 18th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.sonesta.com/philadelphia">http://www.sonesta.com/philadelphia</a> </p> </div> </div>', 'lng': -75.17009092719478}, {'lat': 39.944911, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/IRASy351ek</p> <p style="font-size: 10px;">Thu Apr 27 12:40 | <a target="_blank" href="https://twitter.com/statuses/857575075880591361">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067}, {'lat': 39.951321, 'name': 'Home Sweet Homebrew', 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: It turned out to be a beautiful day! What are you brewing? #brewday #funday We\'re #OPENinPHL till 4 so you can... https://t.co/YUBSUqnmdS</p> <p style="font-size: 10px;">Sun Apr 23 15:58 | <a target="_blank" href="https://twitter.com/statuses/856175385607909376">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'lng': -75.173942}];

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