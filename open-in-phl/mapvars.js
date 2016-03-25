
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>BRÜ Craft & Wurst</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BruPhilly">@BruPhilly</a>: &amp;Just a heads up we will be open regular ours 11-2 all weekend long ! #openinphl #bruphilly</p> <p style="font-size: 10px;">Fri Mar 25 17:33 | <a target="_blank" href="https://twitter.com/statuses/713418541156798464">Read on Twitter</a></p> <hr> <p> Phone: (215) 800-1079<br/> Directions: <a href="https://maps.google.com?daddr=1318+Chestnut+St+%28at+Drury+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1318 Chestnut St (at Drury St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.bruphilly.com">http://www.bruphilly.com</a> </p> </div> </div>', 'lng': -75.16255552506875, 'lat': 39.950569972573604, 'name': 'BRÜ Craft & Wurst'}, {'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: We\'re open regular this weekend, 8am-10pm daily #openinphl</p> <p style="font-size: 10px;">Fri Mar 25 13:15 | <a target="_blank" href="https://twitter.com/statuses/713353602627211264">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'lng': -75.22062916994227, 'lat': 39.94819089608984, 'name': 'Mariposa Food Co-op'}, {'content': '<div id="content"> <h1>honeygrow</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/honeygrow">@honeygrow</a>: #hg16thSt is finally #OpenInPHL. See you at 11, #Philly! 🍴🍜💚 #honeygrow #honesteating #growinglocal https://t.co/8HxfttHI65</p> <p style="font-size: 10px;">Thu Mar 24 14:14 | <a target="_blank" href="https://twitter.com/statuses/713005951704543232">Read on Twitter</a></p> <hr> <p> Phone: (215) 279-7724<br/> Directions: <a href="https://maps.google.com?daddr=110+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">110 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.honeygrow.com">http://www.honeygrow.com</a> </p> </div> </div>', 'lng': -75.16730936851067, 'lat': 39.95076920973739, 'name': 'honeygrow'}, {'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: We will be #OpenInPHL @vargabar on Easter Sunday our regular hours! Outside seating open too!… https://t.co/wo47bfrjHv</p> <p style="font-size: 10px;">Tue Mar 22 18:44 | <a target="_blank" href="https://twitter.com/statuses/712349196829888516">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lng': -75.15789844306211, 'lat': 39.94620097040777, 'name': 'Varga Bar'}];

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