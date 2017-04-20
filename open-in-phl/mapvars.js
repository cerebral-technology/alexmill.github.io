
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.953140176691775, 'name': 'Sonesta Philadelphia', 'content': '<div id="content"> <h1>Sonesta Philadelphia</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SonestaPhilly">@SonestaPhilly</a>: #DraftDeals for #NFLdraft in #ARTBAR: Any Draft &amp; 2 Hot Dogs for $7. Burger and a Draft $10. Salsa Chips &amp; Guacamol… https://t.co/4LRurQmf7w</p> <p style="font-size: 10px;">Thu Apr 20 14:20 | <a target="_blank" href="https://twitter.com/statuses/855063512359555072">Read on Twitter</a></p> <hr> <p> Phone: (215) 561-7500<br/> Directions: <a href="https://maps.google.com?daddr=1800+Market+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1800 Market St (at 18th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.sonesta.com/philadelphia">http://www.sonesta.com/philadelphia</a> </p> </div> </div>', 'lng': -75.17009092719478}, {'lat': 39.965362315682, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: cold outside again?? just the thing to take the edge off - @FlyingDog Bloodline (nitro) on tap #OpeninPHL… https://t.co/xiO831RhKF</p> <p style="font-size: 10px;">Wed Apr 19 21:49 | <a target="_blank" href="https://twitter.com/statuses/854814242326892544">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lng': -75.17257690429688}, {'lat': 39.944911, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/PGMwV8tbJB</p> <p style="font-size: 10px;">Wed Apr 19 19:51 | <a target="_blank" href="https://twitter.com/statuses/854784422842859520">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067}, {'lat': 39.955674, 'name': 'Dim Sum House', 'content': '<div id="content"> <h1>Dim Sum House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/dimsumphilly">@dimsumphilly</a>: What a beautiful day to enjoy dim sum in University City! We are #openinphl regular hours today. https://t.co/zXxTvKiqRW</p> <p style="font-size: 10px;">Sun Apr 16 16:21 | <a target="_blank" href="https://twitter.com/statuses/853644435594387456">Read on Twitter</a></p> <hr> <p> Phone: (215) 921-5377<br/> Directions: <a href="https://maps.google.com?daddr=3939+Chestnut+St+Fl+2+%2840th+and+Chestnut%29%2C+Philadelphia%2C+PA+19104" target="_blank">3939 Chestnut St Fl 2 (40th and Chestnut), Philadelphia, PA 19104</a><br/> Website: <a target="_blank" href="http://www.dimsum.house">http://www.dimsum.house</a> </p> </div> </div>', 'lng': -75.201831}, {'lat': 39.94141718520706, 'name': 'Rally', 'content': '<div id="content"> <h1>Rally</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/heyrally">@heyrally</a>: 🐰Open regular hours today!💐 Serving cold beverages all day! #openinphl #happyeaster https://t.co/uoZ0PU1s2p</p> <p style="font-size: 10px;">Sun Apr 16 14:59 | <a target="_blank" href="https://twitter.com/statuses/853623933098237952">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-3657<br/> Directions: <a href="https://maps.google.com?daddr=701+S+7th+St+%28Bainbridge+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">701 S 7th St (Bainbridge St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.heyrally.com">http://www.heyrally.com</a> </p> </div> </div>', 'lng': -75.15386827424024}, {'lat': 39.94620097040777, 'name': 'Varga Bar', 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @vargabar is #OpenInPHL today! Brunch 11am-3pm, Dinner 3pm-1am... Bar 11am-2am! Outside seating!… https://t.co/aSa2SBKukV</p> <p style="font-size: 10px;">Sun Apr 16 14:29 | <a target="_blank" href="https://twitter.com/statuses/853616220397907969">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lng': -75.15789844306211}, {'lat': 39.952084, 'name': 'Butcher Bar', 'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: @butcherbarphl is #OpenInPHL today! Brunch 10:30am to 2:30pm... dinner from 4pm to 10pm... Bar… https://t.co/4PwIWP0K6t</p> <p style="font-size: 10px;">Sun Apr 16 14:26 | <a target="_blank" href="https://twitter.com/statuses/853615571757404161">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'lng': -75.17483}, {'lat': 39.929342, 'name': 'Green Aisle Grocery', 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: Happy Easter to all those celebrating 🐰 We\'re #OpenInPHL regular hours today, if you\'re in need… https://t.co/pso1i9C1cf</p> <p style="font-size: 10px;">Sun Apr 16 13:07 | <a target="_blank" href="https://twitter.com/statuses/853595802450751488">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1411<br/> Directions: <a href="https://maps.google.com?daddr=1618+E+Passyunk+Ave+%28btwn+11th+%26+12th+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1618 E Passyunk Ave (btwn 11th & 12th St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.16405285144641}, {'lat': 39.948056528790076, 'name': 'Knead Bagels', 'content': '<div id="content"> <h1>Knead Bagels</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/KneadBagels">@KneadBagels</a>: We are #openinphl today for Easter! Stop drooling over this photo of a lavender bagel with… https://t.co/1FHtawOqoY</p> <p style="font-size: 10px;">Sun Apr 16 12:45 | <a target="_blank" href="https://twitter.com/statuses/853590223661416451">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-9920<br/> Directions: <a href="https://maps.google.com?daddr=725+Walnut+at%2C+Philadelphia%2C+PA+19106" target="_blank">725 Walnut at, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://kneadbagels.com">http://kneadbagels.com</a> </p> </div> </div>', 'lng': -75.15370866146846}, {'lat': 39.9270344, 'name': 'tildiestoybox', 'content': '<div id="content"> <h1>tildiestoybox</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/tildiestoybox">@tildiestoybox</a>: Happy Easter! Open 10am-2pm today. Regular hours resume Monday. #easterbasket #eastertoys #eastpassyunk #openinphl https://t.co/r9Zxn9eeMH</p> <p style="font-size: 10px;">Sun Apr 16 12:29 | <a target="_blank" href="https://twitter.com/statuses/853586069366984705">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1829+East+Passyunk+AvePhiladelphia%2C+PA+19148" target="_blank">1829 East Passyunk AvePhiladelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.tildiestoybox.com/">http://www.tildiestoybox.com/</a> </p> </div> </div>', 'lng': -75.1664564}, {'lat': 39.950623, 'name': 'Philadelphia Runner', 'content': '<div id="content"> <h1>Philadelphia Runner</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhillyRun">@PhillyRun</a>: Happy Easter to all those who celebrate! Our Center City shop is #openinphl today from 11 - 4PM. The other shops are closed.</p> <p style="font-size: 10px;">Sun Apr 16 12:01 | <a target="_blank" href="https://twitter.com/statuses/853579087134248961">Read on Twitter</a></p> <hr> <p> Phone: (215) 972-8333<br/> Directions: <a href="https://maps.google.com?daddr=1601+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1601 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.philadelphiarunner.com">http://www.philadelphiarunner.com</a> </p> </div> </div>', 'lng': -75.167387}, {'lat': 39.970529, 'name': 'Kensington Quarters - Restaurant & Butcher', 'content': '<div id="content"> <h1>Kensington Quarters - Restaurant & Butcher</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Kensington_Quar">@Kensington_Quar</a>: Last Call for Happy Hour this week. 5p-7p, patio is #openinphl @ Kensington Quarters https://t.co/xCUWVpPSnX</p> <p style="font-size: 10px;">Fri Apr 14 21:27 | <a target="_blank" href="https://twitter.com/statuses/852996758980493318">Read on Twitter</a></p> <hr> <p> Phone: (267) 314-5086<br/> Directions: <a href="https://maps.google.com?daddr=1310+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1310 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.kensingtonquarters.com">http://www.kensingtonquarters.com</a> </p> </div> </div>', 'lng': -75.134756}, {'lat': 39.948394683746855, 'name': 'Voyeur', 'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: Weekend guest lists are now open for #voyeurnightclub https://t.co/WP8mbHlzdU #voyeurphl #housemusic #openinphl… https://t.co/xiH8O68nUp</p> <p style="font-size: 10px;">Fri Apr 14 15:36 | <a target="_blank" href="https://twitter.com/statuses/852908322709803013">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'lng': -75.16172330266902}];

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