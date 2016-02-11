
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: @thebelgiancafe #openinphl for #SB50 #Sundaydinner great beer and great food!!</p> <p style="font-size: 10px;">Sun Feb 07 22:37 | <a target="_blank" href="https://twitter.com/statuses/696462815998115843">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17257690429688, 'lat': 39.965362315682}, {'name': 'Federal Donuts', 'content': '<div id="content"> <h1>Federal Donuts</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FederalDonuts">@FederalDonuts</a>: #openinPHL https://t.co/hk0aCls2bs</p> <p style="font-size: 10px;">Fri Feb 05 13:36 | <a target="_blank" href="https://twitter.com/statuses/695601925253890048">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-8258<br/> Directions: <a href="https://maps.google.com?daddr=1632+Sansom+St+%28at+17th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1632 Sansom St (at 17th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.federaldonuts.com">http://www.federaldonuts.com</a> </p> </div> </div>', 'lng': -75.16814156131629, 'lat': 39.95063066163185}];    
 
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