
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.18106848275961, 'name': 'Philadelphia Museum of Art', 'content': '<div id="content"> <h1>Philadelphia Museum of Art</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/philamuseum">@philamuseum</a>: The @philamuseum is OPEN on #LaborDay. #openinPHL</p> <p style="font-size: 10px;">Sun Sep 03 17:15 | <a target="_blank" href="https://twitter.com/statuses/904392354089525248">Read on Twitter</a></p> <hr> <p> Phone: (215) 763-8100<br/> Directions: <a href="https://maps.google.com?daddr=2600+Benjamin+Franklin+Pkwy%2C+Philadelphia%2C+PA+19130" target="_blank">2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.philamuseum.org">http://www.philamuseum.org</a> </p> </div> </div>', 'lat': 39.965705518332456}, {'lng': -75.22062916994227, 'name': 'Mariposa Food Co-op', 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: We are #openinPHL this wknd! As summer comes to a close, it\'s time to start thinking about preserving your harvest https://t.co/AS4j4yIZUt</p> <p style="font-size: 10px;">Sat Sep 02 21:25 | <a target="_blank" href="https://twitter.com/statuses/904092833153511425">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'lat': 39.94819089608984}, {'lng': -75.17528057098389, 'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #labordayweekend #madeinamerica #OpeninPHL #streetclosures @ London Grill https://t.co/llgdrGTq3E</p> <p style="font-size: 10px;">Fri Sep 01 20:03 | <a target="_blank" href="https://twitter.com/statuses/903710035531968512">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'lat': 39.96750024480156}, {'lng': -75.17257690429688, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: There\'s different @ChimayUSA in town this #LaborDayWeekend - it\'s Chimay Doree, now on tap @PhillyTapFinder… https://t.co/1sXKF3xDkQ</p> <p style="font-size: 10px;">Fri Sep 01 15:47 | <a target="_blank" href="https://twitter.com/statuses/903645550825889793">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682}];

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