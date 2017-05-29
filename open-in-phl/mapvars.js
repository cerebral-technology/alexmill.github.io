
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'ROOT restaurant + wine bar', 'content': '<div id="content"> <h1>ROOT restaurant + wine bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ROOTrestaurant">@ROOTrestaurant</a>: Happy Memorial Day everyone! We\'re open at 5, happy hour 5-7. Come on by! #openinphl #fishtown_philly #rootphilly https://t.co/rxD5saq2Qt</p> <p style="font-size: 10px;">Mon May 29 17:20 | <a target="_blank" href="https://twitter.com/statuses/869242046808281089">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1206+Frankford+Ave+%28at+W+Girard+Ave%29%2C+Philadelphia%2C+PA+19125" target="_blank">1206 Frankford Ave (at W Girard Ave), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://rootrestaurant.com">http://rootrestaurant.com</a> </p> </div> </div>', 'lat': 39.969132, 'lng': -75.134629}, {'name': 'Philadelphia Runner', 'content': '<div id="content"> <h1>Philadelphia Runner</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhillyRun">@PhillyRun</a>: Our shops are open today until 5PM! Stop by and check out our in store specials including BOGO sale apparel. #shoplocal #openinphl</p> <p style="font-size: 10px;">Mon May 29 17:15 | <a target="_blank" href="https://twitter.com/statuses/869240701242007552">Read on Twitter</a></p> <hr> <p> Phone: (215) 972-8333<br/> Directions: <a href="https://maps.google.com?daddr=1601+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1601 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.philadelphiarunner.com">http://www.philadelphiarunner.com</a> </p> </div> </div>', 'lat': 39.950623, 'lng': -75.167387}, {'name': 'Brigantessa', 'content': '<div id="content"> <h1>Brigantessa</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Brigantessa_EPA">@Brigantessa_EPA</a>: We are #OpenInPHL tonight!</p> <p style="font-size: 10px;">Mon May 29 17:07 | <a target="_blank" href="https://twitter.com/statuses/869238899318681600">Read on Twitter</a></p> <hr> <p> Phone: (267) 318-7341<br/> Directions: <a href="https://maps.google.com?daddr=1520+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19147" target="_blank">1520 E Passyunk Ave, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://brigantessaphila.com">http://brigantessaphila.com</a> </p> </div> </div>', 'lat': 39.93048088636384, 'lng': -75.16283483159866}, {'name': 'Taproom on 19th', 'content': '<div id="content"> <h1>Taproom on 19th</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TaproomOn19th">@TaproomOn19th</a>: Bacon Wrapped Burnt Ends! #OpenInPhl #tr19 @greenmeadowfarmpa bacon! #MemorialDay17 https://t.co/kHLI87IrF6</p> <p style="font-size: 10px;">Mon May 29 16:33 | <a target="_blank" href="https://twitter.com/statuses/869230235111370752">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7817<br/> Directions: <a href="https://maps.google.com?daddr=2400+S+19th+St+%28Ritner%29%2C+Philadelphia%2C+PA+19145" target="_blank">2400 S 19th St (Ritner), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.taproomon19th.com">http://www.taproomon19th.com</a> </p> </div> </div>', 'lat': 39.92167188213936, 'lng': -75.17857779638472}, {'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: we are #OpenInPHL #MemorialDay Monday. Join us for Lunch &amp; #Brunch Specials. Raise a toast to today with… https://t.co/2VKHldEK2c</p> <p style="font-size: 10px;">Mon May 29 16:26 | <a target="_blank" href="https://twitter.com/statuses/869228470638977024">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682, 'lng': -75.17257690429688}, {'name': 'Tattooed Mom', 'content': '<div id="content"> <h1>Tattooed Mom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Tmoms">@Tmoms</a>: If your beach day gets bummed out or your BBQ gets rained out we are #OpenInPHL https://t.co/BDUEcWhXDm</p> <p style="font-size: 10px;">Mon May 29 16:20 | <a target="_blank" href="https://twitter.com/statuses/869227050913210368">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9880<br/> Directions: <a href="https://maps.google.com?daddr=530+South+St+%28btw+5th+and+6th%29%2C+Philadelphia%2C+PA+19147" target="_blank">530 South St (btw 5th and 6th), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://tattooedmomphilly.com">http://tattooedmomphilly.com</a> </p> </div> </div>', 'lat': 39.94196372971302, 'lng': -75.15185030085395}, {'name': 'American Sardine Bar', 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: Today at ASB: We\'re doing picnic plates with $3 @BrooklynBrewery American Ale cans. #OpenInPHL https://t.co/nEx4aeRegx</p> <p style="font-size: 10px;">Mon May 29 16:01 | <a target="_blank" href="https://twitter.com/statuses/869222121137999872">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>', 'lat': 39.936654, 'lng': -75.17352056073281}, {'name': 'Good Dog Bar & Restaurant', 'content': '<div id="content"> <h1>Good Dog Bar & Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gooddogbar">@gooddogbar</a>: Just an #FYI... We\'re #OpenInPHL! #HappyMemorialDay</p> <p style="font-size: 10px;">Mon May 29 15:53 | <a target="_blank" href="https://twitter.com/statuses/869220064452648961">Read on Twitter</a></p> <hr> <p> Phone: (215) 985-9600<br/> Directions: <a href="https://maps.google.com?daddr=224+S+15th+St+%28btwn+Walnut+St.+%26+Locust+St.%29%2C+Philadelphia%2C+PA+19102" target="_blank">224 S 15th St (btwn Walnut St. & Locust St.), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://gooddogbar.com/">http://gooddogbar.com/</a> </p> </div> </div>', 'lat': 39.94876539524823, 'lng': -75.16623213887215}, {'name': 'New Wave Cafe', 'content': '<div id="content"> <h1>New Wave Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thenewwavecafe">@thenewwavecafe</a>: We are #OpenInPHL, as always 😎</p> <p style="font-size: 10px;">Mon May 29 14:52 | <a target="_blank" href="https://twitter.com/statuses/869204786989715456">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-8484<br/> Directions: <a href="https://maps.google.com?daddr=784+S+3rd+St+%28at+Catherine+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">784 S 3rd St (at Catherine St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.newwavecafe.com">http://www.newwavecafe.com</a> </p> </div> </div>', 'lat': 39.93800531419151, 'lng': -75.14841824769974}, {'name': 'Independence Seaport Museum', 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: Please note the Museum is OPEN and we hope you will come visit today. #MemorialDay2017 #OpenInPHL</p> <p style="font-size: 10px;">Mon May 29 14:00 | <a target="_blank" href="https://twitter.com/statuses/869191601330966529">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lat': 39.94621074855531, 'lng': -75.14042033081468}, {'name': "P'unk Burger", 'content': '<div id="content"> <h1>P\'unk Burger</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/punk_burger">@punk_burger</a>: Don\'t feel like cooking? We\'ve got plenty of burgers and sides plus you don\'t have to worry about what to bring.… https://t.co/Wdmhd1hFXN</p> <p style="font-size: 10px;">Mon May 29 12:15 | <a target="_blank" href="https://twitter.com/statuses/869165228419952640">Read on Twitter</a></p> <hr> <p> Phone: (215) 468-7865<br/> Directions: <a href="https://maps.google.com?daddr=1823+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1823 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://punkburger.com">http://punkburger.com</a> </p> </div> </div>', 'lat': 39.927246626315274, 'lng': -75.16639709472656}, {'name': 'Green Aisle Grocery', 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: Happy Memorial Day Weekend! We are #OpenInPHL regular hours today (12-8 Passyunk, Gray; 2-9… https://t.co/pq0rQo0S3w</p> <p style="font-size: 10px;">Mon May 29 12:02 | <a target="_blank" href="https://twitter.com/statuses/869161922377244672">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1411<br/> Directions: <a href="https://maps.google.com?daddr=1618+E+Passyunk+Ave+%28btwn+11th+%26+12th+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1618 E Passyunk Ave (btwn 11th & 12th St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lat': 39.929342, 'lng': -75.16405285144641}, {'name': 'Mariposa Food Co-op', 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: We are open 8 a.m. - 10 p.m. today! #openinPHL</p> <p style="font-size: 10px;">Mon May 29 11:50 | <a target="_blank" href="https://twitter.com/statuses/869158917921796096">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'lat': 39.94819089608984, 'lng': -75.22062916994227}, {'name': 'South Philadelphia Tap Room', 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: We\'re doing brunch tomorrow, 11am - 3pm. #OpenInPHL https://t.co/VIQ7kw3IpU</p> <p style="font-size: 10px;">Mon May 29 01:05 | <a target="_blank" href="https://twitter.com/statuses/868996589016285184">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'lat': 39.927221, 'lng': -75.1713124}, {'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/dahGisrXuD</p> <p style="font-size: 10px;">Sun May 28 17:05 | <a target="_blank" href="https://twitter.com/statuses/868875870408200192">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lat': 39.944911, 'lng': -75.16067}, {'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #memorialdayweekend #brunch #bloodymarybar #OpeninPHL #memorialday #godbless #letsnotforget @… https://t.co/oJKn5r3gh2</p> <p style="font-size: 10px;">Sun May 28 15:01 | <a target="_blank" href="https://twitter.com/statuses/868844767068782592">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'lat': 39.96750024480156, 'lng': -75.17528057098389}, {'name': 'Newbold Brew', 'content': '<div id="content"> <h1>Newbold Brew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/NewboldBrew">@NewboldBrew</a>: Stop in this Monday to get a FREE Brew growler with your purchase of any @NoddingHeadBrew on tap. #OpenInPHL… https://t.co/O9J4lqRnQB</p> <p style="font-size: 10px;">Sat May 27 23:55 | <a target="_blank" href="https://twitter.com/statuses/868616605743415296">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-5177<br/> Directions: <a href="https://maps.google.com?daddr=1900+S+15th+St+%28Mifflin%29%2C+Philadelphia%2C+PA+19145" target="_blank">1900 S 15th St (Mifflin), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.newboldbrew.com">http://www.newboldbrew.com</a> </p> </div> </div>', 'lat': 39.926971, 'lng': -75.170942}, {'name': 'Watkins Drinkery', 'content': '<div id="content"> <h1>Watkins Drinkery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WatkinsDrinkery">@WatkinsDrinkery</a>: We\'re open &amp; here to help you celebrate all wknd long! Kitchen open til 1am daily, happy hour every day 5-7.… https://t.co/Z4BpAeFQTZ</p> <p style="font-size: 10px;">Fri May 26 21:29 | <a target="_blank" href="https://twitter.com/statuses/868217440706101248">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-0175<br/> Directions: <a href="https://maps.google.com?daddr=1712+S+10th+St%2C+Philadelphia%2C+PA+19148" target="_blank">1712 S 10th St, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://watkinsdrinkery.com">http://watkinsdrinkery.com</a> </p> </div> </div>', 'lat': 39.928009, 'lng': -75.162028}, {'name': 'Brulee Catering', 'content': '<div id="content"> <h1>Brulee Catering</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Brulee_Catering">@Brulee_Catering</a>: New menu item tonight @FreeLibrary is the Provolone and Broccoli Rabe Sausage Sandwich with caramelized onions!… https://t.co/HGCkY9kM9I</p> <p style="font-size: 10px;">Thu May 25 21:39 | <a target="_blank" href="https://twitter.com/statuses/867857692249010176">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1406+S+Front+St%2C+Philadelphia%2C+PA+19147" target="_blank">1406 S Front St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.brulee-catering.com/">http://www.brulee-catering.com/</a> </p> </div> </div>', 'lat': 39.929952, 'lng': -75.146603}];

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