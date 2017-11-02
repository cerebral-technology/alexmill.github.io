
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.948726962168095, 'name': 'The Chemical Heritage Foundation', 'content': '<div id="content"> <h1>The Chemical Heritage Foundation</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: We\'re #OpeninPHL during #PhillyFreeStreets today! https://t.co/Ad8Kz5XEx2</p> <p style="font-size: 10px;">Sat Oct 28 14:01 | <a target="_blank" href="https://twitter.com/statuses/924274839237660673">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-2222<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+St+%28btwn+3rd+%26+4th+Sts%29%2C+Philadelphia%2C+PA+19106" target="_blank">315 Chestnut St (btwn 3rd & 4th Sts), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://chemheritage.org">http://chemheritage.org</a> </p> </div> </div>', 'lng': -75.14643250883483}];

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