
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16067, 'lat': 39.944911, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/aglyBNHhc7</p> <p style="font-size: 10px;">Sun Jun 04 22:17 | <a target="_blank" href="https://twitter.com/statuses/871491018012721152">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>'}, {'lng': -75.1682669598498, 'lat': 39.95074635500887, 'name': 'Abe Fisher', 'content': '<div id="content"> <h1>Abe Fisher</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AbeFisher_Phl">@AbeFisher_Phl</a>: Morning Dew. Blanco tequila, black peppercorn, honeydew melon, celery and lime juice. Sour in the right ways, subtl… https://t.co/dakpWGGtY8</p> <p style="font-size: 10px;">Mon May 29 18:50 | <a target="_blank" href="https://twitter.com/statuses/869264769261424644">Read on Twitter</a></p> <hr> <p> Phone: (215) 867-0088<br/> Directions: <a href="https://maps.google.com?daddr=1623+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1623 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://abefisherphilly.com">http://abefisherphilly.com</a> </p> </div> </div>'}];

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