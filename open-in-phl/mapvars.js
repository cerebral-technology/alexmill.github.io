
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/pOY9cijxEI</p> <p style="font-size: 10px;">Mon Apr 03 14:50 | <a target="_blank" href="https://twitter.com/statuses/848910467745685504">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lat': 39.944911, 'lng': -75.16067, 'name': 'Ristorante Aroma'}, {'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: Beginning today, Monday, April 3, the Museum is now open again on Monday\'s. So, come in for a visit! #OpenInPHL</p> <p style="font-size: 10px;">Mon Apr 03 14:02 | <a target="_blank" href="https://twitter.com/statuses/848898387885924353">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lat': 39.94621074855531, 'lng': -75.14042033081468, 'name': 'Independence Seaport Museum'}, {'content': '<div id="content"> <h1>Meridian Bank</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MeridianBank">@MeridianBank</a>: See you soon, #Philly ! Via @PHLBizJournal #openinphl https://t.co/MNButrzNS1</p> <p style="font-size: 10px;">Wed Mar 29 14:20 | <a target="_blank" href="https://twitter.com/statuses/847091025478868993">Read on Twitter</a></p> <hr> <p> Phone: (215) 874-3481<br/> Directions: <a href="https://maps.google.com?daddr=920+Germantown+Pike%2C+Plymouth+Meeting%2C+PA+19462" target="_blank">920 Germantown Pike, Plymouth Meeting, PA 19462</a><br/> Website: <a target="_blank" href="http://www.joegonzalez.net">http://www.joegonzalez.net</a> </p> </div> </div>', 'lat': 40.12835333599643, 'lng': -75.29762453026139, 'name': 'Meridian Bank'}];

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