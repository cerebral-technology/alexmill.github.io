
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.17096870392517, 'lat': 39.96735351323819, 'content': '<div id="content"> <h1>Ali\'s Wagon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AlisWagon">@AlisWagon</a>: We are #openinPHL today💫 Need a cute travel ready gift? We love these shea butter soaps &amp; hand… https://t.co/q7CQsmMnF3</p> <p style="font-size: 10px;">Sun Jan 21 15:32 | <a target="_blank" href="https://twitter.com/statuses/955100735322062853">Read on Twitter</a></p> <hr> <p> Phone: (215) 787-0611<br/> Directions: <a href="https://maps.google.com?daddr=2017+Fairmount+Ave+%2820th+and+Fairmount%29%2C+Philadelphia%2C+PA+19130" target="_blank">2017 Fairmount Ave (20th and Fairmount), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://aliswagon.com">http://aliswagon.com</a> </p> </div> </div>', 'name': "Ali's Wagon"}, {'lng': -75.14019638734368, 'lat': 39.94610247783623, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: We are #OpenInPHL. Come visit the Museum today! https://t.co/pGmjueP98u https://t.co/ar5ywm2Kdg</p> <p style="font-size: 10px;">Sun Jan 21 15:26 | <a target="_blank" href="https://twitter.com/statuses/955099347783507968">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'name': 'Independence Seaport Museum'}, {'lng': -75.16220781624595, 'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: #woodysphilly #woodysphiladelphia #woodysbar #ilovewoodys #openinphl #lgbtq #saturdaynights #nightclubbing… https://t.co/2YeFYIxbXD</p> <p style="font-size: 10px;">Sat Jan 20 18:19 | <a target="_blank" href="https://twitter.com/statuses/954780499922292742">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'name': "Woody's"}, {'lng': -75.162052, 'lat': 39.948952, 'content': '<div id="content"> <h1>globar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/globarphl">@globarphl</a>: #woodysphilly #woodysphiladelphia #woodysbar #ilovewoodys #openinphl #lgbtq #saturdaynights #nightclubbing… https://t.co/sKXePDPbWV</p> <p style="font-size: 10px;">Sat Jan 20 18:19 | <a target="_blank" href="https://twitter.com/statuses/954780416292114433">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.globar.woodysbar.com/">http://www.globar.woodysbar.com/</a> </p> </div> </div>', 'name': 'globar'}, {'lng': -75.17261981964111, 'lat': 39.96838828801233, 'content': '<div id="content"> <h1>Eastern State Penitentiary</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/easternstate">@easternstate</a>: Eastern State isn\'t affected by the government shutdown. We\'re OPEN for tours 10 am to 5 pm today and everyday!… https://t.co/pPJr3JbGzF</p> <p style="font-size: 10px;">Sat Jan 20 14:54 | <a target="_blank" href="https://twitter.com/statuses/954728881726066688">Read on Twitter</a></p> <hr> <p> Phone: (215) 236-3300<br/> Directions: <a href="https://maps.google.com?daddr=2027+Fairmount+Ave+%28btwn+Corinthian+Ave+%26+22nd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2027 Fairmount Ave (btwn Corinthian Ave & 22nd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.easternstate.org">http://www.easternstate.org</a> </p> </div> </div>', 'name': 'Eastern State Penitentiary'}, {'lng': -75.14318630392424, 'lat': 39.949775367107506, 'content': '<div id="content"> <h1>The Gaslight</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GaslightPhilly">@GaslightPhilly</a>: We\'ll miss you in the NFC Championship, Wentz... but that doesn\'t mean we won\'t win!! Catch the game @… https://t.co/Ju6mozqhgH</p> <p style="font-size: 10px;">Wed Jan 17 18:40 | <a target="_blank" href="https://twitter.com/statuses/953698612348940288">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-7691<br/> Directions: <a href="https://maps.google.com?daddr=120+Market+St+%28btwn+2nd+%26+Front+Sts%29%2C+Philadelphia%2C+PA+19106" target="_blank">120 Market St (btwn 2nd & Front Sts), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://thegaslightphilly.com">http://thegaslightphilly.com</a> </p> </div> </div>', 'name': 'The Gaslight'}, {'lng': -75.14441298937022, 'lat': 39.948441474920386, 'content': '<div id="content"> <h1>Lucha Cartel</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Luchacartel">@Luchacartel</a>: No time to frown for the mid-week thanks to #HappyHour! From 4PM - 7PM, #LuchaCartel is cranking out 1/2 OFF Draft… https://t.co/4wzRpCftTg</p> <p style="font-size: 10px;">Wed Jan 17 18:26 | <a target="_blank" href="https://twitter.com/statuses/953694934783098882">Read on Twitter</a></p> <hr> <p> Phone: (267) 761-9209<br/> Directions: <a href="https://maps.google.com?daddr=207+Chestnut+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">207 Chestnut St (at 2nd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.luchacartel.com">http://www.luchacartel.com</a> </p> </div> </div>', 'name': 'Lucha Cartel'}, {'lng': -75.22963, 'lat': 40.029991, 'content': '<div id="content"> <h1>Paper Street Pub</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PaperStreetPub">@PaperStreetPub</a>: How about that game against the Falcons... the #underdogs really came to play! #PaperStreetPub is sure to be doing… https://t.co/vFIYV4VTJp</p> <p style="font-size: 10px;">Wed Jan 17 18:23 | <a target="_blank" href="https://twitter.com/statuses/953694212243050497">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA+19127" target="_blank">Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="https://twitter.com/PaperStreetPub">https://twitter.com/PaperStreetPub</a> </p> </div> </div>', 'name': 'Paper Street Pub'}, {'lng': -75.14640162764312, 'lat': 39.950284720600514, 'content': '<div id="content"> <h1>common wealth</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CommonWealthPHL">@CommonWealthPHL</a>: There\'s no reason to whine about the snow when you could get out of it and #wine with us @ #CommonWealthPHL! It\'s… https://t.co/gcicDrp1Wp</p> <p style="font-size: 10px;">Wed Jan 17 18:17 | <a target="_blank" href="https://twitter.com/statuses/953692699898638339">Read on Twitter</a></p> <hr> <p> Phone: (267) 455-0662<br/> Directions: <a href="https://maps.google.com?daddr=319+Market+St%2C+Philadelphia%2C+PA+19106" target="_blank">319 Market St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://commonwealthphila.com/">http://commonwealthphila.com/</a> </p> </div> </div>', 'name': 'common wealth'}, {'lng': -75.14512174919976, 'lat': 39.94266388088251, 'content': '<div id="content"> <h1>Cavanaugh\'s Headhouse</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CavsHeadhouse">@CavsHeadhouse</a>: It might be snowing today but #CavsHH is still #OpenInPHL! Come play #Quizzo tonight @ 8pm w/ our host Patrick Hami… https://t.co/9ibrSjwbVJ</p> <p style="font-size: 10px;">Wed Jan 17 17:45 | <a target="_blank" href="https://twitter.com/statuses/953684625062289414">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-9307<br/> Directions: <a href="https://maps.google.com?daddr=421+S+2nd+St+%28at+Lombard+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">421 S 2nd St (at Lombard St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.cavsheadhouse.com">http://www.cavsheadhouse.com</a> </p> </div> </div>', 'name': "Cavanaugh's Headhouse"}, {'lng': -75.15263959757444, 'lat': 39.949445094831766, 'content': '<div id="content"> <h1>Las Vegas Lounge</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/lvlphilly">@lvlphilly</a>: We\'ve the perfect $5 #CraftOnDraft for you this week, Philly! @harpoonbrewery Winter Warmer features cinnamon &amp; nut… https://t.co/N9z3XJiggs</p> <p style="font-size: 10px;">Wed Jan 17 16:22 | <a target="_blank" href="https://twitter.com/statuses/953663755505881089">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-9533<br/> Directions: <a href="https://maps.google.com?daddr=704+Chestnut+St+%28at+7th+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">704 Chestnut St (at 7th St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://lasvegaslounge.com/">http://lasvegaslounge.com/</a> </p> </div> </div>', 'name': 'Las Vegas Lounge'}, {'lng': -75.17252802654721, 'lat': 39.96531090100131, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: It\'s #MLKDay and we are #openinphl all day today. Stop in for late afternoon lunch or beer snack, such as pierogies… https://t.co/zFmDT59tGI</p> <p style="font-size: 10px;">Mon Jan 15 16:27 | <a target="_blank" href="https://twitter.com/statuses/952940231480762373">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe'}, {'lng': -75.14643250883483, 'lat': 39.948726962168095, 'content': '<div id="content"> <h1>The Chemical Heritage Foundation</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: The museum will be open on Monday, January 15. The Othmer Library and CHF offices will be closed in observance of… https://t.co/zhqvGKbYjk</p> <p style="font-size: 10px;">Mon Jan 15 12:30 | <a target="_blank" href="https://twitter.com/statuses/952880629640761345">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-2222<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+St+%28btwn+3rd+%26+4th+Sts%29%2C+Philadelphia%2C+PA+19106" target="_blank">315 Chestnut St (btwn 3rd & 4th Sts), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://chemheritage.org">http://chemheritage.org</a> </p> </div> </div>', 'name': 'The Chemical Heritage Foundation'}];

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