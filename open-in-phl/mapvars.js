
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.96035085071555, 'lng': -75.15962635153404, 'name': 'Cafe Lift', 'content': '<div id="content"> <h1>Cafe Lift</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Cafe_Lift">@Cafe_Lift</a>: We\'ll be open all weekend for your Memorial Day Brunching needs (Including Monday!) Our hours are 8am until 3pm and… https://t.co/Pgu9T3IATW</p> <p style="font-size: 10px;">Fri May 25 16:36 | <a target="_blank" href="https://twitter.com/statuses/1000052929397698560">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-3031<br/> Directions: <a href="https://maps.google.com?daddr=428+N+13th+St%2C+Philadelphia%2C+PA+19123" target="_blank">428 N 13th St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://cafelift.com">http://cafelift.com</a> </p> </div> </div>'}, {'lat': 39.96531090100131, 'lng': -75.17252802654721, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: Welcome to #MemorialDayWeekend . we are #OpeninPHL the entire weekend. stop in for great #craftbeer , #Brunch, Dinn… https://t.co/x4dBbRz06M</p> <p style="font-size: 10px;">Fri May 25 15:23 | <a target="_blank" href="https://twitter.com/statuses/1000034562666360832">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}, {'lat': 39.9258591536898, 'lng': -75.16845120452112, 'name': 'Pistolas Del Sur', 'content': '<div id="content"> <h1>Pistolas Del Sur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PistolasDelSur">@PistolasDelSur</a>: We’re #openinphl this holiday weekend so come hang with us-new lunch deal today!</p> <p style="font-size: 10px;">Fri May 25 12:48 | <a target="_blank" href="https://twitter.com/statuses/999995511418519553">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1934+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1934 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="https://twitter.com/PistolasDelSur">https://twitter.com/PistolasDelSur</a> </p> </div> </div>'}, {'lat': 39.96740055333233, 'lng': -75.17541492227016, 'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: How bout some soft shells and sangria? Or buckets of beer! #yum #openinphl #MemorialDay2018 https://t.co/K5LIz6GQWj</p> <p style="font-size: 10px;">Thu May 24 21:52 | <a target="_blank" href="https://twitter.com/statuses/999770043549405185">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>'}, {'lat': 39.942260518142334, 'lng': -75.15469483778953, 'name': 'Brauhaus Schmitz', 'content': '<div id="content"> <h1>Brauhaus Schmitz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BrauhausSchmitz">@BrauhausSchmitz</a>: Dunno about you but this weather has us real Thirsty on this fine Thursday!! Doors opened at 11:30am and Happy Hour… https://t.co/2jNbxSOoRv</p> <p style="font-size: 10px;">Thu May 24 15:53 | <a target="_blank" href="https://twitter.com/statuses/999679842642726912">Read on Twitter</a></p> <hr> <p> Phone: (267) 909-8814<br/> Directions: <a href="https://maps.google.com?daddr=718+South+St+%28at+8th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">718 South St (at 8th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://brauhausschmitz.com">http://brauhausschmitz.com</a> </p> </div> </div>'}];

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