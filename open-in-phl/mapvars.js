
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17009092719478, 'content': '<div id="content"> <h1>Sonesta Philadelphia Rittenhouse Square</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonestaPhilly">@SonestaPhilly</a>: #DYN our @RuthsChrisPhilly will be open on July 4th from 4:30 PM - 9:00 PM?! #OpenInPHL #VisitPhilly #RuthsChris #July4th #RittenhouseSquare</p> <p style="font-size: 10px;">Sat Jul 01 14:01 | <a target="_blank" href="https://twitter.com/statuses/881150655930478592">Read on Twitter</a></p> <hr> <p> Phone: (215) 561-7500<br/> Directions: <a href="https://maps.google.com?daddr=1800+Market+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1800 Market St (at 18th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square">https://www.sonesta.com/us/pennsylvania/philadelphia/sonesta-philadelphia-rittenhouse-square</a> </p> </div> </div>', 'name': 'Sonesta Philadelphia Rittenhouse Square', 'lat': 39.953140176691775}, {'lng': -75.170942, 'content': '<div id="content"> <h1>Newbold Brew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/NewboldBrew">@NewboldBrew</a>: Just put on the shelf, @ManorBrew! Funky Prowler &amp; Mr. Blueberry. #SourBeer #BeerNerds #OpenInPHL https://t.co/LmZllGX7dD</p> <p style="font-size: 10px;">Fri Jun 30 22:45 | <a target="_blank" href="https://twitter.com/statuses/880920167622029313">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-5177<br/> Directions: <a href="https://maps.google.com?daddr=1900+S+15th+St+%28Mifflin%29%2C+Philadelphia%2C+PA+19145" target="_blank">1900 S 15th St (Mifflin), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.newboldbrew.com">http://www.newboldbrew.com</a> </p> </div> </div>', 'name': 'Newbold Brew', 'lat': 39.926971}, {'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #INDEPENDENCEDAYWEEKEND2017 at #VOYEURNIGHTCLUB #Bonus5NightWeekend #holiday #fireworks #openinPHL… https://t.co/WmvjNMLMy9</p> <p style="font-size: 10px;">Fri Jun 30 15:58 | <a target="_blank" href="https://twitter.com/statuses/880817808275374080">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lat': 39.948394683746855}, {'lng': -75.17269004403778, 'content': '<div id="content"> <h1>Metropolitan Bakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/metrobakes">@metrobakes</a>: The #Rittenhouse shop is #OpenInPHL, all weekend-long! 🇺🇸🇺🇸🇺🇸 *Please note Metro Cafe is CLOSED… https://t.co/QAvZ06kOZ1</p> <p style="font-size: 10px;">Fri Jun 30 13:55 | <a target="_blank" href="https://twitter.com/statuses/880786812733718528">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-6655<br/> Directions: <a href="https://maps.google.com?daddr=262+S+19th+St+%28Manning%29%2C+Philadelphia%2C+PA+19103" target="_blank">262 S 19th St (Manning), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://metropolitanbakery.com">http://metropolitanbakery.com</a> </p> </div> </div>', 'name': 'Metropolitan Bakery', 'lat': 39.94830744416214}];

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