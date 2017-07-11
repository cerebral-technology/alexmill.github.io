
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Weekend Line-up at #voyeurnightclub #openinPHL https://t.co/eH79dlUILS #hot #nightclubbing #sexyAF https://t.co/EIQSLMsXMw</p> <p style="font-size: 10px;">Fri Jul 07 20:47 | <a target="_blank" href="https://twitter.com/statuses/883427358023266305">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lng': -75.16172330266902, 'lat': 39.948394683746855}, {'content': '<div id="content"> <h1>Good Spoon Soupery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GoodSpoon">@GoodSpoon</a>: Hope everyone had a fab holiday! We are back today with new treats and old faves! #openinphl… https://t.co/poqscsUg0G</p> <p style="font-size: 10px;">Wed Jul 05 15:35 | <a target="_blank" href="https://twitter.com/statuses/882623908331098115">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1400+N+Front+St%2C+Philadelphia%2C+PA+19122" target="_blank">1400 N Front St, Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="http://www.goodspoonfoods.com">http://www.goodspoonfoods.com</a> </p> </div> </div>', 'name': 'Good Spoon Soupery', 'lng': -75.13542052725909, 'lat': 39.971977955281794}, {'content': '<div id="content"> <h1>Watkins Drinkery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WatkinsDrinkery">@WatkinsDrinkery</a>: We\'re here to help u celebrate! Kitchen til 1, bar til 2! &amp; #happyhour til 7! #happy4th #happyhour #southphilly… https://t.co/udyuDBdpuJ</p> <p style="font-size: 10px;">Tue Jul 04 22:03 | <a target="_blank" href="https://twitter.com/statuses/882359207110078464">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-0175<br/> Directions: <a href="https://maps.google.com?daddr=1712+S+10th+St%2C+Philadelphia%2C+PA+19148" target="_blank">1712 S 10th St, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://watkinsdrinkery.com">http://watkinsdrinkery.com</a> </p> </div> </div>', 'name': 'Watkins Drinkery', 'lng': -75.162028, 'lat': 39.928009}, {'content': '<div id="content"> <h1>Snap Custom Pizza</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SnapCustomPizza">@SnapCustomPizza</a>: 🇺🇸Happy 4th of July!🇺🇸 We\'re open until 8 in Center City, Exton, Rosemont, and Ardmore. Closed in Newark.… https://t.co/OwVleirL6I</p> <p style="font-size: 10px;">Tue Jul 04 19:26 | <a target="_blank" href="https://twitter.com/statuses/882319678932217860">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1504+Sansom+St%2C+Philadelphia%2C+PA+19102" target="_blank">1504 Sansom St, Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://snapcustompizza.com">http://snapcustompizza.com</a> </p> </div> </div>', 'name': 'Snap Custom Pizza', 'lng': -75.16609527109597, 'lat': 39.950452400599886}, {'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: Forgot something? We\'re open! https://t.co/TJmhhrRXkX #openinphl https://t.co/IBgMvPIErH</p> <p style="font-size: 10px;">Tue Jul 04 18:15 | <a target="_blank" href="https://twitter.com/statuses/882301762849452034">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'name': 'Mariposa Food Co-op', 'lng': -75.22062916994227, 'lat': 39.94819089608984}, {'content': '<div id="content"> <h1>P\'unk Burger</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/punk_burger">@punk_burger</a>: Even Uncle Sam can\'t resist a P\'unk Burger! Happy Independence Day - we are open regular hours today #openinphl</p> <p style="font-size: 10px;">Tue Jul 04 18:12 | <a target="_blank" href="https://twitter.com/statuses/882300999007948800">Read on Twitter</a></p> <hr> <p> Phone: (215) 468-7865<br/> Directions: <a href="https://maps.google.com?daddr=1823+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1823 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://punkburger.com">http://punkburger.com</a> </p> </div> </div>', 'name': "P'unk Burger", 'lng': -75.16639709472656, 'lat': 39.927246626315274}, {'content': '<div id="content"> <h1>SliCE</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SliCEpa">@SliCEpa</a>: Happy Independence Day Philly! We are #openinphl reg hours today in Fishtown, Rittenhouse and South Philly #dinein… https://t.co/m728JwZU7K</p> <p style="font-size: 10px;">Tue Jul 04 18:08 | <a target="_blank" href="https://twitter.com/statuses/882299974586945536">Read on Twitter</a></p> <hr> <p> Phone: (215) 557-9299<br/> Directions: <a href="https://maps.google.com?daddr=1740+Sansom+St+%2818th+street%29%2C+Philadelphia%2C+PA+19103" target="_blank">1740 Sansom St (18th street), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.slicepa.com">http://www.slicepa.com</a> </p> </div> </div>', 'name': 'SliCE', 'lng': -75.1701475, 'lat': 39.950984999999996}, {'content': '<div id="content"> <h1>Dim Sum House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/dimsumphilly">@dimsumphilly</a>: Happy #july4thphilly we are open today with all of your soup dumpling favorites - come see us in UCity! #openinphl https://t.co/vrnxUZEnsU</p> <p style="font-size: 10px;">Tue Jul 04 18:01 | <a target="_blank" href="https://twitter.com/statuses/882298323696222211">Read on Twitter</a></p> <hr> <p> Phone: (215) 921-5377<br/> Directions: <a href="https://maps.google.com?daddr=3939+Chestnut+St+Fl+2+%2840th+and+Chestnut%29%2C+Philadelphia%2C+PA+19104" target="_blank">3939 Chestnut St Fl 2 (40th and Chestnut), Philadelphia, PA 19104</a><br/> Website: <a target="_blank" href="http://www.dimsum.house">http://www.dimsum.house</a> </p> </div> </div>', 'name': 'Dim Sum House', 'lng': -75.201831, 'lat': 39.955674}];

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