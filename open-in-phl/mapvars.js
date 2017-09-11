
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.949891, 'content': '<div id="content"> <h1>Capogiro Gelato Artisans</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Capogiro">@Capogiro</a>: We are definitely #OpenInPHL citywide! https://t.co/3c13i0d7Dm</p> <p style="font-size: 10px;">Mon Sep 04 23:04 | <a target="_blank" href="https://twitter.com/statuses/904842728168673280">Read on Twitter</a></p> <hr> <p> Phone: (215) 351-0900<br/> Directions: <a href="https://maps.google.com?daddr=119+S+13th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">119 S 13th St (at Sansom St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.capogirogelato.com/">http://www.capogirogelato.com/</a> </p> </div> </div>', 'name': 'Capogiro Gelato Artisans', 'lng': -75.161802}, {'lat': 39.948322, 'content': '<div id="content"> <h1>Wishbone</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/wishbonephilly">@wishbonephilly</a>: #HappyLaborDay! BOTH STORES ARE #openinPHL and serving these sexy muthas! #peachpie #blueberrypie #Pecanpie #more! https://t.co/xLVOnaJ9KV</p> <p style="font-size: 10px;">Mon Sep 04 21:06 | <a target="_blank" href="https://twitter.com/statuses/904813005115977728">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://wishbonephilly.com/">http://wishbonephilly.com/</a> </p> </div> </div>', 'name': 'Wishbone', 'lng': -75.162257}, {'lat': 39.969132, 'content': '<div id="content"> <h1>ROOT restaurant + wine bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ROOTrestaurant">@ROOTrestaurant</a>: Happy Labor Day! We are #openinphl. Come on by for happy hour at 5. #rootphilly https://t.co/8oPwdQjOBR</p> <p style="font-size: 10px;">Mon Sep 04 20:36 | <a target="_blank" href="https://twitter.com/statuses/904805440592244736">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1206+Frankford+Ave+%28at+W+Girard+Ave%29%2C+Philadelphia%2C+PA+19125" target="_blank">1206 Frankford Ave (at W Girard Ave), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://rootrestaurant.com">http://rootrestaurant.com</a> </p> </div> </div>', 'name': 'ROOT restaurant + wine bar', 'lng': -75.134629}, {'lat': 39.94478586732886, 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: We are #openinPHL and there\'s still time for brunch ! Pick up your bacon, eggs, and fresh… https://t.co/8MeCKzm1ek</p> <p style="font-size: 10px;">Mon Sep 04 19:13 | <a target="_blank" href="https://twitter.com/statuses/904784602509697026">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2241+Grays+Ferry+Ave%2C+Philadelphia%2C+PA+19146" target="_blank">2241 Grays Ferry Ave, Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.greenaislegrocery.com/">http://www.greenaislegrocery.com/</a> </p> </div> </div>', 'name': 'Green Aisle Grocery', 'lng': -75.18001977753168}, {'lat': 39.94620097040777, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: We are #OpenInPHL @vargabar today... normal hours! Happy hour 4-6pm, dinner til 1am, drinks til 2. https://t.co/sk7XkNHgSl</p> <p style="font-size: 10px;">Mon Sep 04 18:12 | <a target="_blank" href="https://twitter.com/statuses/904769187045892099">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar', 'lng': -75.15789844306211}];

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