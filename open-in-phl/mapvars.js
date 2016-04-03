
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: join us tonight for @DuvelBeer Single and a dinner of pan-fried steelhead Bass with Andouille creole and hushpuppies #Fairmount #OpeninPHL</p> <p style="font-size: 10px;">Thu Mar 31 21:41 | <a target="_blank" href="https://twitter.com/statuses/715655216125911040">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17257690429688, 'lat': 39.965362315682}, {'name': "Mama's Vegetarian", 'content': '<div id="content"> <h1>Mama\'s Vegetarian</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MamasVegetarian">@MamasVegetarian</a>: Small Mama\'s on white, Missing a ball! #mamasvegetarian #falafel #lunch #break @phillyvegans #openinphl #phlvegan... https://t.co/bF7KLzD0q7</p> <p style="font-size: 10px;">Wed Mar 30 17:40 | <a target="_blank" href="https://twitter.com/statuses/715232166330949633">Read on Twitter</a></p> <hr> <p> Phone: (215) 751-0477<br/> Directions: <a href="https://maps.google.com?daddr=18+S+20th+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">18 S 20th St (at Ludlow St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://mamasvegetarian.com">http://mamasvegetarian.com</a> </p> </div> </div>', 'lng': -75.173362, 'lat': 39.952634}, {'name': 'Tria', 'content': '<div id="content"> <h1>Tria</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TriaPhilly">@TriaPhilly</a>: Happy Easter! We\'re #openinphl for Sunday School: Gelber Muskatellar, goat\'s milk Brie &amp; a bit of Bone Jolly Rosé https://t.co/ykPjCSi8vE</p> <p style="font-size: 10px;">Sun Mar 27 23:31 | <a target="_blank" href="https://twitter.com/statuses/714233363700301829">Read on Twitter</a></p> <hr> <p> Phone: (215) 629-9200<br/> Directions: <a href="https://maps.google.com?daddr=1137+Spruce+St%2C+Philadelphia%2C+PA+19107" target="_blank">1137 Spruce St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.triacafe.com">http://www.triacafe.com</a> </p> </div> </div>', 'lng': -75.161088, 'lat': 39.946607}, {'name': 'Time', 'content': '<div id="content"> <h1>Time</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TIMErestaurant">@TIMErestaurant</a>: Happy Easter! Are you having pork or turkey? #openinphl #thankseasterbunny https://t.co/IvHGQwxPRm https://t.co/yBy2c5ey2i</p> <p style="font-size: 10px;">Sun Mar 27 22:31 | <a target="_blank" href="https://twitter.com/statuses/714218416928919553">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-4800<br/> Directions: <a href="https://maps.google.com?daddr=1315+Sansom+St+%28at+13th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1315 Sansom St (at 13th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://timerestaurant.net">http://timerestaurant.net</a> </p> </div> </div>', 'lng': -75.16256122520697, 'lat': 39.94995590122836}, {'name': 'Good Dog Bar & Restaurant', 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: #HappyEaster! We\'re #OpenInPHL until 1am for the kitchen &amp; 2am for the bar. #Bunnies #What?! @… https://t.co/M3VNKaf1c3</p> <p style="font-size: 10px;">Sun Mar 27 20:03 | <a target="_blank" href="https://twitter.com/statuses/714181013103112192">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com">http://gooddogbar.com</a> </p> </div> </div>', 'lng': -75.16623213887215, 'lat': 39.94876539524823}];

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