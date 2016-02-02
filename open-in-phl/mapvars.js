
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'name': 'Lolita', 'lng': -75.16197, 'lat': 39.94997, 'content': '<div id="content"> <h1>Lolita</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/lolitaphilly">@lolitaphilly</a>: Grab a bite after the #PhillyAutoShow ! We open at 5, happy hour at the bar until 6:30 #openinPHL</p> <p style="font-size: 10px;">Sun Jan 31 21:30 | <a target="_blank" href="https://twitter.com/statuses/693909162619736065">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-7100<br/> Directions: <a href="https://maps.google.com?daddr=106+S+13th+St+%28btw+Chestnut+%26+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">106 S 13th St (btw Chestnut & Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.lolitabyob.com">http://www.lolitabyob.com</a> </p> </div> </div>'}, {'name': 'Trophy Bikes', 'lng': -75.187259, 'lat': 39.952282, 'content': '<div id="content"> <h1>Trophy Bikes</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/trophybikes">@trophybikes</a>: OK! We are #OpeninPHL with our regular Commuter Hours in full effect: 8 a.m. to 7 p.m. weekdays, 10-5 Sat+Sun. https://t.co/JGaqUJk8ZK</p> <p style="font-size: 10px;">Thu Jan 28 14:03 | <a target="_blank" href="https://twitter.com/statuses/692709601435897856">Read on Twitter</a></p> <hr> <p> Phone: (215) 222-2020<br/> Directions: <a href="https://maps.google.com?daddr=3131+walnu+st%2C+Philadelphia%2C+PA+19104" target="_blank">3131 walnu st, Philadelphia, PA 19104</a><br/> Website: <a target="_blank" href="http://www.trophybikes.com/">http://www.trophybikes.com/</a> </p> </div> </div>'}];    
 
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