
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17352056073281, 'lat': 39.936654, 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: Come get fancy with us and @AlmanacBeer tomorrow! #PBW2016 #PhillyBrunch #OpenInPHL https://t.co/gHo0s1KHWi</p> <p style="font-size: 10px;">Sun Jun 05 03:35 | <a target="_blank" href="https://twitter.com/statuses/739299488112771072">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>', 'name': 'American Sardine Bar'}, {'lng': -75.15403747558594, 'lat': 39.94175842522628, 'content': '<div id="content"> <h1>The Good King Tavern</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TGKtavern">@TGKtavern</a>: Come on by until then! #openinphl @ The Good King Tavern https://t.co/O0JA0Fco6U</p> <p style="font-size: 10px;">Mon May 30 20:44 | <a target="_blank" href="https://twitter.com/statuses/737384172348657664">Read on Twitter</a></p> <hr> <p> Phone: (215) 625-3700<br/> Directions: <a href="https://maps.google.com?daddr=614+S+7th+St+%28at+Kater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">614 S 7th St (at Kater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://thegoodkingtavern.com">http://thegoodkingtavern.com</a> </p> </div> </div>', 'name': 'The Good King Tavern'}, {'lng': -75.1713124, 'lat': 39.927221, 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: just a heads up, we are totally open tonight til 2am, kitchen til 1am #openinphl</p> <p style="font-size: 10px;">Mon May 30 20:06 | <a target="_blank" href="https://twitter.com/statuses/737374575974027264">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'name': 'South Philadelphia Tap Room'}, {'lng': -75.15789844306211, 'lat': 39.94620097040777, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @VargaBar is #OpenInPHL today. Normal business hours... Open at 4pm, kitchen til 1am, bar til 2am. Happy hour is still 4-6pm! See you soon!</p> <p style="font-size: 10px;">Mon May 30 19:36 | <a target="_blank" href="https://twitter.com/statuses/737367053745721344">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar'}, {'lng': -75.16738414764404, 'lat': 39.9267365184525, 'content': '<div id="content"> <h1>South Philly Comics</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/S_PhillyComics">@S_PhillyComics</a>: Open till 9pm today! #comics #southphilly #eastpassyunk #openinphl #memorialday https://t.co/crfhPQRsNq https://t.co/xKOunw6AN4</p> <p style="font-size: 10px;">Mon May 30 16:19 | <a target="_blank" href="https://twitter.com/statuses/737317536316981252">Read on Twitter</a></p> <hr> <p> Phone: (267) 318-7855<br/> Directions: <a href="https://maps.google.com?daddr=1840+E+Passyunk+Ave+%28Mifflin+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1840 E Passyunk Ave (Mifflin St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.southphillycomics.com/">http://www.southphillycomics.com/</a> </p> </div> </div>', 'name': 'South Philly Comics'}, {'lng': -75.14076808776653, 'lat': 39.96426076900693, 'content': '<div id="content"> <h1>Little Baby\'s Ice Cream</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleBabysIC">@LittleBabysIC</a>: 🇺🇸MEMDAY2k16 FLAVZ #WHQ2311 #LBICmenus #openinPHL https://t.co/KorwT8dbXG</p> <p style="font-size: 10px;">Mon May 30 16:00 | <a target="_blank" href="https://twitter.com/statuses/737312686803976193">Read on Twitter</a></p> <hr> <p> Phone: (301) 801-2234<br/> Directions: <a href="https://maps.google.com?daddr=2313+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">2313 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://littlebabysicecream.com">http://littlebabysicecream.com</a> </p> </div> </div>', 'name': "Little Baby's Ice Cream"}, {'lng': -75.166373, 'lat': 39.95108, 'content': '<div id="content"> <h1>Wok Street</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/wok_street">@wok_street</a>: Happy #MemorialDay! Add something a little different to your backyard BBQ? Entire menu available TO-GO! #OpeninPHL https://t.co/WHYKlupGmZ</p> <p style="font-size: 10px;">Mon May 30 15:56 | <a target="_blank" href="https://twitter.com/statuses/737311635375820800">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1518+Chestnut+St+%2815th+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">1518 Chestnut St (15th St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://wokst.com/">http://wokst.com/</a> </p> </div> </div>', 'name': 'Wok Street'}, {'lng': -75.16656875610352, 'lat': 39.92699980040468, 'content': '<div id="content"> <h1>Occasionette</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/occasionette">@occasionette</a>: We are #OPENINPHL all day and stocked with @DrinkBittermilk mixers and a billion cute gifts and things! Happy Memorial Day!</p> <p style="font-size: 10px;">Mon May 30 15:53 | <a target="_blank" href="https://twitter.com/statuses/737310950701797385">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1704<br/> Directions: <a href="https://maps.google.com?daddr=1825+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1825 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.occasionette.com">http://www.occasionette.com</a> </p> </div> </div>', 'name': 'Occasionette'}, {'lng': -75.16405285144641, 'lat': 39.929342, 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: All shops #OPENINPHL today regular hours. Meats, bread, condiments, and ice cream...we got \'em all! Happy Memorial Day!</p> <p style="font-size: 10px;">Mon May 30 15:37 | <a target="_blank" href="https://twitter.com/statuses/737306922441904129">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1411<br/> Directions: <a href="https://maps.google.com?daddr=1618+E+Passyunk+Ave+%28btwn+11th+%26+12th+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1618 E Passyunk Ave (btwn 11th & 12th St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Green Aisle Grocery'}, {'lng': -75.15185030085395, 'lat': 39.94196372971302, 'content': '<div id="content"> <h1>Tattooed Mom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Tmoms">@Tmoms</a>: bbq rained out? we got you covered with all kinds of indoor fun ✨\U0001f37e🌞 #OPENINPHL https://t.co/pMn5aMKuj2</p> <p style="font-size: 10px;">Mon May 30 15:29 | <a target="_blank" href="https://twitter.com/statuses/737304955770540034">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9880<br/> Directions: <a href="https://maps.google.com?daddr=530+South+St+%28btw+5th+and+6th%29%2C+Philadelphia%2C+PA+19147" target="_blank">530 South St (btw 5th and 6th), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://tattooedmomphilly.com">http://tattooedmomphilly.com</a> </p> </div> </div>', 'name': 'Tattooed Mom'}, {'lng': -75.167453, 'lat': 39.95056, 'content': '<div id="content"> <h1>Marathon Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/EatMarathon">@EatMarathon</a>: We are #OpenInPHL today at our Sansom and Spruce locations. Brunch service until 3, dinner until 10.</p> <p style="font-size: 10px;">Mon May 30 15:20 | <a target="_blank" href="https://twitter.com/statuses/737302553810079745">Read on Twitter</a></p> <hr> <p> Phone: (215) 569-3278<br/> Directions: <a href="https://maps.google.com?daddr=121+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">121 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.eatmarathon.com">http://www.eatmarathon.com</a> </p> </div> </div>', 'name': 'Marathon Grill'}, {'lng': -75.13168624908334, 'lat': 39.96978415108942, 'content': '<div id="content"> <h1>Girard brassiere & bruncherie</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GirardOnGirard">@GirardOnGirard</a>: Don\'t forget, we are #openinPHL today, #brunch from 9-3! #fishtown #philly #mdw https://t.co/jYDxegM4bg</p> <p style="font-size: 10px;">Mon May 30 13:37 | <a target="_blank" href="https://twitter.com/statuses/737276854982303744">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-2486<br/> Directions: <a href="https://maps.google.com?daddr=300+E+Girard+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">300 E Girard Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.girardongirard.com">http://www.girardongirard.com</a> </p> </div> </div>', 'name': 'Girard brassiere & bruncherie'}, {'lng': -75.14364132896888, 'lat': 39.94840032870047, 'content': '<div id="content"> <h1>2nd Story Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/2ndStoryBrewing">@2ndStoryBrewing</a>: We are #openinphl regular hours today, 11:30-midnight. #memorialday https://t.co/xTbGYZwyyQ</p> <p style="font-size: 10px;">Mon May 30 13:35 | <a target="_blank" href="https://twitter.com/statuses/737276206329004033">Read on Twitter</a></p> <hr> <p> Phone: (267) 314-5770<br/> Directions: <a href="https://maps.google.com?daddr=117+Chestnut+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">117 Chestnut St (at 2nd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://2ndstorybrewing.com">http://2ndstorybrewing.com</a> </p> </div> </div>', 'name': '2nd Story Brewing Company'}, {'lng': -75.17163276672363, 'lat': 39.96088889385078, 'content': '<div id="content"> <h1>Gyu-Kaku Japanese BBQ</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/gyukaku_philly">@gyukaku_philly</a>: We’re open today so come on in and enjoy! #japanesebbq #value #beyourownchef #openinPHL https://t.co/BsbgXT3315</p> <p style="font-size: 10px;">Mon May 30 13:30 | <a target="_blank" href="https://twitter.com/statuses/737275069186068480">Read on Twitter</a></p> <hr> <p> Phone: (267) 603-9482<br/> Directions: <a href="https://maps.google.com?daddr=1901+Callowhill+St%2C+Philadelphia%2C+PA+19130" target="_blank">1901 Callowhill St, Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.gyu-kaku.com">http://www.gyu-kaku.com</a> </p> </div> </div>', 'name': 'Gyu-Kaku Japanese BBQ'}, {'lng': -75.172361, 'lat': 39.967256, 'content': '<div id="content"> <h1>OCF Coffee House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/OCFCoffee">@OCFCoffee</a>: Happy Memorial Day! We are #OPENINPHL at all five of our locations today. https://t.co/0qtvXz11GG</p> <p style="font-size: 10px;">Mon May 30 13:12 | <a target="_blank" href="https://twitter.com/statuses/737270523487518720">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2100+Fairmount+Ave+%28at+21st+St.%29%2C+Philadelphia%2C+PA+19130" target="_blank">2100 Fairmount Ave (at 21st St.), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.ocfcoffeehouse.com">http://www.ocfcoffeehouse.com</a> </p> </div> </div>', 'name': 'OCF Coffee House'}, {'lng': -75.22062916994227, 'lat': 39.94819089608984, 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: We\'re open normal hours today, 8am-10pm #openinphl</p> <p style="font-size: 10px;">Mon May 30 12:50 | <a target="_blank" href="https://twitter.com/statuses/737264883243331584">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'name': 'Mariposa Food Co-op'}, {'lng': -75.167387, 'lat': 39.950623, 'content': '<div id="content"> <h1>Philadelphia Runner</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhillyRun">@PhillyRun</a>: We are #OPENINPHL today. Memorial Day Sale goes until 4pm when we close up a little early.</p> <p style="font-size: 10px;">Mon May 30 12:33 | <a target="_blank" href="https://twitter.com/statuses/737260637106114561">Read on Twitter</a></p> <hr> <p> Phone: (215) 972-8333<br/> Directions: <a href="https://maps.google.com?daddr=1601+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1601 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.philadelphiarunner.com">http://www.philadelphiarunner.com</a> </p> </div> </div>', 'name': 'Philadelphia Runner'}, {'lng': -75.17261981964111, 'lat': 39.96838828801233, 'content': '<div id="content"> <h1>Eastern State Penitentiary</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/easternstate">@easternstate</a>: Eastern State Penitentiary is OPEN today, 10 am to 5 pm. Guided &amp; audio tours available! https://t.co/Qt5cLVxNif #MDW #MDW2016 #OpenInPHL</p> <p style="font-size: 10px;">Mon May 30 11:25 | <a target="_blank" href="https://twitter.com/statuses/737243463704580096">Read on Twitter</a></p> <hr> <p> Phone: (215) 236-3300<br/> Directions: <a href="https://maps.google.com?daddr=2027+Fairmount+Ave+%28btwn+Corinthian+Ave+%26+22nd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2027 Fairmount Ave (btwn Corinthian Ave & 22nd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.easternstate.org">http://www.easternstate.org</a> </p> </div> </div>', 'name': 'Eastern State Penitentiary'}];

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