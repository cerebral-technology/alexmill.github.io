
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.944911, 'lng': -75.16067, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/0XEpSrD1da</p> <p style="font-size: 10px;">Thu Mar 02 18:14 | <a target="_blank" href="https://twitter.com/statuses/837365393639555072">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>'}, {'lat': 39.95356305109089, 'lng': -75.15915820590715, 'name': "Beck's Cajun Cafe", 'content': '<div id="content"> <h1>Beck\'s Cajun Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BecksCajunCafe">@BecksCajunCafe</a>: WOW! Every Thursday purchase Po\' Boy &amp; get any side of gumbo or Jambalaya $4.95!! In @RdgTerminalMkt &amp; 30th St Stat… https://t.co/ZMnuSekVuC</p> <p style="font-size: 10px;">Thu Mar 02 16:05 | <a target="_blank" href="https://twitter.com/statuses/837332950748364800">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0505<br/> Directions: <a href="https://maps.google.com?daddr=51+N+12th+St+%28at+Reading+Terminal+Market%29%2C+Philadelphia%2C+PA+19107" target="_blank">51 N 12th St (at Reading Terminal Market), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.beckscajuncafe.com">http://www.beckscajuncafe.com</a> </p> </div> </div>'}];

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