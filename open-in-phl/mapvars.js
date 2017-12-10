
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lng': -75.16486672075402, 'name': 'Bing Bing Dim Sum', 'lat': 39.92886643010245, 'content': '<div id="content"> <h1>Bing Bing Dim Sum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/bingbingdimsum">@bingbingdimsum</a>: Open all day today. Some egg things. Some lunch things. Dim sum. 12-10pm. Happy Hour 3-5pm . . . . #foobooz… https://t.co/qAxj5xRWEP</p> <p style="font-size: 10px;">Sun Dec 10 15:02 | <a target="_blank" href="https://twitter.com/statuses/939872983782494208">Read on Twitter</a></p> <hr> <p> Phone: (215) 279-7702<br/> Directions: <a href="https://maps.google.com?daddr=1648+E+Passyunk+Ave+%28Morris%29%2C+Philadelphia%2C+PA+19148" target="_blank">1648 E Passyunk Ave (Morris), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.bingbingdimsum.com">http://www.bingbingdimsum.com</a> </p> </div> </div>'}, {'lng': -75.15784430951177, 'name': 'Cheu Noodle Bar', 'lat': 39.94677789612057, 'content': '<div id="content"> <h1>Cheu Noodle Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/cheunoodlebar">@cheunoodlebar</a>: Stop by for Broth steam session....12-10pm. Happy Hour 3-5pm. #openinphl https://t.co/mg0ePQ9sxq</p> <p style="font-size: 10px;">Sun Dec 10 14:54 | <a target="_blank" href="https://twitter.com/statuses/939870921241890817">Read on Twitter</a></p> <hr> <p> Phone: (267) 639-4136<br/> Directions: <a href="https://maps.google.com?daddr=255+S+10th+St%2C+Philadelphia%2C+PA+19107" target="_blank">255 S 10th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.cheunoodlebar.com">http://www.cheunoodlebar.com</a> </p> </div> </div>'}, {'lng': -75.13443765426928, 'name': 'Cheu Noodle Bar Fishtown', 'lat': 39.97226267447524, 'content': '<div id="content"> <h1>Cheu Noodle Bar Fishtown</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/cheufishtown">@cheufishtown</a>: Snow food. Hot broth. Tasty meat. Chewy noods. \U0001f4f8: @gracedphotos . . . . #foobooz #eaterphilly #cheufishtown… https://t.co/izsJeyqb0k</p> <p style="font-size: 10px;">Sun Dec 10 14:49 | <a target="_blank" href="https://twitter.com/statuses/939869694856781826">Read on Twitter</a></p> <hr> <p> Phone: (267) 758-2269<br/> Directions: <a href="https://maps.google.com?daddr=1416+Frankford+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">1416 Frankford Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="https://www.cheufishtown.com">https://www.cheufishtown.com</a> </p> </div> </div>'}, {'lng': -75.15733738781917, 'name': 'Good Good Comedy Theatre', 'lat': 39.95609683388756, 'content': '<div id="content"> <h1>Good Good Comedy Theatre</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/goodgoodcomedy">@goodgoodcomedy</a>: We are #OpenInPHL all night! Come see a cheap show at 8:30 and/or 10 tonight. FREE BEER. https://t.co/LOZ2pJxYsB #philly</p> <p style="font-size: 10px;">Sun Dec 10 00:31 | <a target="_blank" href="https://twitter.com/statuses/939653883923763200">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=215+N+11th+St%2C+Philadelphia%2C+PA+19107" target="_blank">215 N 11th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="https://goodgoodcomedy.com/">https://goodgoodcomedy.com/</a> </p> </div> </div>'}, {'lng': -75.16729226151672, 'name': 'Waffles & Wedges', 'lat': 39.94593444352437, 'content': '<div id="content"> <h1>Waffles & Wedges</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WafflesWedges">@WafflesWedges</a>: #OpenInPHL</p> <p style="font-size: 10px;">Sat Dec 09 22:19 | <a target="_blank" href="https://twitter.com/statuses/939620665249935361">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1511+Pine+St%2C+Philadelphia%2C+PA+19102" target="_blank">1511 Pine St, Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.WafflesWedges.com/">http://www.WafflesWedges.com/</a> </p> </div> </div>'}, {'lng': -75.17175419367994, 'name': 'SouthGate Philly', 'lat': 39.945476539888816, 'content': '<div id="content"> <h1>SouthGate Philly</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/southgatephilly">@southgatephilly</a>: Requisite “Snowy Exterior” shot. ✅☃️ #openinphl for dinner at 5:00! https://t.co/DTD0kY9K42</p> <p style="font-size: 10px;">Sat Dec 09 20:33 | <a target="_blank" href="https://twitter.com/statuses/939593867946614784">Read on Twitter</a></p> <hr> <p> Phone: (215) 560-8464<br/> Directions: <a href="https://maps.google.com?daddr=1801+Lombard+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1801 Lombard St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://southgatephilly.com">http://southgatephilly.com</a> </p> </div> </div>'}, {'lng': -75.18001977753168, 'name': 'Green Aisle Grocery', 'lat': 39.94478586732886, 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: We’re #openinPHL and have what you need for the perfect snowday brunch ❄️☕️\U0001f953 #greenaisle… https://t.co/XoyQb4o6H9</p> <p style="font-size: 10px;">Sat Dec 09 18:20 | <a target="_blank" href="https://twitter.com/statuses/939560368694878215">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2241+Grays+Ferry+Ave%2C+Philadelphia%2C+PA+19146" target="_blank">2241 Grays Ferry Ave, Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.greenaislegrocery.com/">http://www.greenaislegrocery.com/</a> </p> </div> </div>'}, {'lng': -75.15287709383769, 'name': 'Square Pie', 'lat': 39.938644352567, 'content': '<div id="content"> <h1>Square Pie</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SquarePiePhilly">@SquarePiePhilly</a>: Cold weather food. Open at 5pm. #squarepiephilly #openinphl https://t.co/DQQeoe8UAo</p> <p style="font-size: 10px;">Sat Dec 09 17:25 | <a target="_blank" href="https://twitter.com/statuses/939546587453419520">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=801+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19147" target="_blank">801 E Passyunk Ave, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.squarepiephilly.com/">http://www.squarepiephilly.com/</a> </p> </div> </div>'}, {'lng': -75.16939016959759, 'name': "Gran Caffe L'Aquila", 'lat': 39.951727725547904, 'content': '<div id="content"> <h1>Gran Caffe L\'Aquila</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GCaffeLaquila">@GCaffeLaquila</a>: Perfect day for some #GranCaffe! Stop in &amp; let us help you get warmed up with an Espresso, Cappuccino or a Latte! C… https://t.co/fwbBAmETPk</p> <p style="font-size: 10px;">Sat Dec 09 16:12 | <a target="_blank" href="https://twitter.com/statuses/939528223184117763">Read on Twitter</a></p> <hr> <p> Phone: (215) 568-5600<br/> Directions: <a href="https://maps.google.com?daddr=1716+Chestnut+St%2C+Philadelphia%2C+PA+19103" target="_blank">1716 Chestnut St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.grancaffelaquila.com">http://www.grancaffelaquila.com</a> </p> </div> </div>'}, {'lng': -75.135199, 'name': "Sancho Pistola's", 'lat': 39.968855, 'content': '<div id="content"> <h1>Sancho Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Sancho_Pistolas">@Sancho_Pistolas</a>: Ummmm not sure if we need to say this but most definitely #openinphl with all the goodies!</p> <p style="font-size: 10px;">Sat Dec 09 15:52 | <a target="_blank" href="https://twitter.com/statuses/939523031965290496">Read on Twitter</a></p> <hr> <p> Phone: (267) 324-3530<br/> Directions: <a href="https://maps.google.com?daddr=19+W+Girard+Ave+%28at+Leopard+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">19 W Girard Ave (at Leopard St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.sanchopistolas.com">http://www.sanchopistolas.com</a> </p> </div> </div>'}, {'lng': -75.16617507121423, 'name': "José Pistola's", 'lat': 39.947505895213666, 'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: Ummmm not sure if we need to say this but most definitely #openinphl with all the goodies!</p> <p style="font-size: 10px;">Sat Dec 09 15:52 | <a target="_blank" href="https://twitter.com/statuses/939523031944302592">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28at+Manning+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (at Manning St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com/">http://www.josepistolas.com/</a> </p> </div> </div>'}, {'lng': -75.16844, 'name': 'Pistolas Del Sur', 'lat': 39.92592, 'content': '<div id="content"> <h1>Pistolas Del Sur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PistolasDelSur">@PistolasDelSur</a>: Ummmm not sure if we need to say this but most definitely #openinphl with all the goodies!</p> <p style="font-size: 10px;">Sat Dec 09 15:52 | <a target="_blank" href="https://twitter.com/statuses/939523031592030209">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1934+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1934 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="https://twitter.com/PistolasDelSur">https://twitter.com/PistolasDelSur</a> </p> </div> </div>'}, {'lng': -75.13393643265502, 'name': 'Evil Genius Beer Company', 'lat': 39.97574794610907, 'content': '<div id="content"> <h1>Evil Genius Beer Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/EvilGeniusBeer">@EvilGeniusBeer</a>: Ummmm not sure if we need to say this but most definitely #openinphl with all the goodies!</p> <p style="font-size: 10px;">Sat Dec 09 15:52 | <a target="_blank" href="https://twitter.com/statuses/939523031579406336">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1727+N+Front+St+%28btwn+Colombia+%26+Palmer%29%2C+Philadelphia%2C+PA+19122" target="_blank">1727 N Front St (btwn Colombia & Palmer), Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="http://www.evilgeniusbeer.com">http://www.evilgeniusbeer.com</a> </p> </div> </div>'}, {'lng': -75.17303379564967, 'name': 'The Rittenhouse Spa And Club - Hair By Paul Labrecque', 'lat': 39.94975765086555, 'content': '<div id="content"> <h1>The Rittenhouse Spa And Club - Hair By Paul Labrecque</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/RittenhouseSpa">@RittenhouseSpa</a>: It may be snowy outside, but we are warming things up in the Spa. Brave the storm for 20% off a hot stone massage t… https://t.co/80uwsVQdZZ</p> <p style="font-size: 10px;">Sat Dec 09 14:47 | <a target="_blank" href="https://twitter.com/statuses/939506770204151808">Read on Twitter</a></p> <hr> <p> Phone: (215) 790-2500<br/> Directions: <a href="https://maps.google.com?daddr=210+W+Rittenhouse+Sq+%28Walnut+Street%29%2C+Philadelphia%2C+PA+19103" target="_blank">210 W Rittenhouse Sq (Walnut Street), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.therittenhousespaclub.com">http://www.therittenhousespaclub.com</a> </p> </div> </div>'}, {'lng': -75.1733916, 'name': 'The Rittenhouse Hotel', 'lat': 39.9498658, 'content': '<div id="content"> <h1>The Rittenhouse Hotel</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheRittenhouse">@TheRittenhouse</a>: Snowfall in Philadelphia means luxury perks for locals and travelers braving the storm. Warm up at the Library Bar… https://t.co/nlyQZBuusJ</p> <p style="font-size: 10px;">Sat Dec 09 14:46 | <a target="_blank" href="https://twitter.com/statuses/939506635831218182">Read on Twitter</a></p> <hr> <p> Phone: (215) 546-9000<br/> Directions: <a href="https://maps.google.com?daddr=210+W+Rittenhouse+Sq%2C+Philadelphia%2C+PA+19103" target="_blank">210 W Rittenhouse Sq, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.rittenhousehotel.com">http://www.rittenhousehotel.com</a> </p> </div> </div>'}, {'lng': -75.16220781624595, 'name': "Woody's", 'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: #WOODYS where #GREATPEOPLEPARTY #HolidayCheer #Guestlist is up on our website. #ILOVEWOODYS. Signup before 9PM and… https://t.co/aXPhlXAQmN</p> <p style="font-size: 10px;">Fri Dec 08 16:16 | <a target="_blank" href="https://twitter.com/statuses/939166900227117058">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>'}, {'lng': -75.143196, 'name': 'Tuna Bar', 'lat': 39.95386, 'content': '<div id="content"> <h1>Tuna Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TunaBarPHL">@TunaBarPHL</a>: Big thanks to @EaterPhilly and @rachelvigoda for including us in this feature! #EaterPhilly #OpenInPHL https://t.co/JSf3TQsivm</p> <p style="font-size: 10px;">Tue Dec 05 19:02 | <a target="_blank" href="https://twitter.com/statuses/938121302191329280">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=205+Race+St%2C+Philadelphia%2C+PA+19106" target="_blank">205 Race St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.tunabar.com/">http://www.tunabar.com/</a> </p> </div> </div>'}, {'lng': -75.14969331618147, 'name': 'The Hungry Pigeon', 'lat': 39.939137076872285, 'content': '<div id="content"> <h1>The Hungry Pigeon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/hungry__pigeon">@hungry__pigeon</a>: Mmm...caffeine. 😴 Good morning Philly! Come and get it! \U0001f950🍳\U0001f953#mondaymotivation #openinphl @ Hungry… https://t.co/ojUPdaOeHK</p> <p style="font-size: 10px;">Mon Dec 04 12:32 | <a target="_blank" href="https://twitter.com/statuses/937660779565740032">Read on Twitter</a></p> <hr> <p> Phone: (215) 278-2736<br/> Directions: <a href="https://maps.google.com?daddr=743+S+4th+St+%28at+Fitzwater+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">743 S 4th St (at Fitzwater St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.hungrypigeon.com">http://www.hungrypigeon.com</a> </p> </div> </div>'}];

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