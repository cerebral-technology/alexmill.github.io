
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.94873969990853, 'lng': -75.16220781624595, 'name': "Woody's", 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: #WOODYS where #GREATPEOPLEPARTY #HolidayCheer #Guestlist is up on our website. #ILOVEWOODYS. Signup before 9PM and… https://t.co/aXPhlXAQmN</p> <p style="font-size: 10px;">Fri Dec 08 16:16 | <a target="_blank" href="https://twitter.com/statuses/939166900227117058">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>'}, {'lat': 39.95386, 'lng': -75.143196, 'name': 'Tuna Bar', 'content': '<div id="content"> <h1>Tuna Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TunaBarPHL">@TunaBarPHL</a>: Big thanks to @EaterPhilly and @rachelvigoda for including us in this feature! #EaterPhilly #OpenInPHL https://t.co/JSf3TQsivm</p> <p style="font-size: 10px;">Tue Dec 05 19:02 | <a target="_blank" href="https://twitter.com/statuses/938121302191329280">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=205+Race+St%2C+Philadelphia%2C+PA+19106" target="_blank">205 Race St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.tunabar.com/">http://www.tunabar.com/</a> </p> </div> </div>'}, {'lat': 39.94975765086555, 'lng': -75.17303379564967, 'name': 'The Rittenhouse Spa And Club - Hair By Paul Labrecque', 'content': '<div id="content"> <h1>The Rittenhouse Spa And Club - Hair By Paul Labrecque</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/RittenhouseSpa">@RittenhouseSpa</a>: Brave the snow for our #OpeninPHL offer - warm up with us and receive 20% off your Hot Stone Massage at The Rittenh… https://t.co/49pkBUp7tA</p> <p style="font-size: 10px;">Tue Dec 05 16:20 | <a target="_blank" href="https://twitter.com/statuses/938080629312417792">Read on Twitter</a></p> <hr> <p> Phone: (215) 790-2500<br/> Directions: <a href="https://maps.google.com?daddr=210+W+Rittenhouse+Sq+%28Walnut+Street%29%2C+Philadelphia%2C+PA+19103" target="_blank">210 W Rittenhouse Sq (Walnut Street), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.therittenhousespaclub.com">http://www.therittenhousespaclub.com</a> </p> </div> </div>'}, {'lat': 39.939137076872285, 'lng': -75.14969331618147, 'name': 'The Hungry Pigeon', 'content': '<div id="content"> <h1>The Hungry Pigeon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/hungry__pigeon">@hungry__pigeon</a>: Mmm...caffeine. 😴 Good morning Philly! Come and get it! \U0001f950🍳\U0001f953#mondaymotivation #openinphl @ Hungry… https://t.co/ojUPdaOeHK</p> <p style="font-size: 10px;">Mon Dec 04 12:32 | <a target="_blank" href="https://twitter.com/statuses/937660779565740032">Read on Twitter</a></p> <hr> <p> Phone: (215) 278-2736<br/> Directions: <a href="https://maps.google.com?daddr=743+S+4th+St+%28at+Fitzwater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">743 S 4th St (at Fitzwater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.hungrypigeon.com">http://www.hungrypigeon.com</a> </p> </div> </div>'}];

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