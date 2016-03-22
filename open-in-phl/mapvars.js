
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.95076920973739, 'content': '<div id="content"> <h1>honeygrow</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/honeygrow">@honeygrow</a>: #hg16thSt is finally #OpenInPHL! 🙌\U0001f3fb🍜🍴 Learn more about the updates: https://t.co/nHFesvhJyX #honeygrow #philly https://t.co/HmlfVCZZ6G</p> <p style="font-size: 10px;">Tue Mar 22 15:03 | <a target="_blank" href="https://twitter.com/statuses/712293706552844288">Read on Twitter</a></p> <hr> <p> Phone: (215) 279-7724<br/> Directions: <a href="https://maps.google.com?daddr=110+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">110 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.honeygrow.com">http://www.honeygrow.com</a> </p> </div> </div>', 'lng': -75.16730936851067, 'name': 'honeygrow'}];

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