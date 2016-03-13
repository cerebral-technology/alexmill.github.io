
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
    
    var tweets = [{'content': '<div id="content"> <h1>Sancho Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Sancho_Pistolas">@Sancho_Pistolas</a>: Outdoor seating weather! 😎🍹 #OpenInPHL at 4pm https://t.co/uIRNTMJKdS</p> <p style="font-size: 10px;">Wed Mar 09 18:54 | <a target="_blank" href="https://twitter.com/statuses/707640693251043328">Read on Twitter</a></p> <hr> <p> Phone: (267) 324-3530<br/> Directions: <a href="https://maps.google.com?daddr=19+W+Girard+Ave+%28at+Leopard+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">19 W Girard Ave (at Leopard St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.sanchopistolas.com">http://www.sanchopistolas.com</a> </p> </div> </div>', 'name': "Sancho Pistola's", 'lat': 39.96893097540645, 'lng': -75.13511180877686}, {'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: We are open, Outdoor seating and all, for Lunch &amp; Dinner! #craftbeer @PhillyTapFinder #Fairmount #OpeninPHL https://t.co/7DjoACBgns</p> <p style="font-size: 10px;">Mon Mar 07 17:50 | <a target="_blank" href="https://twitter.com/statuses/706899934218469378">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lat': 39.965362315682, 'lng': -75.17257690429688}, {'content': '<div id="content"> <h1>Lolita</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/lolitaphilly">@lolitaphilly</a>: Checking out the #FlowerShow ? Grab a bite to eat after! We are #openinphl at 5pm!</p> <p style="font-size: 10px;">Sun Mar 06 19:39 | <a target="_blank" href="https://twitter.com/statuses/706564973938388992">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-7100<br/> Directions: <a href="https://maps.google.com?daddr=106+S+13th+St+%28btw+Chestnut+%26+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">106 S 13th St (btw Chestnut & Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.lolitabyob.com">http://www.lolitabyob.com</a> </p> </div> </div>', 'name': 'Lolita', 'lat': 39.94997, 'lng': -75.16197}];    
 
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