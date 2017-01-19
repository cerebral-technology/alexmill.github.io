
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/n1xUukeOVO</p> <p style="font-size: 10px;">Tue Jan 17 23:10 | <a target="_blank" href="https://twitter.com/statuses/821494894762033152">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lng': -75.16067}, {'lat': 40.006731600273326, 'content': '<div id="content"> <h1>Pennsylvania SPCA</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PSPCA">@PSPCA</a>: No surgery services today, but our vaccine clinic, wellness clinic and adoptions are #openinphl! #animalwelfare</p> <p style="font-size: 10px;">Mon Jan 16 17:25 | <a target="_blank" href="https://twitter.com/statuses/821045640562143232">Read on Twitter</a></p> <hr> <p> Phone: (215) 426-6300<br/> Directions: <a href="https://maps.google.com?daddr=350+E+Erie+Ave%2C+Philadelphia%2C+PA+19134" target="_blank">350 E Erie Ave, Philadelphia, PA 19134</a><br/> Website: <a target="_blank" href="http://www.pspca.org">http://www.pspca.org</a> </p> </div> </div>', 'name': 'Pennsylvania SPCA', 'lng': -75.12133242986772}, {'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: We are #OpeninPHL this #MLK Holiday Monday. Join us for food &amp; great beer, start with coffee - @stbcbeer Coffee-inf… https://t.co/5g2n2EEhao</p> <p style="font-size: 10px;">Mon Jan 16 16:29 | <a target="_blank" href="https://twitter.com/statuses/821031545930731520">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}, {'lat': 39.94621074855531, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: For more details on our #TidesofFreedom exhibit, go to https://t.co/DMQlMIZeZu #MLKDay2017 #OpenInPHL</p> <p style="font-size: 10px;">Mon Jan 16 16:16 | <a target="_blank" href="https://twitter.com/statuses/821028238839296000">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'name': 'Independence Seaport Museum', 'lng': -75.14042033081468}, {'lat': 39.94868850708008, 'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: Join us tomorrow for lunch + brunch specials - we are #openinphl on #MLKday2017 in @OldCityDistrict https://t.co/o0pQ3iuMzm</p> <p style="font-size: 10px;">Mon Jan 16 04:23 | <a target="_blank" href="https://twitter.com/statuses/820848898906460161">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>', 'name': 'The Little Lion', 'lng': -75.14585876464844}, {'lat': 39.947505895213666, 'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: Thank you for your concern @yardsbrew. We are open for business once again! #openinPHL https://t.co/ULAiescTVk</p> <p style="font-size: 10px;">Fri Jan 13 20:26 | <a target="_blank" href="https://twitter.com/statuses/820004235647520773">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28at+Manning+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (at Manning St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com/">http://www.josepistolas.com/</a> </p> </div> </div>', 'name': "José Pistola's", 'lng': -75.16617507121423}];

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