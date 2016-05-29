
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17261981964111, 'content': '<div id="content"> <h1>Eastern State Penitentiary</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/easternstate">@easternstate</a>: Reminder: Eastern State is OPEN for tours all weekend, including Monday. https://t.co/Qt5cLVxNif Happy Memorial Day Weekend! #MDW #OpenInPHL</p> <p style="font-size: 10px;">Sun May 29 15:20 | <a target="_blank" href="https://twitter.com/statuses/736940256776359936">Read on Twitter</a></p> <hr> <p> Phone: (215) 236-3300<br/> Directions: <a href="https://maps.google.com?daddr=2027+Fairmount+Ave+%28btwn+Corinthian+Ave+%26+22nd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2027 Fairmount Ave (btwn Corinthian Ave & 22nd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.easternstate.org">http://www.easternstate.org</a> </p> </div> </div>', 'name': 'Eastern State Penitentiary', 'lat': 39.96838828801233}, {'lng': -75.22062916994227, 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: We\'re open normal hours today tomorrow, 8am-10pm #openinphl</p> <p style="font-size: 10px;">Sun May 29 13:50 | <a target="_blank" href="https://twitter.com/statuses/736917568842289152">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'name': 'Mariposa Food Co-op', 'lat': 39.94819089608984}, {'lng': -75.14396057475848, 'content': '<div id="content"> <h1>Tin Angel</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/tinangelphl">@tinangelphl</a>: Tonight: @TheBelleRegards. 8pm. For tix: https://t.co/rUxxtteWIf #23yearsoflivemusic in @OldCityDistrict #OpenInPHL https://t.co/9Cd9L1W2PB</p> <p style="font-size: 10px;">Sat May 28 19:54 | <a target="_blank" href="https://twitter.com/statuses/736646964562001920">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-0978<br/> Directions: <a href="https://maps.google.com?daddr=20+S+2nd+St+%28btwn+Market+St+%26+Chestnut+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">20 S 2nd St (btwn Market St & Chestnut St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://tinangel.com">http://tinangel.com</a> </p> </div> </div>', 'name': 'Tin Angel', 'lat': 39.94946233839678}, {'lng': -75.17528057098389, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: Don\'t go! #openinphl all wknd buckets of beer, liters of #sangria, holiday specials https://t.co/qyHDDgHxeo</p> <p style="font-size: 10px;">Fri May 27 21:59 | <a target="_blank" href="https://twitter.com/statuses/736316023050280960">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'name': 'London Grill', 'lat': 39.96750024480156}, {'lng': -75.17257690429688, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #MemorialDayWeekend #openinphl with lotsa #craftbeer #brunch and #dinner every day. time for draft @ChimayUSA</p> <p style="font-size: 10px;">Fri May 27 20:05 | <a target="_blank" href="https://twitter.com/statuses/736287320828059648">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lat': 39.965362315682}, {'lng': -75.1712840795517, 'content': '<div id="content"> <h1>Joe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JoesSteaks">@JoesSteaks</a>: We are #openinPHL all weekend!! https://t.co/sAzBNTIi39</p> <p style="font-size: 10px;">Fri May 27 19:41 | <a target="_blank" href="https://twitter.com/statuses/736281206636056578">Read on Twitter</a></p> <hr> <p> Phone: (212) 924-3300<br/> Directions: <a href="https://maps.google.com?daddr=1845+Walnut+St+%28btwn+18th+and+19th%29%2C+Philadelphia%2C+PA+19103" target="_blank">1845 Walnut St (btwn 18th and 19th), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://joenewyork.com">http://joenewyork.com</a> </p> </div> </div>', 'name': 'Joe', 'lat': 39.95025511925042}, {'lng': -75.13168624908334, 'content': '<div id="content"> <h1>Girard brassiere & bruncherie</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GirardOnGirard">@GirardOnGirard</a>: #fbt to last year\'s #gazpacho. We\'ll be #openinPHL all weekend, brunch will be served Sat, Sun, Mon 9-3 #memorialday https://t.co/Fg0s2aEOKC</p> <p style="font-size: 10px;">Fri May 27 16:25 | <a target="_blank" href="https://twitter.com/statuses/736231877690961922">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-2486<br/> Directions: <a href="https://maps.google.com?daddr=300+E+Girard+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">300 E Girard Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.girardongirard.com">http://www.girardongirard.com</a> </p> </div> </div>', 'name': 'Girard brassiere & bruncherie', 'lat': 39.96978415108942}, {'lng': -75.1746878027916, 'content': '<div id="content"> <h1>Pamcakes: A Philly Cupcakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PamCakesPhilly">@PamCakesPhilly</a>: Holiday weekend hours #mdw #memorialdayweekend #openinphl #closedinphl https://t.co/rzU1DQaTm7</p> <p style="font-size: 10px;">Fri May 27 15:20 | <a target="_blank" href="https://twitter.com/statuses/736215414246514688">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-2860<br/> Directions: <a href="https://maps.google.com?daddr=404+S+20th+St%2C+Philadelphia%2C+PA+19146" target="_blank">404 S 20th St, Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://pamcakes.net">http://pamcakes.net</a> </p> </div> </div>', 'name': 'Pamcakes: A Philly Cupcakery', 'lat': 39.94662071145204}, {'lng': -75.1325798034668, 'content': '<div id="content"> <h1>SugarHouse Casino</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WinAtSugarHouse">@WinAtSugarHouse</a>: Hugo\'s Frog Bar &amp; ChopHouse made the list and it\'s NOW #OpenInPHL! Learn more here: https://t.co/2OzuTkABsg https://t.co/Ij7k4tKeLI</p> <p style="font-size: 10px;">Thu May 26 21:14 | <a target="_blank" href="https://twitter.com/statuses/735942131475451905">Read on Twitter</a></p> <hr> <p> Phone: (877) 477-3715<br/> Directions: <a href="https://maps.google.com?daddr=1001+N+Delaware+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1001 N Delaware Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.sugarhousecasino.com">https://www.sugarhousecasino.com</a> </p> </div> </div>', 'name': 'SugarHouse Casino', 'lat': 39.964030187577244}];

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