
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'name': 'Federal Donuts', 'lng': -75.16814156131629, 'lat': 39.95063066163185, 'content': '<div id="content"> <h1>Federal Donuts</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FederalDonuts">@FederalDonuts</a>: #openinPHL https://t.co/hk0aCls2bs</p> <p style="font-size: 10px;">Fri Feb 05 13:36 | <a target="_blank" href="https://twitter.com/statuses/695601925253890048">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-8258<br/> Directions: <a href="https://maps.google.com?daddr=1632+Sansom+St+%28at+17th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1632 Sansom St (at 17th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.federaldonuts.com">http://www.federaldonuts.com</a> </p> </div> </div>'}, {'name': 'Lolita', 'lng': -75.16197, 'lat': 39.94997, 'content': '<div id="content"> <h1>Lolita</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/lolitaphilly">@lolitaphilly</a>: Grab a bite after the #PhillyAutoShow ! We open at 5, happy hour at the bar until 6:30 #openinPHL</p> <p style="font-size: 10px;">Sun Jan 31 21:30 | <a target="_blank" href="https://twitter.com/statuses/693909162619736065">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-7100<br/> Directions: <a href="https://maps.google.com?daddr=106+S+13th+St+%28btw+Chestnut+%26+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">106 S 13th St (btw Chestnut & Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.lolitabyob.com">http://www.lolitabyob.com</a> </p> </div> </div>'}];    
 
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