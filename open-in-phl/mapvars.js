
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16172330266902, 'lat': 39.948394683746855, 'name': 'Voyeur', 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #THURDSAYNIGHT #DJGHOST spins tonight on the mainfloor with #DJMIKENYCE in the lounge! Doors open at Midnight. Gues… https://t.co/dP9utSM5Jg</p> <p style="font-size: 10px;">Thu May 17 21:44 | <a target="_blank" href="https://twitter.com/statuses/997231368626233354">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>'}, {'lng': -75.17252802654721, 'lat': 39.96531090100131, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #SundayBrunch @SusanGKomen Race #MothersDay #MothersDayWeekend #OpeninPHL #CraftBeer Cheers - pop by https://t.co/NCRO2JPlGo</p> <p style="font-size: 10px;">Sun May 13 14:13 | <a target="_blank" href="https://twitter.com/statuses/995668427464433664">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}, {'lng': -75.16348648828463, 'lat': 39.929794448959385, 'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room', 'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: The Local Libations Garden is happening today, Saturday, May 12th from noon til 6pm at @schmidtscommons. Come pick… https://t.co/SAMT4rEISi</p> <p style="font-size: 10px;">Sat May 12 15:51 | <a target="_blank" href="https://twitter.com/statuses/995330519305998338">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>'}];

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