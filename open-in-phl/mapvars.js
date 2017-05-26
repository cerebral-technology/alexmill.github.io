
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Ristorante Aroma', 'lng': -75.16067, 'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/kCDdDw5jBw</p> <p style="font-size: 10px;">Fri May 26 12:20 | <a target="_blank" href="https://twitter.com/statuses/868079298845999104">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>'}, {'name': 'Brulee Catering', 'lng': -75.146603, 'lat': 39.929952, 'content': '<div id="content"> <h1>Brulee Catering</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Brulee_Catering">@Brulee_Catering</a>: New menu item tonight @FreeLibrary is the Provolone and Broccoli Rabe Sausage Sandwich with caramelized onions!… https://t.co/HGCkY9kM9I</p> <p style="font-size: 10px;">Thu May 25 21:39 | <a target="_blank" href="https://twitter.com/statuses/867857692249010176">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1406+S+Front+St%2C+Philadelphia%2C+PA+19147" target="_blank">1406 S Front St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.brulee-catering.com/">http://www.brulee-catering.com/</a> </p> </div> </div>'}, {'name': 'Good Dog Bar & Restaurant', 'lng': -75.16623213887215, 'lat': 39.94876539524823, 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: Don\'t let the construction fool you! We are #OpenInPHL! We\'ve got drink and food specials too! It\'s #InTheBiz for everyone!!!</p> <p style="font-size: 10px;">Mon May 22 15:39 | <a target="_blank" href="https://twitter.com/statuses/866679907706949632">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>'}, {'name': 'The Belgian Cafe', 'lng': -75.17257690429688, 'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #OpeninPHL @PreaknessStakes @Phillies @philamuseum @the_barnes stop in for a #CraftBeer and #brunch</p> <p style="font-size: 10px;">Sat May 20 16:06 | <a target="_blank" href="https://twitter.com/statuses/865961853855334402">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}];

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