
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.15789844306211, 'name': 'Varga Bar', 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: We will be #OpenInPHL @vargabar on Easter Sunday our regular hours! Outside seating open too!… https://t.co/wo47bfrjHv</p> <p style="font-size: 10px;">Tue Mar 22 18:44 | <a target="_blank" href="https://twitter.com/statuses/712349196829888516">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lat': 39.94620097040777}, {'lng': -75.16730936851067, 'name': 'honeygrow', 'content': '<div id="content"> <h1>honeygrow</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/honeygrow">@honeygrow</a>: #hg16thSt is finally #OpenInPHL! 🙌\U0001f3fb🍜🍴 Learn more about the updates: https://t.co/nHFesvhJyX #honeygrow #philly https://t.co/HmlfVCZZ6G</p> <p style="font-size: 10px;">Tue Mar 22 15:03 | <a target="_blank" href="https://twitter.com/statuses/712293706552844288">Read on Twitter</a></p> <hr> <p> Phone: (215) 279-7724<br/> Directions: <a href="https://maps.google.com?daddr=110+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">110 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.honeygrow.com">http://www.honeygrow.com</a> </p> </div> </div>', 'lat': 39.95076920973739}];

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