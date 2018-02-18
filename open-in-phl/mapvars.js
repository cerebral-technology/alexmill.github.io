
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.95223224023609, 'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: We are #OpenInPHL tonight @butcherbarphl... in fact... the kitchen will be open an EXTRA hour… https://t.co/bItgiMdIVp</p> <p style="font-size: 10px;">Sun Feb 18 17:15 | <a target="_blank" href="https://twitter.com/statuses/965273659077222401">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'name': 'Butcher Bar', 'lng': -75.17487696250731}, {'lat': 39.96531090100131, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: we are #OpeninPHL all #PresidentsDayWeekend - stop in for today\'s #SundayBrunch Special: Breakfast Tacos with pork… https://t.co/W4iZZvoCou</p> <p style="font-size: 10px;">Sun Feb 18 16:47 | <a target="_blank" href="https://twitter.com/statuses/965266607835623426">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lng': -75.17252802654721}, {'lat': 39.95138337811553, 'content': '<div id="content"> <h1>ComedySportz</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/cszphilly">@cszphilly</a>: Snow problems? No problem! ComedySportz is #OpeninPHL tonight! 7:30 and 10PM. BYOB. Tickets ----&gt;… https://t.co/mx7eF7RA1u</p> <p style="font-size: 10px;">Sat Feb 17 20:00 | <a target="_blank" href="https://twitter.com/statuses/964952604475379713">Read on Twitter</a></p> <hr> <p> Phone: (877) 985-2844<br/> Directions: <a href="https://maps.google.com?daddr=2030+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">2030 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.comedysportzphilly.com">http://www.comedysportzphilly.com</a> </p> </div> </div>', 'name': 'ComedySportz', 'lng': -75.17462751555908}];

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