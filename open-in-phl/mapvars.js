
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Yards Brewing Company', 'lng': -75.13588231735324, 'content': '<div id="content"> <h1>Yards Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/yardsbrew">@yardsbrew</a>: Looking for somewhere to go a few rounds on your last day of freedom? Yards Tasting Room is #openinPHL Monday 1/2 u… https://t.co/6OaP4c6lAJ</p> <p style="font-size: 10px;">Mon Jan 02 18:47 | <a target="_blank" href="https://twitter.com/statuses/815992901717127169">Read on Twitter</a></p> <hr> <p> Phone: (215) 634-2600<br/> Directions: <a href="https://maps.google.com?daddr=901+N+Delaware+Ave+%28at+Poplar+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">901 N Delaware Ave (at Poplar St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.yardsbrewing.com">http://www.yardsbrewing.com</a> </p> </div> </div>', 'lat': 39.96238803853491}, {'name': 'Ristorante Aroma', 'lng': -75.16067, 'content': '<div id="content"> <h1>Ristorante Aroma</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AromaPhilly">@AromaPhilly</a>: #BestInPhilly? Our cannoli could well be. Give it a try! #OpenInPhl for lunch &amp; dinner. #PhillyEats #PhillyFood https://t.co/KlkFt6baeW</p> <p style="font-size: 10px;">Mon Jan 02 16:15 | <a target="_blank" href="https://twitter.com/statuses/815954669767979013">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1120+Pine+St%2C+Philadelphia%2C+PA+19107" target="_blank">1120 Pine St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://ristorantearomaphilly.com/">http://ristorantearomaphilly.com/</a> </p> </div> </div>', 'lat': 39.944911}, {'name': 'Cuba Libre Restaurant & Rum Bar', 'lng': -75.14394917313429, 'content': '<div id="content"> <h1>Cuba Libre Restaurant & Rum Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CubaLibrePHL">@CubaLibrePHL</a>: No work today? Best excuse 4 mojitos w/ a Cubano sandwich. See you in @OldCityDistrict for #lunch #Philly… https://t.co/kppvfK6jrH</p> <p style="font-size: 10px;">Mon Jan 02 15:15 | <a target="_blank" href="https://twitter.com/statuses/815939543698382848">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-0666<br/> Directions: <a href="https://maps.google.com?daddr=10+S+2nd+St+%28btwn+Market+St+%26+Chestnut+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">10 S 2nd St (btwn Market St & Chestnut St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://cubalibrerestaurant.com">http://cubalibrerestaurant.com</a> </p> </div> </div>', 'lat': 39.949555580543404}, {'name': 'Independence Seaport Museum', 'lng': -75.14042033081468, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: We know visiting the Museum in 2017 is on your New Year\'s resolution list, so steer your way over. We are open toda… https://t.co/pd6MutDRgh</p> <p style="font-size: 10px;">Mon Jan 02 14:45 | <a target="_blank" href="https://twitter.com/statuses/815931910157402112">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lat': 39.94621074855531}, {'name': "Jimmy G's Steaks", 'lng': -75.16062886650361, 'content': '<div id="content"> <h1>Jimmy G\'s Steaks</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JimmyGsteaks">@JimmyGsteaks</a>: We are #openinPHL until 11pm tonight! Stop in after the #MummersParade for a #cheesesteak! 🎉 @… https://t.co/5Hc1g1ReUr</p> <p style="font-size: 10px;">Sun Jan 01 18:22 | <a target="_blank" href="https://twitter.com/statuses/815624166024118272">Read on Twitter</a></p> <hr> <p> Phone: (215) 763-2495<br/> Directions: <a href="https://maps.google.com?daddr=695+N+Broad+St%2C+Philadelphia%2C+PA+19123" target="_blank">695 N Broad St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://jimmygsteaks.com">http://jimmygsteaks.com</a> </p> </div> </div>', 'lat': 39.96615589848436}, {'name': 'American Sardine Bar', 'lng': -75.17352056073281, 'content': '<div id="content"> <h1>American Sardine Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AmericanSardine">@AmericanSardine</a>: ASB has your #HangoverCure: Chef Doreen has pancakes &amp; egg sandwiches on the menu ALL DAY and NIGHT! #NewYearsDay… https://t.co/QkTciVrIRt</p> <p style="font-size: 10px;">Sun Jan 01 18:00 | <a target="_blank" href="https://twitter.com/statuses/815618788368457732">Read on Twitter</a></p> <hr> <p> Phone: (215) 334-2337<br/> Directions: <a href="https://maps.google.com?daddr=1800+Federal+St+%28at+18th+St%29%2C+Philadelphia%2C+PA+19146" target="_blank">1800 Federal St (at 18th St), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.americansardinebar.com">http://www.americansardinebar.com</a> </p> </div> </div>', 'lat': 39.936654}, {'name': 'One Shot Cafe', 'lng': -75.14083564281464, 'content': '<div id="content"> <h1>One Shot Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/oneshotcoffee">@oneshotcoffee</a>: Cinnamon Raisin Pancakes with real maple syrup and sweet cream butter @oneshotcoffee #openinphl… https://t.co/WGBR89JQJJ</p> <p style="font-size: 10px;">Sun Jan 01 15:51 | <a target="_blank" href="https://twitter.com/statuses/815586245808128000">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-1620<br/> Directions: <a href="https://maps.google.com?daddr=217+W+George+St+%28at+American+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">217 W George St (at American St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.1shotcoffee.com">http://www.1shotcoffee.com</a> </p> </div> </div>', 'lat': 39.96770170006014}, {'name': 'Bourbon Blue', 'lng': -75.2221448365785, 'content': '<div id="content"> <h1>Bourbon Blue</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/bourbonblue">@bourbonblue</a>: #HappyNewYear from #BourbonBlue! Stop in to celebrate the #NewYear w/ a #BourbonBlue favorite....@TimWilliamsBand l… https://t.co/HaCY8o4FeD</p> <p style="font-size: 10px;">Sun Jan 01 15:45 | <a target="_blank" href="https://twitter.com/statuses/815584806494990337">Read on Twitter</a></p> <hr> <p> Phone: (215) 508-3360<br/> Directions: <a href="https://maps.google.com?daddr=2+Rector+St+%28at+Main+St%29%2C+Philadelphia%2C+PA+19127" target="_blank">2 Rector St (at Main St), Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="http://www.bourbonblue.com">http://www.bourbonblue.com</a> </p> </div> </div>', 'lat': 40.024297239528174}, {'name': 'The Gaslight', 'lng': -75.14304844221546, 'content': '<div id="content"> <h1>The Gaslight</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GaslightPhilly">@GaslightPhilly</a>: Cheers to a #HappyNewYear from all of us at #TheGaslightPhilly! Stop in to keep the party going 11am - Midnight tod… https://t.co/hz1lm8hEWY</p> <p style="font-size: 10px;">Sun Jan 01 14:49 | <a target="_blank" href="https://twitter.com/statuses/815570628275212288">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-7691<br/> Directions: <a href="https://maps.google.com?daddr=120+Market+St+%28btwn+2nd+%26+Front+Sts%29%2C+Philadelphia%2C+PA+19106" target="_blank">120 Market St (btwn 2nd & Front Sts), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://thegaslightphilly.com">http://thegaslightphilly.com</a> </p> </div> </div>', 'lat': 39.949734204813055}, {'name': 'Lucha Cartel', 'lng': -75.144438, 'content': '<div id="content"> <h1>Lucha Cartel</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Luchacartel">@Luchacartel</a>: #HappyNewYear from the #LuchaCartelPhilly family! Come join to keep the celebration going w/ us 11am - 2am today! 🎉… https://t.co/nDedoRmp4I</p> <p style="font-size: 10px;">Sun Jan 01 14:29 | <a target="_blank" href="https://twitter.com/statuses/815565608662212608">Read on Twitter</a></p> <hr> <p> Phone: (267) 761-9209<br/> Directions: <a href="https://maps.google.com?daddr=207+Chestnut+St+%28at+2nd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">207 Chestnut St (at 2nd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.luchacartel.com">http://www.luchacartel.com</a> </p> </div> </div>', 'lat': 39.948415}, {'name': "Cavanaugh's Headhouse", 'lng': -75.14504671096802, 'content': '<div id="content"> <h1>Cavanaugh\'s Headhouse</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CavsHeadhouse">@CavsHeadhouse</a>: Welcome 2017 &amp; #HappyNewYear from the #CavsHeadhouse squad! Stop in for plenty of #eats, #brews &amp; #football today!… https://t.co/9RtztZiVw2</p> <p style="font-size: 10px;">Sun Jan 01 14:09 | <a target="_blank" href="https://twitter.com/statuses/815560569768083456">Read on Twitter</a></p> <hr> <p> Phone: (215) 928-9307<br/> Directions: <a href="https://maps.google.com?daddr=421+S+2nd+St+%28at+Lombard+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">421 S 2nd St (at Lombard St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.cavsheadhouse.com">http://www.cavsheadhouse.com</a> </p> </div> </div>', 'lat': 39.942515191991696}, {'name': 'Mariposa Food Co-op', 'lng': -75.22062916994227, 'content': '<div id="content"> <h1>Mariposa Food Co-op</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/mariposacoop">@mariposacoop</a>: Holiday Hours: 12/1: 11 a.m. - 10 p.m. #openinPHL</p> <p style="font-size: 10px;">Sun Jan 01 13:35 | <a target="_blank" href="https://twitter.com/statuses/815551962435489792">Read on Twitter</a></p> <hr> <p> Phone: (215) 729-2121<br/> Directions: <a href="https://maps.google.com?daddr=4824+Baltimore+Ave%2C+Philadelphia%2C+PA+19143" target="_blank">4824 Baltimore Ave, Philadelphia, PA 19143</a><br/> Website: <a target="_blank" href="http://www.mariposa.coop">http://www.mariposa.coop</a> </p> </div> </div>', 'lat': 39.94819089608984}, {'name': 'Whole Foods Market', 'lng': -75.15822906053218, 'content': '<div id="content"> <h1>Whole Foods Market</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WFMPhilly">@WFMPhilly</a>: #HappyNewYear! Our #Philly store hours are a bit different today. Find your store: https://t.co/yCRUccAsbz #openinphl</p> <p style="font-size: 10px;">Sun Jan 01 13:01 | <a target="_blank" href="https://twitter.com/statuses/815543372366675970">Read on Twitter</a></p> <hr> <p> Phone: (215) 733-9788<br/> Directions: <a href="https://maps.google.com?daddr=929+South+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">929 South St (at S 10th St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.wholefoodsmarket.com/stores/southstreet">http://www.wholefoodsmarket.com/stores/southstreet</a> </p> </div> </div>', 'lat': 39.94280084676079}, {'name': 'South Philadelphia Tap Room', 'lng': -75.1713124, 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: We\'re serving brunch today, 11am - 3pm. #OpenInPHL #MummersParade #SouthPhilly https://t.co/DPwIcctHRi</p> <p style="font-size: 10px;">Sun Jan 01 13:00 | <a target="_blank" href="https://twitter.com/statuses/815543334177476609">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'lat': 39.927221}, {'name': 'Waffles & Wedges', 'lng': -75.167445, 'content': '<div id="content"> <h1>Waffles & Wedges</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WafflesWedges">@WafflesWedges</a>: Pork roll with it. #HappyNewYear The shop is #OpenInPHL 8-5pm &amp; Waffles 🚚 is on Broad Street by Washington at #CAPA… https://t.co/K9eNA0f9nc</p> <p style="font-size: 10px;">Sun Jan 01 12:53 | <a target="_blank" href="https://twitter.com/statuses/815541466835591168">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1511+Pine+St%2C+Philadelphia%2C+PA+19102" target="_blank">1511 Pine St, Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.WafflesWedges.com/">http://www.WafflesWedges.com/</a> </p> </div> </div>', 'lat': 39.946008}, {'name': "P'unk Burger", 'lng': -75.16639709472656, 'content': '<div id="content"> <h1>P\'unk Burger</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/punk_burger">@punk_burger</a>: Holiday Hours: New Year’s Eve, we are open until 10pm. New Year’s Day, we are open from 10am to 10pm #openinphl… https://t.co/8hcW8OnhRo</p> <p style="font-size: 10px;">Sat Dec 31 20:37 | <a target="_blank" href="https://twitter.com/statuses/815295842139639808">Read on Twitter</a></p> <hr> <p> Phone: (215) 468-7865<br/> Directions: <a href="https://maps.google.com?daddr=1823+E+Passyunk+Ave%2C+Philadelphia%2C+PA+19148" target="_blank">1823 E Passyunk Ave, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://punkburger.com">http://punkburger.com</a> </p> </div> </div>', 'lat': 39.927246626315274}, {'name': 'London Grill', 'lng': -75.17528057098389, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: Plenty of room tonight! Free bubbles at midnight. #OpeninPhl tomorrow! https://t.co/235lKnb2et via @youtube</p> <p style="font-size: 10px;">Sat Dec 31 19:18 | <a target="_blank" href="https://twitter.com/statuses/815276049449807872">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'lat': 39.96750024480156}, {'name': 'Newbold Brew', 'lng': -75.170942, 'content': '<div id="content"> <h1>Newbold Brew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/NewboldBrew">@NewboldBrew</a>: Don\'t show up to the party empty-handed. Swing by for a 6\'er or two. #OpenInPHL #NewYearsEve #SouthPhilly https://t.co/Wdl99jIXzQ</p> <p style="font-size: 10px;">Sat Dec 31 19:00 | <a target="_blank" href="https://twitter.com/statuses/815271483228508160">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-5177<br/> Directions: <a href="https://maps.google.com?daddr=1900+S+15th+St+%28Mifflin%29%2C+Philadelphia%2C+PA+19145" target="_blank">1900 S 15th St (Mifflin), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.newboldbrew.com">http://www.newboldbrew.com</a> </p> </div> </div>', 'lat': 39.926971}, {'name': 'Baker Street Bread Co', 'lng': -75.20097038987029, 'content': '<div id="content"> <h1>Baker Street Bread Co</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BakerStBread">@BakerStBread</a>: Come on in, we are #openinphl!!! New Years Eve we will be open from 7am-4pm &amp; New Years Day open from 9am-4pm.... https://t.co/maDTVFgrA1</p> <p style="font-size: 10px;">Sat Dec 31 17:56 | <a target="_blank" href="https://twitter.com/statuses/815255314262007810">Read on Twitter</a></p> <hr> <p> Phone: (215) 248-2500<br/> Directions: <a href="https://maps.google.com?daddr=8009+Germantown+Ave+%28Willow+Grove%29%2C+Philadelphia%2C+PA+19118" target="_blank">8009 Germantown Ave (Willow Grove), Philadelphia, PA 19118</a><br/> Website: <a target="_blank" href="http://www.bakerstreetbread.com/">http://www.bakerstreetbread.com/</a> </p> </div> </div>', 'lat': 40.070983}, {'name': 'Revolution Taco', 'lng': -75.174327, 'content': '<div id="content"> <h1>Revolution Taco</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/revolutiontaco">@revolutiontaco</a>: We are open until 3 pm today! #openinphl Hurry, before everyone pretends to start dieting tomorrow! \U0001f32e\U0001f32e\U0001f32e\U0001f32e\U0001f32e\U0001f32e\U0001f32e\U0001f32f\U0001f32f\U0001f32f\U0001f32f\U0001f32f\U0001f32f\U0001f32f</p> <p style="font-size: 10px;">Sat Dec 31 15:52 | <a target="_blank" href="https://twitter.com/statuses/815224143469748225">Read on Twitter</a></p> <hr> <p> Phone: (267) 639-5681<br/> Directions: <a href="https://maps.google.com?daddr=2015+Walnut+St+%28btwn+20th+%26+21st+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2015 Walnut St (btwn 20th & 21st St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.therevolutiontaco.com">http://www.therevolutiontaco.com</a> </p> </div> </div>', 'lat': 39.950567}, {'name': 'Baril', 'lng': -75.17262862516594, 'content': '<div id="content"> <h1>Baril</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BarilPhilly">@BarilPhilly</a>: #OpeninPhL #NewYearsDay #PigRoast 12pm-5pm with Neshaminy Creek Brewing. $5 Beers and $10 Plate and Brew Combos! https://t.co/Sy7jqf8VHj</p> <p style="font-size: 10px;">Sat Dec 31 14:33 | <a target="_blank" href="https://twitter.com/statuses/815204302843211777">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-2608<br/> Directions: <a href="https://maps.google.com?daddr=267+S+19th+St%2C+Philadelphia%2C+PA+19103" target="_blank">267 S 19th St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.barilphilly.com">http://www.barilphilly.com</a> </p> </div> </div>', 'lat': 39.94825307497557}, {'name': "Ali's Wagon", 'lng': -75.17096870392517, 'content': '<div id="content"> <h1>Ali\'s Wagon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AlisWagon">@AlisWagon</a>: We\'ll be #openinphl today 10 am - 2 pm! We are closed tomorrow and Mon then back to regular hours Tuesday January 3rd!! Happy New Year! 🎉\U0001f37e🕛🎆</p> <p style="font-size: 10px;">Sat Dec 31 12:45 | <a target="_blank" href="https://twitter.com/statuses/815177130027913217">Read on Twitter</a></p> <hr> <p> Phone: (215) 787-0611<br/> Directions: <a href="https://maps.google.com?daddr=2017+Fairmount+Ave+%2820th+and+Fairmount%29%2C+Philadelphia%2C+PA+19130" target="_blank">2017 Fairmount Ave (20th and Fairmount), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://aliswagon.com">http://aliswagon.com</a> </p> </div> </div>', 'lat': 39.96735351323819}, {'name': 'Brewery ARS', 'lng': -75.178872, 'content': '<div id="content"> <h1>Brewery ARS</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BreweryARS">@BreweryARS</a>: Dearest #Philly, we\'ll be #openinphl at 5. Come crush some Ashland #Porter. It has notes of rich… https://t.co/6hQDpMUccY</p> <p style="font-size: 10px;">Fri Dec 30 21:39 | <a target="_blank" href="https://twitter.com/statuses/814948997660086272">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1927+W+Passyunk+Ave%2C+Philadelphia%2C+PA+19145" target="_blank">1927 W Passyunk Ave, Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://breweryars.com/">http://breweryars.com/</a> </p> </div> </div>', 'lat': 39.923956}, {'name': 'Marathon Grill', 'lng': -75.167453, 'content': '<div id="content"> <h1>Marathon Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/EatMarathon">@EatMarathon</a>: Happy New Year! Join us for normal dinner service on #NYE. No prix fixe and no reservations required! Open until 11… https://t.co/WyYXHboaKV</p> <p style="font-size: 10px;">Thu Dec 29 17:09 | <a target="_blank" href="https://twitter.com/statuses/814518775202648064">Read on Twitter</a></p> <hr> <p> Phone: (215) 569-3278<br/> Directions: <a href="https://maps.google.com?daddr=121+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">121 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.eatmarathon.com/">http://www.eatmarathon.com/</a> </p> </div> </div>', 'lat': 39.95056}, {'name': 'The Belgian Cafe', 'lng': -75.17257690429688, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: ring in #NewYearsEve here- no reservations required- #OpeninPHL for regular Dinner service- Also open #brunch &amp;… https://t.co/z1ve2wB2B8</p> <p style="font-size: 10px;">Thu Dec 29 00:51 | <a target="_blank" href="https://twitter.com/statuses/814272641666347012">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', 'lat': 39.965362315682}];

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