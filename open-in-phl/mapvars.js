
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/7KG5AgJ1Fw</p> <p style="font-size: 10px;">Thu Feb 16 23:17 | <a target="_blank" href="https://twitter.com/statuses/832368303549054977">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067, 'lat': 39.944911}, {'name': "Devil's Den", 'content': '<div id="content"> <h1>Devil\'s Den</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Devilsdenphilly">@Devilsdenphilly</a>: We are #openinphl Come in for happy hour from 5 to 7 with half priced drafts or come in anytime for our city wide specials.</p> <p style="font-size: 10px;">Thu Feb 16 20:31 | <a target="_blank" href="https://twitter.com/statuses/832326475986636801">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-0855<br/> Directions: <a href="https://maps.google.com?daddr=1148+S+11th+St+%28at+Ellsworth+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">1148 S 11th St (at Ellsworth St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.devilsdenphilly.com">http://www.devilsdenphilly.com</a> </p> </div> </div>', 'lng': -75.16186010665385, 'lat': 39.935803151721316}, {'name': "Beck's Cajun Cafe", 'content': '<div id="content"> <h1>Beck\'s Cajun Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BecksCajunCafe">@BecksCajunCafe</a>: WOW! Every Thursday purchase Po\' Boy &amp; get any side of gumbo or Jambalaya $4.95!! In @RdgTerminalMkt &amp; 30th St Stat… https://t.co/o0lxcsyhJd</p> <p style="font-size: 10px;">Thu Feb 16 15:14 | <a target="_blank" href="https://twitter.com/statuses/832246849515954176">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0505<br/> Directions: <a href="https://maps.google.com?daddr=51+N+12th+St+%28at+Reading+Terminal+Market%29%2C+Philadelphia%2C+PA+19107" target="_blank">51 N 12th St (at Reading Terminal Market), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.beckscajuncafe.com">http://www.beckscajuncafe.com</a> </p> </div> </div>', 'lng': -75.15915820590715, 'lat': 39.95356305109089}];

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