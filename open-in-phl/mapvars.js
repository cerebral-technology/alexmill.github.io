
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'lng': -75.17257690429688, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: ...AND smoked Tuna Salad on toasted bagel w/creamcheese, onion, tomato, cucumbers ... #SundayBrunch @thebelgiancafe #craftbeer #openinphl</p> <p style="font-size: 10px;">Sun Feb 21 16:16 | <a target="_blank" href="https://twitter.com/statuses/701440420778274816">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682}, {'lng': -75.16220781624595, 'name': "Woody's", 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Weather is #gorg! Make it out #tonight for a night of #endlesspossibilities #ilovewoodys #openinPHL https://t.co/sPBtNq6C1P</p> <p style="font-size: 10px;">Sat Feb 20 20:26 | <a target="_blank" href="https://twitter.com/statuses/701140990057381890">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com">http://www.woodysbar.com</a> </p> </div> </div>', 'lat': 39.94873969990853}, {'lng': -75.17368180095838, 'name': 'Village Whiskey', 'content': '<div id="content"> <h1>Village Whiskey</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VillageWhiskPHL">@VillageWhiskPHL</a>: Snow always brings great specials to Village Whiskey! Warm up w/ select $5 snacks &amp; cocktails available all night! #OpenInPHL #Garces</p> <p style="font-size: 10px;">Mon Feb 15 21:51 | <a target="_blank" href="https://twitter.com/statuses/699350261073059840">Read on Twitter</a></p> <hr> <p> Phone: (215) 665-1088<br/> Directions: <a href="https://maps.google.com?daddr=118+S+20th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">118 S 20th St (at Sansom St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://philadelphia.villagewhiskey.com">http://philadelphia.villagewhiskey.com</a> </p> </div> </div>', 'lat': 39.951219927927795}, {'lng': -75.15789844306211, 'name': 'Varga Bar', 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @VargaBar is gonna be #OpenInPHL normal hours today... Happy hour 4-6pm, dinner til 1am, drinks til 2am.</p> <p style="font-size: 10px;">Mon Feb 15 19:49 | <a target="_blank" href="https://twitter.com/statuses/699319595279192064">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lat': 39.94620097040777}];    
 
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