
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16067, 'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/IdGVzSyjeC</p> <p style="font-size: 10px;">Sun Feb 26 16:14 | <a target="_blank" href="https://twitter.com/statuses/835885724687810561">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma'}, {'lng': -75.134756, 'lat': 39.970529, 'content': '<div id="content"> <h1>Kensington Quarters - Restaurant & Butcher</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Kensington_Quar">@Kensington_Quar</a>: new brew in 16oz cans debuting this evening. Our patio is #openinphl #oldekensington… https://t.co/f1l7y324jl</p> <p style="font-size: 10px;">Thu Feb 23 20:27 | <a target="_blank" href="https://twitter.com/statuses/834862306198712320">Read on Twitter</a></p> <hr> <p> Phone: (267) 314-5086<br/> Directions: <a href="https://maps.google.com?daddr=1310+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1310 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.kensingtonquarters.com">http://www.kensingtonquarters.com</a> </p> </div> </div>', 'name': 'Kensington Quarters - Restaurant & Butcher'}, {'lng': -75.15915820590715, 'lat': 39.95356305109089, 'content': '<div id="content"> <h1>Beck\'s Cajun Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BecksCajunCafe">@BecksCajunCafe</a>: WOW! Every Thursday purchase Po\' Boy &amp; get any side of gumbo or Jambalaya $4.95!! In @RdgTerminalMkt &amp; 30th St Stat… https://t.co/f7bdopQJGa</p> <p style="font-size: 10px;">Thu Feb 23 15:17 | <a target="_blank" href="https://twitter.com/statuses/834784231117221892">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0505<br/> Directions: <a href="https://maps.google.com?daddr=51+N+12th+St+%28at+Reading+Terminal+Market%29%2C+Philadelphia%2C+PA+19107" target="_blank">51 N 12th St (at Reading Terminal Market), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.beckscajuncafe.com">http://www.beckscajuncafe.com</a> </p> </div> </div>', 'name': "Beck's Cajun Cafe"}, {'lng': -75.17257690429688, 'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: It\'s #PresidentsDay and we are #OpeninPHL. Hard to tell it\'s still Winter. Sit at our Outside tables, have lunch &amp;… https://t.co/cCtR37K7Lv</p> <p style="font-size: 10px;">Mon Feb 20 20:06 | <a target="_blank" href="https://twitter.com/statuses/833769900082601990">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe'}, {'lng': -75.13588231735324, 'lat': 39.96238803853491, 'content': '<div id="content"> <h1>Yards Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/yardsbrew">@yardsbrew</a>: The #TastingRoom is #OpenInPHL today 12-7pm Get down here! #PresidentsDay #Yards #BrewUntoOthers https://t.co/2654uRGVHb</p> <p style="font-size: 10px;">Mon Feb 20 18:31 | <a target="_blank" href="https://twitter.com/statuses/833746025240223744">Read on Twitter</a></p> <hr> <p> Phone: (215) 634-2600<br/> Directions: <a href="https://maps.google.com?daddr=901+N+Delaware+Ave+%28at+Poplar+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">901 N Delaware Ave (at Poplar St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.yardsbrewing.com">http://www.yardsbrewing.com</a> </p> </div> </div>', 'name': 'Yards Brewing Company'}];

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