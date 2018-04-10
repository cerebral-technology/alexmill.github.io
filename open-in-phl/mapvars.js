
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: Stop out @vargabar for some lunch! Monday through Friday opening at 1130am! #OpenInPHL… https://t.co/Zo8D9rmL4i</p> <p style="font-size: 10px;">Tue Apr 10 16:16 | <a target="_blank" href="https://twitter.com/statuses/983740548677763072">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar', 'lng': -75.1578756272796, 'lat': 39.946212231855064}, {'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Reduced Guest list open now! Signup B4 10PM. Members in free B4 1AM- show your app. #VOYEURNIGHTCLUB, arrive early… https://t.co/XozU7gNsud</p> <p style="font-size: 10px;">Sat Apr 07 19:17 | <a target="_blank" href="https://twitter.com/statuses/982698923134537728">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lng': -75.16172330266902, 'lat': 39.948394683746855}, {'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: You will be partying tonight in FIVE ROOMS with 5 DJS SPINNING. Arrive early before the lines and the cover! Have f… https://t.co/DONowyU2Ix</p> <p style="font-size: 10px;">Fri Apr 06 22:20 | <a target="_blank" href="https://twitter.com/statuses/982382625443794945">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'name': "Woody's", 'lng': -75.16220781624595, 'lat': 39.94873969990853}, {'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: We are #OpenInPHL for the #VillanovaParade. Stop by our Bottle Shop in the lobby of One Penn Center (above Suburban… https://t.co/eyBgFNkig0</p> <p style="font-size: 10px;">Thu Apr 05 14:33 | <a target="_blank" href="https://twitter.com/statuses/981902772932169728">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>', 'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room', 'lng': -75.16348648828463, 'lat': 39.929794448959385}];

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