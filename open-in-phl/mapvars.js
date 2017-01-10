
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.948638, 'name': 'Capofitto', 'content': '<div id="content"> <h1>Capofitto</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Capofitto">@Capofitto</a>: Trying to stop myself from devouring these candied blood orange slices! #capofitto #dessert #whatsnowday #openinphl… https://t.co/oxB5W3I7yG</p> <p style="font-size: 10px;">Mon Jan 09 17:10 | <a target="_blank" href="https://twitter.com/statuses/818505273862131712">Read on Twitter</a></p> <hr> <p> Phone: (215) 897-9999<br/> Directions: <a href="https://maps.google.com?daddr=223+Chestnut+St%2C+Philadelphia%2C+PA+19106" target="_blank">223 Chestnut St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.capofittoforno.com">http://www.capofittoforno.com</a> </p> </div> </div>', 'lng': -75.145446}, {'lat': 39.944911, 'name': 'Ristorante Aroma', 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/RCtZqwZb8Q</p> <p style="font-size: 10px;">Mon Jan 09 16:15 | <a target="_blank" href="https://twitter.com/statuses/818491383241707520">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lng': -75.16067}, {'lat': 39.930492, 'name': 'The Industry Bar', 'content': '<div id="content"> <h1>The Industry Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/theindustrybar">@theindustrybar</a>: A steaming hot bowl of our Pork Cheek Pho. You need this. Kitchen is open til 1am! #openinphl https://t.co/zffNNdsKbX</p> <p style="font-size: 10px;">Sun Jan 08 01:15 | <a target="_blank" href="https://twitter.com/statuses/817902601521995776">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-9500<br/> Directions: <a href="https://maps.google.com?daddr=1401+E+Moyamensing+Ave+%28at+Reed+St.%29%2C+Philadelphia%2C+PA+19147" target="_blank">1401 E Moyamensing Ave (at Reed St.), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.theindustrybar.com">http://www.theindustrybar.com</a> </p> </div> </div>', 'lng': -75.149676}, {'lat': 39.925950298466375, 'name': 'Le Virtù', 'content': '<div id="content"> <h1>Le Virtù</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LeVirtuPhila">@LeVirtuPhila</a>: Saffron tagliatelle, rock shrimp, Piennolo tomatoes, garlic\u200b, white wine. #openinphl https://t.co/OUXrqSHlhu</p> <p style="font-size: 10px;">Sat Jan 07 23:16 | <a target="_blank" href="https://twitter.com/statuses/817872631017959424">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-5626<br/> Directions: <a href="https://maps.google.com?daddr=1927+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1927 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.levirtu.com">http://www.levirtu.com</a> </p> </div> </div>', 'lng': -75.1678394644379}, {'lat': 39.946008, 'name': 'Waffles & Wedges', 'content': '<div id="content"> <h1>Waffles & Wedges</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WafflesWedges">@WafflesWedges</a>: #OpenInPHL until 8pm. ❄️🎉</p> <p style="font-size: 10px;">Sat Jan 07 22:36 | <a target="_blank" href="https://twitter.com/statuses/817862536347451393">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1511+Pine+St%2C+Philadelphia%2C+PA+19102" target="_blank">1511 Pine St, Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.WafflesWedges.com/">http://www.WafflesWedges.com/</a> </p> </div> </div>', 'lng': -75.167445}, {'lat': 39.9496, 'name': 'rarest', 'content': '<div id="content"> <h1>rarest</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/RARESTphilly">@RARESTphilly</a>: Snow day #happyhour starts NOW 🍺🍸🍹\U0001f942🍷\U0001f943 #openinPHL #rarestphilly https://t.co/x6U8q437g7</p> <p style="font-size: 10px;">Sat Jan 07 22:00 | <a target="_blank" href="https://twitter.com/statuses/817853515775246336">Read on Twitter</a></p> <hr> <p> Phone: (215) 305-8752<br/> Directions: <a href="https://maps.google.com?daddr=834+Chestnut+St%2C+Philadelphia%2C+PA+19107" target="_blank">834 Chestnut St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://rarestphilly.com">http://rarestphilly.com</a> </p> </div> </div>', 'lng': -75.155363}, {'lat': 39.93048088636384, 'name': 'Brigantessa', 'content': '<div id="content"> <h1>Brigantessa</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Brigantessa_EPA">@Brigantessa_EPA</a>: Definitely #openinphl tonight! https://t.co/P5PGVTSaXi</p> <p style="font-size: 10px;">Sat Jan 07 21:35 | <a target="_blank" href="https://twitter.com/statuses/817847050205335553">Read on Twitter</a></p> <hr> <p> Phone: (267) 318-7341<br/> Directions: <a href="https://maps.google.com?daddr=1520+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19147" target="_blank">1520 E Passyunk Ave, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://brigantessaphila.com">http://brigantessaphila.com</a> </p> </div> </div>', 'lng': -75.16283483159866}, {'lat': 39.950839073983005, 'name': 'Wister BYOB', 'content': '<div id="content"> <h1>Wister BYOB</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WisterBYOB">@WisterBYOB</a>: We are #OpenInPHL on this snowy Saturday! #Philly #foodie #BYOB #snowday https://t.co/gXMLC9kX0Q</p> <p style="font-size: 10px;">Sat Jan 07 21:07 | <a target="_blank" href="https://twitter.com/statuses/817840028411895808">Read on Twitter</a></p> <hr> <p> Phone: (267) 239-5900<br/> Directions: <a href="https://maps.google.com?daddr=26+N+3rd+St%2C+Philadelphia%2C+PA+19106" target="_blank">26 N 3rd St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.14577627182007}, {'lat': 39.943995, 'name': 'Jet Wine Bar', 'content': '<div id="content"> <h1>Jet Wine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JetWineBar">@JetWineBar</a>: Say hello to Amanda and warm up with a hot toddy this evening! #openinphl https://t.co/QBIHHVjVHj</p> <p style="font-size: 10px;">Sat Jan 07 21:01 | <a target="_blank" href="https://twitter.com/statuses/817838616974098432">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-1116<br/> Directions: <a href="https://maps.google.com?daddr=1525+South+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1525 South St (btwn 15th St & 16th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.jetwinebar.com">http://www.jetwinebar.com</a> </p> </div> </div>', 'lng': -75.1680509}, {'lat': 39.962967028895136, 'name': 'The Institute Bar', 'content': '<div id="content"> <h1>The Institute Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/InstituteBar">@InstituteBar</a>: Obligatory "snow day" post with appropriate hash tags. Wait. It\'s Saturday. We\'re open anyway. #snowday #eyeroll… https://t.co/YjhQMO00Db</p> <p style="font-size: 10px;">Sat Jan 07 20:18 | <a target="_blank" href="https://twitter.com/statuses/817827715323662336">Read on Twitter</a></p> <hr> <p> Phone: (267) 318-7772<br/> Directions: <a href="https://maps.google.com?daddr=549+N+12th+St+%28at+Green+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">549 N 12th St (at Green St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.institutebar.com">http://www.institutebar.com</a> </p> </div> </div>', 'lng': -75.15737971425136}, {'lat': 39.92954217012926, 'name': 'The Bottle Shop', 'content': '<div id="content"> <h1>The Bottle Shop</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BottleShopBeer">@BottleShopBeer</a>: We are #openinphl... So come grab some brews &amp; enjoy this beautiful snowy day!!! Open til 11:30p https://t.co/siHImeoVHW</p> <p style="font-size: 10px;">Sat Jan 07 19:19 | <a target="_blank" href="https://twitter.com/statuses/817812914556063745">Read on Twitter</a></p> <hr> <p> Phone: (215) 551-5551<br/> Directions: <a href="https://maps.google.com?daddr=1616+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1616 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.bottleshopbeer.com">http://www.bottleshopbeer.com</a> </p> </div> </div>', 'lng': -75.1640261538757}, {'lat': 39.92167188213936, 'name': 'Taproom on 19th', 'content': '<div id="content"> <h1>Taproom on 19th</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TaproomOn19th">@TaproomOn19th</a>: Come get your snow day drink on ! #OpenInPhl #tr19 https://t.co/0m3dZoCtha</p> <p style="font-size: 10px;">Sat Jan 07 18:21 | <a target="_blank" href="https://twitter.com/statuses/817798381200351234">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7817<br/> Directions: <a href="https://maps.google.com?daddr=2400+S+19th+St+%28Ritner%29%2C+Philadelphia%2C+PA+19145" target="_blank">2400 S 19th St (Ritner), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.taproomon19th.com">http://www.taproomon19th.com</a> </p> </div> </div>', 'lng': -75.17857779638472}, {'lat': 39.961762, 'name': 'Soy Cafe', 'content': '<div id="content"> <h1>Soy Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SoyCafePhilly">@SoyCafePhilly</a>: We ARE open today!! • • #snowday #openinphl #phillyeats #phillyvegan #plantbased #nolibs… https://t.co/EtoYFVKXta</p> <p style="font-size: 10px;">Sat Jan 07 18:15 | <a target="_blank" href="https://twitter.com/statuses/817796758101250051">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-1003<br/> Directions: <a href="https://maps.google.com?daddr=630+N+2nd+St+%28at+Fairmount+Ave%29%2C+Philadelphia%2C+PA+19123" target="_blank">630 N 2nd St (at Fairmount Ave), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.mysoycafe.com">http://www.mysoycafe.com</a> </p> </div> </div>', 'lng': -75.141221}, {'lat': 39.94196372971302, 'name': 'Tattooed Mom', 'content': '<div id="content"> <h1>Tattooed Mom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Tmoms">@Tmoms</a>: late risers &amp; snowy weekend lovers: we are #openinPHL with brunch sammies and more ❄️\U0001f942 https://t.co/z4VDiOk47I</p> <p style="font-size: 10px;">Sat Jan 07 18:05 | <a target="_blank" href="https://twitter.com/statuses/817794282304180225">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9880<br/> Directions: <a href="https://maps.google.com?daddr=530+South+St+%28btw+5th+and+6th%29%2C+Philadelphia%2C+PA+19147" target="_blank">530 South St (btw 5th and 6th), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://tattooedmomphilly.com">http://tattooedmomphilly.com</a> </p> </div> </div>', 'lng': -75.15185030085395}, {'lat': 40.001447, 'name': 'Bridesburg Bottle Shop', 'content': '<div id="content"> <h1>Bridesburg Bottle Shop</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PHLBottleShop">@PHLBottleShop</a>: Snow won\'t bring us down! Come in for wings &amp; a draft for only $8! Playoff games will be on. See you @ 4 #openinphl… https://t.co/a3P46Zu0Pm</p> <p style="font-size: 10px;">Sat Jan 07 17:39 | <a target="_blank" href="https://twitter.com/statuses/817787742134353920">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2549+Orthodox+St+%28Orthodox+%26+Belgrade%29%2C+Philadelphia%2C+PA+19137" target="_blank">2549 Orthodox St (Orthodox & Belgrade), Philadelphia, PA 19137</a><br/> Website: <a target="_blank" href="http://www.bridesburgbottleshop.com/">http://www.bridesburgbottleshop.com/</a> </p> </div> </div>', 'lng': -75.07655}, {'lat': 39.95063066163185, 'name': 'Federal Donuts', 'content': '<div id="content"> <h1>Federal Donuts</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FederalDonuts">@FederalDonuts</a>: Eggs, milk, bread... or DONUTS #openinPHL https://t.co/QSh5puGg3X</p> <p style="font-size: 10px;">Sat Jan 07 17:32 | <a target="_blank" href="https://twitter.com/statuses/817785961526464513">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-8258<br/> Directions: <a href="https://maps.google.com?daddr=1632+Sansom+St+%28at+17th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1632 Sansom St (at 17th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.federaldonuts.com">http://www.federaldonuts.com</a> </p> </div> </div>', 'lng': -75.16814156131629}, {'lat': 39.929342, 'name': 'Green Aisle Grocery', 'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: We are #openinphl all day today so stop by for provisions!</p> <p style="font-size: 10px;">Sat Jan 07 17:26 | <a target="_blank" href="https://twitter.com/statuses/817784565536321536">Read on Twitter</a></p> <hr> <p> Phone: (215) 465-1411<br/> Directions: <a href="https://maps.google.com?daddr=1618+E+Passyunk+Ave+%28btwn+11th+%26+12th+St%29%2C+Philadelphia%2C+PA+19148" target="_blank">1618 E Passyunk Ave (btwn 11th & 12th St), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.16405285144641}, {'lat': 39.9477629747096, 'name': "Monk's Cafe", 'content': '<div id="content"> <h1>Monk\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MonksCafePhilly">@MonksCafePhilly</a>: Walk in a winter wonderland to a cozy nook stocked with magical potions. We are always #openinPHL https://t.co/zDuKFRDhl8</p> <p style="font-size: 10px;">Sat Jan 07 17:21 | <a target="_blank" href="https://twitter.com/statuses/817783321128275969">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-7005<br/> Directions: <a href="https://maps.google.com?daddr=264+S+16th+St+%28btwn+Spruce+St+%26+Locust+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">264 S 16th St (btwn Spruce St & Locust St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://monkscafe.com">http://monkscafe.com</a> </p> </div> </div>', 'lng': -75.16807079315186}, {'lat': 39.923956, 'name': 'Brewery ARS', 'content': '<div id="content"> <h1>Brewery ARS</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BreweryARS">@BreweryARS</a>: NOTICE: Due to the inclement weather today, we\'ll be #openinphl slinging @babalouie_bbq and… https://t.co/7h5gTjK3Qp</p> <p style="font-size: 10px;">Sat Jan 07 17:12 | <a target="_blank" href="https://twitter.com/statuses/817780989980274690">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1927+W+Passyunk+Ave%2C+Philadelphia%2C+PA+19145" target="_blank">1927 W Passyunk Ave, Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://breweryars.com/">http://breweryars.com/</a> </p> </div> </div>', 'lng': -75.178872}, {'lat': 39.95226, 'name': 'Butcher Bar', 'content': '<div id="content"> <h1>Butcher Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ButcherBarPHL">@ButcherBarPHL</a>: It\'s SNOWING! The sign is all lit up in the snow @butcherbarphl... And we are #OpenInPHL today!… https://t.co/yAjCjC9Y9I</p> <p style="font-size: 10px;">Sat Jan 07 16:47 | <a target="_blank" href="https://twitter.com/statuses/817774760918716416">Read on Twitter</a></p> <hr> <p> Phone: (215) 563-6328<br/> Directions: <a href="https://maps.google.com?daddr=2034+Chestnut+St+%2820th+and+21st+Streets%29%2C+Philadelphia%2C+PA+19103" target="_blank">2034 Chestnut St (20th and 21st Streets), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.butcherbarphilly.com">http://www.butcherbarphilly.com</a> </p> </div> </div>', 'lng': -75.174788}, {'lat': 39.94620097040777, 'name': 'Varga Bar', 'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: We are #OpenInPHL today @vargabar! Brunch 1130-3pm... Dinner 3pm to 1am... Happy hour 4-6pm! And… https://t.co/1OZdOKQ11K</p> <p style="font-size: 10px;">Sat Jan 07 16:42 | <a target="_blank" href="https://twitter.com/statuses/817773323782266880">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'lng': -75.15789844306211}, {'lat': 39.95332511684768, 'name': 'Flying Monkey Bakery', 'content': '<div id="content"> <h1>Flying Monkey Bakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FlyngMnkyPhilly">@FlyngMnkyPhilly</a>: We\'re #openinphl and #opentill6pm for all your shopping needs! #butteronlybakery #scratch… https://t.co/3vRO8wjvGX</p> <p style="font-size: 10px;">Sat Jan 07 16:36 | <a target="_blank" href="https://twitter.com/statuses/817771849740234752">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-0340<br/> Directions: <a href="https://maps.google.com?daddr=51+N+12th+St+%28at+Reading+Terminal+Market%29%2C+Philadelphia%2C+PA+19107" target="_blank">51 N 12th St (at Reading Terminal Market), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.flyingmonkeyphilly.com">http://www.flyingmonkeyphilly.com</a> </p> </div> </div>', 'lng': -75.15936911544235}, {'lat': 39.950569972573604, 'name': 'BRÜ Craft & Wurst', 'content': '<div id="content"> <h1>BRÜ Craft & Wurst</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BruPhilly">@BruPhilly</a>: Let is snow, let is snow. Keep warm with us today w Chef\'s winter goulash featuring braised chicken, smoked kielbas… https://t.co/QTEL40cgmJ</p> <p style="font-size: 10px;">Sat Jan 07 15:41 | <a target="_blank" href="https://twitter.com/statuses/817757999049609218">Read on Twitter</a></p> <hr> <p> Phone: (215) 800-1079<br/> Directions: <a href="https://maps.google.com?daddr=1318+Chestnut+St+%28at+Drury+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1318 Chestnut St (at Drury St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.bruphilly.com">http://www.bruphilly.com</a> </p> </div> </div>', 'lng': -75.16255552506875}, {'lat': 39.951321, 'name': 'Home Sweet Homebrew', 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: #snowdaybrewday Snow Days make great Brew Days! Come in for 20% off featured recipes! #OpeninPHL! https://t.co/Ph0emfjfDL</p> <p style="font-size: 10px;">Sat Jan 07 15:21 | <a target="_blank" href="https://twitter.com/statuses/817753037213200384">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'lng': -75.173942}];

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