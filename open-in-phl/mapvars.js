
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #SundayBrunch @SusanGKomen Race #MothersDay #MothersDayWeekend #OpeninPHL #CraftBeer Cheers - pop by https://t.co/NCRO2JPlGo</p> <p style="font-size: 10px;">Sun May 13 14:13 | <a target="_blank" href="https://twitter.com/statuses/995668427464433664">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lat': 39.96531090100131, 'lng': -75.17252802654721}, {'content': '<div id="content"> <h1>Manatawny Still Works Craft Spirits Shop & Tasting Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/manatawnysw">@manatawnysw</a>: The Local Libations Garden is happening today, Saturday, May 12th from noon til 6pm at @schmidtscommons. Come pick… https://t.co/SAMT4rEISi</p> <p style="font-size: 10px;">Sat May 12 15:51 | <a target="_blank" href="https://twitter.com/statuses/995330519305998338">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2917<br/> Directions: <a href="https://maps.google.com?daddr=1603+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1603 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://manatawnystillworks.com">http://manatawnystillworks.com</a> </p> </div> </div>', 'name': 'Manatawny Still Works Craft Spirits Shop & Tasting Room', 'lat': 39.929794448959385, 'lng': -75.16348648828463}, {'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: Come get an Alttitude Adjustment! Tonight\'s Wednesday Night Free Beer Tasting is George\'s Altbier. #homebrew… https://t.co/B386RE40Ms</p> <p style="font-size: 10px;">Wed May 09 19:36 | <a target="_blank" href="https://twitter.com/statuses/994299996148203521">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'name': 'Home Sweet Homebrew', 'lat': 39.95133267106301, 'lng': -75.17401059383587}];

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