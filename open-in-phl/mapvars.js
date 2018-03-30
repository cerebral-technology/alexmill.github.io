
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Wagner Free Institute of Science', 'lat': 39.98091730304039, 'lng': -75.16274086580007, 'content': '<div id="content"> <h1>Wagner Free Institute of Science</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/wagnerinstitute">@wagnerinstitute</a>: Open today just like the jaws of this Florida Alligator!! #openinPHL https://t.co/dIlSa3ArFH</p> <p style="font-size: 10px;">Fri Mar 30 13:38 | <a target="_blank" href="https://twitter.com/statuses/979714412855611392">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1700+W+Montgomery+Ave%2C+Philadelphia%2C+PA+19121" target="_blank">1700 W Montgomery Ave, Philadelphia, PA 19121</a><br/> Website: <a target="_blank" href="http://www.wagnerfreeinstitute.org/">http://www.wagnerfreeinstitute.org/</a> </p> </div> </div>'}, {'name': 'Standard Tap', 'lat': 39.96406390664877, 'lng': -75.14068257383308, 'content': '<div id="content"> <h1>Standard Tap</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/StandardTap">@StandardTap</a>: Porch is open y\'all! Brewery ARS is our Featured Brewery for Happy Hour! We are also hosting Art Wars tonight at 7!… https://t.co/O26UB4uiWF</p> <p style="font-size: 10px;">Thu Mar 29 20:48 | <a target="_blank" href="https://twitter.com/statuses/979460208228556800">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-0630<br/> Directions: <a href="https://maps.google.com?daddr=901+N+2nd+St+%28at+Poplar+St.%29%2C+Philadelphia%2C+PA+19123" target="_blank">901 N 2nd St (at Poplar St.), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://standardtap.com/">http://standardtap.com/</a> </p> </div> </div>'}, {'name': 'Voyeur', 'lat': 39.948394683746855, 'lng': -75.16172330266902, 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #AZNJAKE on the mainfloor starting at midnight... #voyeurnightclub #WednesdayNight #OpeninPHL https://t.co/Z8rBLSARKH</p> <p style="font-size: 10px;">Thu Mar 29 00:48 | <a target="_blank" href="https://twitter.com/statuses/979158279170478081">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>'}, {'name': 'Varga Bar', 'lat': 39.946212231855064, 'lng': -75.1578756272796, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: By popular demand, @vargabar is now #openinphl for lunch Monday-Friday 1130am! And the kitchen… https://t.co/2FpYmwgBJu</p> <p style="font-size: 10px;">Wed Mar 28 16:53 | <a target="_blank" href="https://twitter.com/statuses/979038796988780544">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>'}, {'name': 'Good Dog Bar & Restaurant', 'lat': 39.94876539524823, 'lng': -75.16623213887215, 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: Our phones are on the fritz but we’re still open! Come on in for some awesome food &amp; booze, kids!!! #OpenInPHL</p> <p style="font-size: 10px;">Tue Mar 27 15:40 | <a target="_blank" href="https://twitter.com/statuses/978658067897298944">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>'}];

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