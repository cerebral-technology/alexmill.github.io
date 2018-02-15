
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Signup (on our website) for FREE GUESTLIST when you arrive before 1AM tonight. #MEMBERSFREE B4 1AM just by showing… https://t.co/V5kxB0dTtU</p> <p style="font-size: 10px;">Fri Feb 09 20:10 | <a target="_blank" href="https://twitter.com/statuses/962056151935287296">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lat': 39.948394683746855, 'name': 'Voyeur'}, {'lng': -75.1746805, 'content': '<div id="content"> <h1>Philly Improv Theater - PHIT Comedy</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phitcomedy">@phitcomedy</a>: Stopping at @shakeshack for a Swoop\'s Scoop? Come on down the block for a scoop or four of live local comedy:… https://t.co/lKGse36eaQ</p> <p style="font-size: 10px;">Thu Feb 08 19:20 | <a target="_blank" href="https://twitter.com/statuses/961681034256424960">Read on Twitter</a></p> <hr> <p> Phone: (267) 233-1556<br/> Directions: <a href="https://maps.google.com?daddr=2030+Sansom+Street+%2820th+Street%29%2C+Philadelphia%2C+PA+19103" target="_blank">2030 Sansom Street (20th Street), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.phitcomedy.com">http://www.phitcomedy.com</a> </p> </div> </div>', 'lat': 39.9512956, 'name': 'Philly Improv Theater - PHIT Comedy'}, {'lng': -75.16807079315186, 'content': '<div id="content"> <h1>Monk\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MonksCafePhilly">@MonksCafePhilly</a>: Thank you to the @Eagles, coaches, staff &amp; all of the fans. It\'s our honor to share this day with you.… https://t.co/M8ysBrIAvV</p> <p style="font-size: 10px;">Thu Feb 08 18:50 | <a target="_blank" href="https://twitter.com/statuses/961673522136403973">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-7005<br/> Directions: <a href="https://maps.google.com?daddr=264+S+16th+St+%28btwn+Spruce+St+%26+Locust+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">264 S 16th St (btwn Spruce St & Locust St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://monkscafe.com">http://monkscafe.com</a> </p> </div> </div>', 'lat': 39.9477629747096, 'name': "Monk's Cafe"}, {'lng': -75.16756230361307, 'content': '<div id="content"> <h1>Real Food Eatery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/RealFoodEatery">@RealFoodEatery</a>: We are open! #openinphl @ Real Food Eatery https://t.co/FGDB2kuSiR</p> <p style="font-size: 10px;">Thu Feb 08 18:19 | <a target="_blank" href="https://twitter.com/statuses/961665783406395392">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://realfoodeatery.com/">http://realfoodeatery.com/</a> </p> </div> </div>', 'lat': 39.94947915497644, 'name': 'Real Food Eatery'}, {'lng': -75.16348648828463, 'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: #OpenInPHL Open on Passyunk. Flask bottles available. https://t.co/Z8Y6Gk1KQG</p> <p style="font-size: 10px;">Thu Feb 08 18:12 | <a target="_blank" href="https://twitter.com/statuses/961663963493695489">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>', 'lat': 39.929794448959385, 'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room'}];

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