
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: The weekend and the #guestlists ---&gt; #voyeurnightclub #openinphl #edm #housemusic #hiphop on three floors!… https://t.co/2CBSzThxUp</p> <p style="font-size: 10px;">Fri Jul 14 20:26 | <a target="_blank" href="https://twitter.com/statuses/885958599020826624">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855, 'lng': -75.16172330266902, 'name': 'Voyeur'}, {'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: Our Patio Bar is #OpenInPHL tonite @butcherbarphl... stop by and hang out with dcarull0! https://t.co/EqncTgazy7</p> <p style="font-size: 10px;">Thu Jul 13 20:22 | <a target="_blank" href="https://twitter.com/statuses/885595307307810816">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'lat': 39.952084, 'lng': -75.17483, 'name': 'Butcher Bar'}, {'content': '<div id="content"> <h1>Twenty Manning Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TwentyManning">@TwentyManning</a>: 20th Street is back in action and we\'re #OpenInPHL at 5pm! Happy hour snacks &amp; specials running all night during… https://t.co/DdsVAfVkPo</p> <p style="font-size: 10px;">Tue Jul 11 19:56 | <a target="_blank" href="https://twitter.com/statuses/884863885525876736">Read on Twitter</a></p> <hr> <p> Phone: (215) 731-0900<br/> Directions: <a href="https://maps.google.com?daddr=261+S+20th+St+%28at+Spruce+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">261 S 20th St (at Spruce St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.twentymanninggrill.com">http://www.twentymanninggrill.com</a> </p> </div> </div>', 'lat': 39.94857438494993, 'lng': -75.17420047593134, 'name': 'Twenty Manning Grill'}];

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