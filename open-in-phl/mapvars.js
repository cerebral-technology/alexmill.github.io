
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.971977955281794, 'content': '<div id="content"> <h1>Good Spoon Soupery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GoodSpoon">@GoodSpoon</a>: Nevertheless she persisted. ✊️❤ #internationalwomensday #getinformation #openinphl… https://t.co/G2Oi5OPojV</p> <p style="font-size: 10px;">Wed Mar 08 21:55 | <a target="_blank" href="https://twitter.com/statuses/839595458104279040">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1400+N+Front+St%2C+Philadelphia%2C+PA+19122" target="_blank">1400 N Front St, Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="http://www.goodspoonfoods.com">http://www.goodspoonfoods.com</a> </p> </div> </div>', 'name': 'Good Spoon Soupery', 'lng': -75.13542052725909}, {'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/qV65mTfNZv</p> <p style="font-size: 10px;">Tue Mar 07 23:10 | <a target="_blank" href="https://twitter.com/statuses/839251924499189760">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lng': -75.16067}];

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