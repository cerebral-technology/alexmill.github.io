
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.965362315682, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: We are #openinphl for dinner tonight - kitchen until 11PM, Bar until 2AM. Cheers.</p> <p style="font-size: 10px;">Tue Dec 27 21:30 | <a target="_blank" href="https://twitter.com/statuses/813859749238292480">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'name': 'The Belgian Cafe', 'lng': -75.17257690429688}, {'lat': 39.926971, 'content': '<div id="content"> <h1>Newbold Brew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/NewboldBrew">@NewboldBrew</a>: We close today at 7pm, guys. #OpenInPHL #SouthPhilly</p> <p style="font-size: 10px;">Mon Dec 26 21:30 | <a target="_blank" href="https://twitter.com/statuses/813497242824900608">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-5177<br/> Directions: <a href="https://maps.google.com?daddr=1900+S+15th+St+%28Mifflin%29%2C+Philadelphia%2C+PA+19145" target="_blank">1900 S 15th St (Mifflin), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.newboldbrew.com">http://www.newboldbrew.com</a> </p> </div> </div>', 'name': 'Newbold Brew', 'lng': -75.170942}, {'lat': 39.95226, 'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: We are #OpenInPHL @butcherbarphl for business as usual today... https://t.co/YN8pT2hT26</p> <p style="font-size: 10px;">Mon Dec 26 16:46 | <a target="_blank" href="https://twitter.com/statuses/813425666804903937">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'name': 'Butcher Bar', 'lng': -75.174788}, {'lat': 39.93800531419151, 'content': '<div id="content"> <h1>New Wave Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thenewwavecafe">@thenewwavecafe</a>: We are #openinphl. Boxing Day EPL soccer &amp; College Football Bowl games all afternoon. #quizzo at 9pm, #sixers at 10.30pm.</p> <p style="font-size: 10px;">Mon Dec 26 15:34 | <a target="_blank" href="https://twitter.com/statuses/813407683462238208">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-8484<br/> Directions: <a href="https://maps.google.com?daddr=784+S+3rd+St+%28at+Catherine+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">784 S 3rd St (at Catherine St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.newwavecafe.com">http://www.newwavecafe.com</a> </p> </div> </div>', 'name': 'New Wave Cafe', 'lng': -75.14841824769974}, {'lat': 39.94621074855531, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: The Museum is open today and we hope you\'ll come visit! #OpenInPhl</p> <p style="font-size: 10px;">Mon Dec 26 15:00 | <a target="_blank" href="https://twitter.com/statuses/813398972391899136">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'name': 'Independence Seaport Museum', 'lng': -75.14042033081468}, {'lat': 39.928009, 'content': '<div id="content"> <h1>Watkins Drinkery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WatkinsDrinkery">@WatkinsDrinkery</a>: We\'re #openinphl @ 8pm! Bar only. Catch the #doctorwhochristmas special @ 9!</p> <p style="font-size: 10px;">Sun Dec 25 23:35 | <a target="_blank" href="https://twitter.com/statuses/813166250738196480">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-0175<br/> Directions: <a href="https://maps.google.com?daddr=1712+S+10th+St%2C+Philadelphia%2C+PA+19148" target="_blank">1712 S 10th St, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://watkinsdrinkery.com">http://watkinsdrinkery.com</a> </p> </div> </div>', 'name': 'Watkins Drinkery', 'lng': -75.162028}, {'lat': 39.92167188213936, 'content': '<div id="content"> <h1>Taproom on 19th</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TaproomOn19th">@TaproomOn19th</a>: Hey it\'s @m_rittenberg repping @taproomon19th in Charleston, SC #tr19 #OpenInPhl https://t.co/JXfEMOycUu</p> <p style="font-size: 10px;">Sun Dec 25 20:42 | <a target="_blank" href="https://twitter.com/statuses/813122810805649408">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7817<br/> Directions: <a href="https://maps.google.com?daddr=2400+S+19th+St+%28Ritner%29%2C+Philadelphia%2C+PA+19145" target="_blank">2400 S 19th St (Ritner), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.taproomon19th.com">http://www.taproomon19th.com</a> </p> </div> </div>', 'name': 'Taproom on 19th', 'lng': -75.17857779638472}, {'lat': 39.936654, 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: We\'ll be opening a little later than usual today.... 5pm. #OpenInPHL #SouthPhilly</p> <p style="font-size: 10px;">Sun Dec 25 18:01 | <a target="_blank" href="https://twitter.com/statuses/813082186119319552">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>', 'name': 'American Sardine Bar', 'lng': -75.17352056073281}, {'lat': 39.941305, 'content': '<div id="content"> <h1>Bridget Foy\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/bridgetfoys">@bridgetfoys</a>: #openinphl kitchen open today 4-8pm! https://t.co/qzXYCTq7C3</p> <p style="font-size: 10px;">Sun Dec 25 17:47 | <a target="_blank" href="https://twitter.com/statuses/813078834413273088">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-1813<br/> Directions: <a href="https://maps.google.com?daddr=200+South+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">200 South St (at 2nd St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.bridgetfoys.com/">http://www.bridgetfoys.com/</a> </p> </div> </div>', 'name': "Bridget Foy's", 'lng': -75.145854}, {'lat': 39.944911, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/JWeEqluQtT</p> <p style="font-size: 10px;">Sun Dec 25 16:14 | <a target="_blank" href="https://twitter.com/statuses/813055287703773188">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'name': 'Ristorante Aroma', 'lng': -75.16067}, {'lat': 39.927221, 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: We\'ll be opening a little later than usual today.... 5pm. #OpenInPHL #SouthPhilly</p> <p style="font-size: 10px;">Sun Dec 25 16:01 | <a target="_blank" href="https://twitter.com/statuses/813052076221759488">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'name': 'South Philadelphia Tap Room', 'lng': -75.1713124}, {'lat': 39.95625719243865, 'content': '<div id="content"> <h1>Kabobeesh</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Kabobeesh">@Kabobeesh</a>: We will be open at normal business hours today! Come get some delicious grilled meats from 11am to 1am today. #openinphl #Philadelphia</p> <p style="font-size: 10px;">Sun Dec 25 13:45 | <a target="_blank" href="https://twitter.com/statuses/813017829754753024">Read on Twitter</a></p> <hr> <p> Phone: (215) 386-8081<br/> Directions: <a href="https://maps.google.com?daddr=4201+Chestnut+St+%28at+42nd+St%29%2C+Philadelphia%2C+PA+19104" target="_blank">4201 Chestnut St (at 42nd St), Philadelphia, PA 19104</a><br/> Website: <a target="_blank" href="http://www.kabobeesh.com">http://www.kabobeesh.com</a> </p> </div> </div>', 'name': 'Kabobeesh', 'lng': -75.20647463900916}, {'lat': 39.93087708950043, 'content': '<div id="content"> <h1>The Pub on Passyunk East</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/pope1501">@pope1501</a>: It\'s Christmas Eve and the POPE is #openinphl til 2am. Come to mass.</p> <p style="font-size: 10px;">Sun Dec 25 01:38 | <a target="_blank" href="https://twitter.com/statuses/812834780542881792">Read on Twitter</a></p> <hr> <p> Phone: (215) 755-5125<br/> Directions: <a href="https://maps.google.com?daddr=1501+E+Passyunk+Ave+%28at+Dickinson+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">1501 E Passyunk Ave (at Dickinson St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.pubonpassyunkeast.com">http://www.pubonpassyunkeast.com</a> </p> </div> </div>', 'name': 'The Pub on Passyunk East', 'lng': -75.16216993331909}, {'lat': 39.946822546179085, 'content': '<div id="content"> <h1>The Olde Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheOldeBarPHL">@TheOldeBarPHL</a>: We are #openinPHL until 9:00pm tonight. Come on down for some #Oysters and #cocktails. #garces… https://t.co/cX0yaUK2aV</p> <p style="font-size: 10px;">Sat Dec 24 21:28 | <a target="_blank" href="https://twitter.com/statuses/812771916285087744">Read on Twitter</a></p> <hr> <p> Phone: (215) 253-3777<br/> Directions: <a href="https://maps.google.com?daddr=125+Walnut+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">125 Walnut St (at 2nd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.theoldebar.com">http://www.theoldebar.com</a> </p> </div> </div>', 'name': 'The Olde Bar', 'lng': -75.14417150465755}, {'lat': 39.950839073983005, 'content': '<div id="content"> <h1>Wister BYOB</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WisterBYOB">@WisterBYOB</a>: @WisterBYOB is #OpenInPHL for our regular hours this evening! Grab your friends and a bottle (or twelve!) and enjoy… https://t.co/cRqc4W18ij</p> <p style="font-size: 10px;">Sat Dec 24 21:10 | <a target="_blank" href="https://twitter.com/statuses/812767441411514368">Read on Twitter</a></p> <hr> <p> Phone: (267) 239-5900<br/> Directions: <a href="https://maps.google.com?daddr=26+N+3rd+St%2C+Philadelphia%2C+PA+19106" target="_blank">26 N 3rd St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Wister BYOB', 'lng': -75.14577627182007}, {'lat': 39.95888041796294, 'content': '<div id="content"> <h1>The Trestle Inn</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheTrestleInn">@TheTrestleInn</a>: Its the most wonderful time! Open Saturday 5P-2A. #HappyHour 5P-8P. $3 @Yuengling_Beer Cans &amp; $6 #Jameson ALL NIGHT… https://t.co/rYf43jOejr</p> <p style="font-size: 10px;">Sat Dec 24 20:48 | <a target="_blank" href="https://twitter.com/statuses/812761767659114496">Read on Twitter</a></p> <hr> <p> Phone: (267) 239-0290<br/> Directions: <a href="https://maps.google.com?daddr=339+N+11th+St+%28at+Callowhill+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">339 N 11th St (at Callowhill St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.thetrestleinn.com">http://www.thetrestleinn.com</a> </p> </div> </div>', 'name': 'The Trestle Inn', 'lng': -75.1566500708305}, {'lat': 39.9496, 'content': '<div id="content"> <h1>rarest</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/RARESTphilly">@RARESTphilly</a>: 7 Fishes. $60. We still have a few seats remaining for our feast tonight! Call us at 215-305-8752 #feastofthesevenfishes #openinphl!</p> <p style="font-size: 10px;">Sat Dec 24 20:40 | <a target="_blank" href="https://twitter.com/statuses/812759908647047168">Read on Twitter</a></p> <hr> <p> Phone: (215) 305-8752<br/> Directions: <a href="https://maps.google.com?daddr=834+Chestnut+St%2C+Philadelphia%2C+PA+19107" target="_blank">834 Chestnut St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://rarestphilly.com">http://rarestphilly.com</a> </p> </div> </div>', 'name': 'rarest', 'lng': -75.155363}, {'lat': 39.94868850708008, 'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: Happy Holidays! We\'re #openinphl brunch until 4pm, Christmas Eve Dinner starts 5pm, Christmas Day Brunch 10am, Chri… https://t.co/YXrH5IdIdK</p> <p style="font-size: 10px;">Sat Dec 24 18:22 | <a target="_blank" href="https://twitter.com/statuses/812725093440876550">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>', 'name': 'The Little Lion', 'lng': -75.14585876464844}, {'lat': 39.927246626315274, 'content': '<div id="content"> <h1>P\'unk Burger</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/punk_burger">@punk_burger</a>: Stop by this afternoon we are #openinphl today until 5:30pm. Buy $25 or more in gift cards, get $5 card free #bonus. https://t.co/z1lEge5VPJ</p> <p style="font-size: 10px;">Sat Dec 24 18:16 | <a target="_blank" href="https://twitter.com/statuses/812723587832541185">Read on Twitter</a></p> <hr> <p> Phone: (215) 468-7865<br/> Directions: <a href="https://maps.google.com?daddr=1823+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1823 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://punkburger.com">http://punkburger.com</a> </p> </div> </div>', 'name': "P'unk Burger", 'lng': -75.16639709472656}, {'lat': 39.950984999999996, 'content': '<div id="content"> <h1>SliCE</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SliCEpa">@SliCEpa</a>: Today is the final day for our Pizza of the 7 Fishes #Christmas Eve inspired pizza. Available at all locations unti… https://t.co/FfcYt0ccE5</p> <p style="font-size: 10px;">Sat Dec 24 18:10 | <a target="_blank" href="https://twitter.com/statuses/812722013005639682">Read on Twitter</a></p> <hr> <p> Phone: (215) 557-9299<br/> Directions: <a href="https://maps.google.com?daddr=1740+Sansom+St+%2818th+street%29%2C+Philadelphia%2C+PA+19103" target="_blank">1740 Sansom St (18th street), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.slicepa.com">http://www.slicepa.com</a> </p> </div> </div>', 'name': 'SliCE', 'lng': -75.1701475}, {'lat': 39.945115566666665, 'content': '<div id="content"> <h1>Mixto Restaurant</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Mixtophilly">@Mixtophilly</a>: Enjoy a nice hot cup of @lacolombecoffee coffee on this chilly winter day! 🎄 #OpenInPHL… https://t.co/1QuVyCx1gd</p> <p style="font-size: 10px;">Sat Dec 24 18:06 | <a target="_blank" href="https://twitter.com/statuses/812721206478696449">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-0363<br/> Directions: <a href="https://maps.google.com?daddr=1141+Pine+St+%28at+12th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1141 Pine St (at 12th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.mixtorestaurante.com">http://www.mixtorestaurante.com</a> </p> </div> </div>', 'name': 'Mixto Restaurant', 'lng': -75.16113649}, {'lat': 39.95414176071938, 'content': '<div id="content"> <h1>Christmas Village</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/philachristmas">@philachristmas</a>: Last chance today to ride Christmas Village holiday carousel. Stop by w your family until 5pm for a new… https://t.co/euHAg0Orsv</p> <p style="font-size: 10px;">Sat Dec 24 17:50 | <a target="_blank" href="https://twitter.com/statuses/812716996735500288">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1450+John+F+Kennedy+Blvd+%28at+Love+Park%29%2C+Philadelphia%2C+PA+19102" target="_blank">1450 John F Kennedy Blvd (at Love Park), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://philachristmas.com">http://philachristmas.com</a> </p> </div> </div>', 'name': 'Christmas Village', 'lng': -75.16565066969483}, {'lat': 39.94620097040777, 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: @vargabar is #OpenInPHL today... Brunch til 3pm... Drinks til at least 10pm! https://t.co/7SjQNHLboY</p> <p style="font-size: 10px;">Sat Dec 24 17:11 | <a target="_blank" href="https://twitter.com/statuses/812707219456147456">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar', 'lng': -75.15789844306211}, {'lat': 39.95056, 'content': '<div id="content"> <h1>Marathon Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/EatMarathon">@EatMarathon</a>: We are #OpenInPHL until 9pm at our Sansom and Spruce St locations today. Closed tomorrow.</p> <p style="font-size: 10px;">Sat Dec 24 16:52 | <a target="_blank" href="https://twitter.com/statuses/812702577062252544">Read on Twitter</a></p> <hr> <p> Phone: (215) 569-3278<br/> Directions: <a href="https://maps.google.com?daddr=121+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">121 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.eatmarathon.com/">http://www.eatmarathon.com/</a> </p> </div> </div>', 'name': 'Marathon Grill', 'lng': -75.167453}, {'lat': 39.94894677382774, 'content': '<div id="content"> <h1>JJ Bootleggers</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/jjbootleggers">@jjbootleggers</a>: TODAY...get in the #HolidaySpirit in more ways than one! Grab a new #Toy or #CannedFood to donate &amp; score a… https://t.co/pTkKMNLLOf</p> <p style="font-size: 10px;">Sat Dec 24 16:15 | <a target="_blank" href="https://twitter.com/statuses/812693120471199744">Read on Twitter</a></p> <hr> <p> Phone: (215) 923-3300<br/> Directions: <a href="https://maps.google.com?daddr=35+S+2nd+St%2C+Philadelphia%2C+PA+19106" target="_blank">35 S 2nd St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://jjbootleggers.com">http://jjbootleggers.com</a> </p> </div> </div>', 'name': 'JJ Bootleggers', 'lng': -75.14402328367689}, {'lat': 39.950567, 'content': '<div id="content"> <h1>Revolution Taco</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/revolutiontaco">@revolutiontaco</a>: We out here. For real. #openinphl until 2pm for lunch today. Last minute shopping pick me up. Gift cards. We got wh… https://t.co/b2SeQC6g7R</p> <p style="font-size: 10px;">Sat Dec 24 15:55 | <a target="_blank" href="https://twitter.com/statuses/812688059900772352">Read on Twitter</a></p> <hr> <p> Phone: (267) 639-5681<br/> Directions: <a href="https://maps.google.com?daddr=2015+Walnut+St+%28btwn+20th+%26+21st+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2015 Walnut St (btwn 20th & 21st St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.therevolutiontaco.com">http://www.therevolutiontaco.com</a> </p> </div> </div>', 'name': 'Revolution Taco', 'lng': -75.174327}, {'lat': 39.929879, 'content': '<div id="content"> <h1>Perla</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/perlaphilly">@perlaphilly</a>: Pick up last minute gifts at Perla! Gift Certificates are available! We are open for dinner service tonight 5-8pm! #openinphl</p> <p style="font-size: 10px;">Sat Dec 24 15:24 | <a target="_blank" href="https://twitter.com/statuses/812680418273165312">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1535+S.+11th+St.%2C+Philadelphia%2C+PA+19147" target="_blank">1535 S. 11th St., Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.perlaphilly.com/">http://www.perlaphilly.com/</a> </p> </div> </div>', 'name': 'Perla', 'lng': -75.162989}, {'lat': 39.929342, 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: All shops are now #openinphl. Us Eraces celebrate with a group of 30 tonight, as documented in… https://t.co/44aAOyLZeu</p> <p style="font-size: 10px;">Sat Dec 24 15:17 | <a target="_blank" href="https://twitter.com/statuses/812678485173014529">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1411<br/> Directions: <a href="https://maps.google.com?daddr=1618+E+Passyunk+Ave+%28btwn+11th+%26+12th+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1618 E Passyunk Ave (btwn 11th & 12th St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Green Aisle Grocery', 'lng': -75.16405285144641}, {'lat': 39.949555580543404, 'content': '<div id="content"> <h1>Cuba Libre Restaurant & Rum Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CubaLibrePHL">@CubaLibrePHL</a>: Merry #ChristmasEve! We\'re #OpenInPHL: All-You-Can-Eat brunch 10:30 -1:30, dinner 4-8pm in @OldCityDistrict… https://t.co/xHhQo4mybQ</p> <p style="font-size: 10px;">Sat Dec 24 15:15 | <a target="_blank" href="https://twitter.com/statuses/812678109656977409">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-0666<br/> Directions: <a href="https://maps.google.com?daddr=10+S+2nd+St+%28btwn+Market+St+%26+Chestnut+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">10 S 2nd St (btwn Market St & Chestnut St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://cubalibrerestaurant.com">http://cubalibrerestaurant.com</a> </p> </div> </div>', 'name': 'Cuba Libre Restaurant & Rum Bar', 'lng': -75.14394917313429}, {'lat': 39.94819089608984, 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: Holiday Hours: 8 a.m. - 7 p.m. 12/24 CLOSED 12/25 #openinPHL https://t.co/HSlTBNcI61</p> <p style="font-size: 10px;">Sat Dec 24 15:15 | <a target="_blank" href="https://twitter.com/statuses/812678095257923584">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'name': 'Mariposa Food Co-op', 'lng': -75.22062916994227}, {'lat': 39.961225, 'content': '<div id="content"> <h1>Prohibition Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ProhibitionTR">@ProhibitionTR</a>: We\'re open today 11am until 10pm for a burger &amp; beer after your last minute shopping sprees! #openinphl… https://t.co/J0PBozvgc6</p> <p style="font-size: 10px;">Sat Dec 24 14:10 | <a target="_blank" href="https://twitter.com/statuses/812661705499152384">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-1818<br/> Directions: <a href="https://maps.google.com?daddr=501+N+13th+St%2C+Philadelphia%2C+PA+19123" target="_blank">501 N 13th St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://theprohibitiontaproom.com">http://theprohibitiontaproom.com</a> </p> </div> </div>', 'name': 'Prohibition Tap Room', 'lng': -75.15955}, {'lat': 40.070983, 'content': '<div id="content"> <h1>Baker Street Bread Co</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BakerStBread">@BakerStBread</a>: Stop on in, we are #openinphl! Today we are open 7am-4pm :) We have Dinner Rolls, Fruit &amp; Nut Spice Cakes,... https://t.co/JITr6D2CmN</p> <p style="font-size: 10px;">Sat Dec 24 13:54 | <a target="_blank" href="https://twitter.com/statuses/812657654971662336">Read on Twitter</a></p> <hr> <p> Phone: (215) 248-2500<br/> Directions: <a href="https://maps.google.com?daddr=8009+Germantown+Ave+%28Willow+Grove%29%2C+Philadelphia%2C+PA+19118" target="_blank">8009 Germantown Ave (Willow Grove), Philadelphia, PA 19118</a><br/> Website: <a target="_blank" href="http://www.bakerstreetbread.com/">http://www.bakerstreetbread.com/</a> </p> </div> </div>', 'name': 'Baker Street Bread Co', 'lng': -75.20097038987029}, {'lat': 39.951321, 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: Truly the last minute! We\'ll be #OpeninPHL today until 3! Starter Kits make great gifts! Give the gift that keeps... https://t.co/FhdxoMXr5P</p> <p style="font-size: 10px;">Sat Dec 24 13:53 | <a target="_blank" href="https://twitter.com/statuses/812657561140871168">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'name': 'Home Sweet Homebrew', 'lng': -75.173942}, {'lat': 39.960375, 'content': '<div id="content"> <h1>Cafe Lift</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Cafe_Lift">@Cafe_Lift</a>: Snag some Carter Sauce to spice up your holiday dinners! We\'re open 9am-3pm today! #openinphl https://t.co/8IxP84J5ji</p> <p style="font-size: 10px;">Sat Dec 24 13:50 | <a target="_blank" href="https://twitter.com/statuses/812656658816073729">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-3031<br/> Directions: <a href="https://maps.google.com?daddr=428+N+13th+St%2C+Philadelphia%2C+PA+19123" target="_blank">428 N 13th St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://cafelift.com">http://cafelift.com</a> </p> </div> </div>', 'name': 'Cafe Lift', 'lng': -75.159626}, {'lat': 39.942515191991696, 'content': '<div id="content"> <h1>Cavanaugh\'s Headhouse</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CavsHeadhouse">@CavsHeadhouse</a>: It\'s the most wonderful time for #beer, #drinks, #CavsFavorites &amp; MORE! Stop in to get your #HolidayCheer w/ us any… https://t.co/ZJrNtVU1kK</p> <p style="font-size: 10px;">Sat Dec 24 13:35 | <a target="_blank" href="https://twitter.com/statuses/812652866884304897">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-9307<br/> Directions: <a href="https://maps.google.com?daddr=421+S+2nd+St+%28at+Lombard+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">421 S 2nd St (at Lombard St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.cavsheadhouse.com">http://www.cavsheadhouse.com</a> </p> </div> </div>', 'name': "Cavanaugh's Headhouse", 'lng': -75.14504671096802}, {'lat': 39.94856595, 'content': '<div id="content"> <h1>Drink Philly</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DrinkPhilly">@DrinkPhilly</a>: Bars Open on Christmas Day 2016 in Philadelphia #OpenInPHL https://t.co/v3diroqT3R https://t.co/4EpbEYGWnH</p> <p style="font-size: 10px;">Fri Dec 23 20:57 | <a target="_blank" href="https://twitter.com/statuses/812401755866759170">Read on Twitter</a></p> <hr> <p> Phone: (267) 761-9692<br/> Directions: <a href="https://maps.google.com?daddr=239+Chestnut+St.+2nd+Floor+Unit+B+%283rd+and+Chestnut%29%2C+Philadelphia%2C+PA+19106" target="_blank">239 Chestnut St. 2nd Floor Unit B (3rd and Chestnut), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Drink Philly', 'lng': -75.14572444999999}, {'lat': 39.96750024480156, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #OpeninPHL Christmas Eve w 7 Fishes AND 1st nite #chanukah #latkes &amp; menorah lights. Closed… https://t.co/iQ9xbrBmFD</p> <p style="font-size: 10px;">Fri Dec 23 00:24 | <a target="_blank" href="https://twitter.com/statuses/812091383750086656">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'name': 'London Grill', 'lng': -75.17528057098389}, {'lat': 39.94280084676079, 'content': '<div id="content"> <h1>Whole Foods Market</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WFMPhilly">@WFMPhilly</a>: We are open through 12/24, but hours vary by store this week - full list here: https://t.co/KzKw9Lw9zC #openinphl</p> <p style="font-size: 10px;">Thu Dec 22 17:01 | <a target="_blank" href="https://twitter.com/statuses/811979944511283200">Read on Twitter</a></p> <hr> <p> Phone: (215) 733-9788<br/> Directions: <a href="https://maps.google.com?daddr=929+South+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">929 South St (at S 10th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.wholefoodsmarket.com/stores/southstreet">http://www.wholefoodsmarket.com/stores/southstreet</a> </p> </div> </div>', 'name': 'Whole Foods Market', 'lng': -75.15822906053218}];

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