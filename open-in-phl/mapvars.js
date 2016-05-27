
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.13168624908334, 'lat': 39.96978415108942, 'name': 'Girard brassiere & bruncherie', 'content': '<div id="content"> <h1>Girard brassiere & bruncherie</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GirardOnGirard">@GirardOnGirard</a>: #fbt to last year\'s #gazpacho. We\'ll be #openinPHL all weekend, brunch will be served Sat, Sun, Mon 9-3 #memorialday https://t.co/Fg0s2aEOKC</p> <p style="font-size: 10px;">Fri May 27 16:25 | <a target="_blank" href="https://twitter.com/statuses/736231877690961922">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-2486<br/> Directions: <a href="https://maps.google.com?daddr=300+E+Girard+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">300 E Girard Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.girardongirard.com">http://www.girardongirard.com</a> </p> </div> </div>'}, {'lng': -75.1746878027916, 'lat': 39.94662071145204, 'name': 'Pamcakes: A Philly Cupcakery', 'content': '<div id="content"> <h1>Pamcakes: A Philly Cupcakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PamCakesPhilly">@PamCakesPhilly</a>: Holiday weekend hours #mdw #memorialdayweekend #openinphl #closedinphl https://t.co/rzU1DQaTm7</p> <p style="font-size: 10px;">Fri May 27 15:20 | <a target="_blank" href="https://twitter.com/statuses/736215414246514688">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-2860<br/> Directions: <a href="https://maps.google.com?daddr=404+S+20th+St%2C+Philadelphia%2C+PA+19146" target="_blank">404 S 20th St, Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://pamcakes.net">http://pamcakes.net</a> </p> </div> </div>'}, {'lng': -75.17261981964111, 'lat': 39.96838828801233, 'name': 'Eastern State Penitentiary', 'content': '<div id="content"> <h1>Eastern State Penitentiary</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/easternstate">@easternstate</a>: In #Philly for Memorial Day Weekend? Take a tour of Eastern State! We\'re OPEN every day 10 to 5. https://t.co/Qt5cLVxNif #MDW #OpenInPHL</p> <p style="font-size: 10px;">Thu May 26 22:10 | <a target="_blank" href="https://twitter.com/statuses/735956277994631170">Read on Twitter</a></p> <hr> <p> Phone: (215) 236-3300<br/> Directions: <a href="https://maps.google.com?daddr=2027+Fairmount+Ave+%28btwn+Corinthian+Ave+%26+22nd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2027 Fairmount Ave (btwn Corinthian Ave & 22nd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.easternstate.org">http://www.easternstate.org</a> </p> </div> </div>'}, {'lng': -75.1325798034668, 'lat': 39.964030187577244, 'name': 'SugarHouse Casino', 'content': '<div id="content"> <h1>SugarHouse Casino</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WinAtSugarHouse">@WinAtSugarHouse</a>: Hugo\'s Frog Bar &amp; ChopHouse made the list and it\'s NOW #OpenInPHL! Learn more here: https://t.co/2OzuTkABsg https://t.co/Ij7k4tKeLI</p> <p style="font-size: 10px;">Thu May 26 21:14 | <a target="_blank" href="https://twitter.com/statuses/735942131475451905">Read on Twitter</a></p> <hr> <p> Phone: (877) 477-3715<br/> Directions: <a href="https://maps.google.com?daddr=1001+N+Delaware+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1001 N Delaware Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.sugarhousecasino.com">https://www.sugarhousecasino.com</a> </p> </div> </div>'}];

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