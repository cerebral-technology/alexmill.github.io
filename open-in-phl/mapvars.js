
function initMap() {
    var philly = {lat: 39.9600779, lng: -75.216403};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
        var contentStrings = ['<div id="content"> <h1>the belgian cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: &amp; Troubadour. Sour ales, Wild Ales, even Gose. Why not? makes January more fun. Stop in the bar, we\'ll tap at 7:27PM #craftbeer #openinPHL</p> <p style="font-size: 10px;">Tue Jan 26 17:28 | <a target="_blank" href="https://twitter.com/statuses/692036361830924288">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: Is your homebrew gone after #blizzard2016? Time to make more! We\'re #openinPHL until 5:30 today (thanks, @Septa!)... https://t.co/mxaZndjizg</p> <p style="font-size: 10px;">Tue Jan 26 15:46 | <a target="_blank" href="https://twitter.com/statuses/692010716262330369">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%2820th+St.%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (20th St.), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com/">http://homesweethomebrew.com/</a> </p> </div> </div>', '<div id="content"> <h1>Merge Dance Studio</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Merge_Dance">@Merge_Dance</a>: We are OPEN for class today! Please continue to be safe and use caution when traveling in for class. #OpenInPHL #Dance</p> <p style="font-size: 10px;">Tue Jan 26 14:23 | <a target="_blank" href="https://twitter.com/statuses/691989860249399296">Read on Twitter</a></p> <hr> <p> Phone: (215) 266-1311<br/> Directions: <a href="https://maps.google.com?daddr=4047+Cresson+St.%2C+2nd+Floor+Rear+%28Kingsley+St.%29%2C+Philadelphia%2C+PA+19127" target="_blank">4047 Cresson St., 2nd Floor Rear (Kingsley St.), Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="http://www.mergedancestudio.com">http://www.mergedancestudio.com</a> </p> </div> </div>', '<div id="content"> <h1>Sweet Box</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SweetBoxTruck">@SweetBoxTruck</a>: Who wants these for breakfast? #cookiedoughbrownie #openinphl 10-7 https://t.co/z4RIkRkhKN</p> <p style="font-size: 10px;">Tue Jan 26 05:08 | <a target="_blank" href="https://twitter.com/statuses/691850226848636928">Read on Twitter</a></p> <hr> <p> Phone: (215) 237-4647<br/> Directions: <a href="https://maps.google.com?daddr=339+S+13th+St%2C+Philadelphia%2C+PA+19107" target="_blank">339 S 13th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://sweetboxphilly.com">http://sweetboxphilly.com</a> </p> </div> </div>', '<div id="content"> <h1>PHL Business Journal</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PHLBizJournal">@PHLBizJournal</a>: Owners stay optimistic as #BlizzardJonas impacts Restaurant Week https://t.co/JgVSSeWUe7 #openinPHL https://t.co/6rqbzpDhyF</p> <p style="font-size: 10px;">Tue Jan 26 02:58 | <a target="_blank" href="https://twitter.com/statuses/691817346776731650">Read on Twitter</a></p> <hr> <p> Phone: (800) 220-3202<br/> Directions: <a href="https://maps.google.com?daddr=400+Market+St+Fl+12+%284th+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">400 Market St Fl 12 (4th St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.bizjournals.com/philadelphia/">http://www.bizjournals.com/philadelphia/</a> </p> </div> </div>', '<div id="content"> <h1>Trophy Bikes</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/trophybikes">@trophybikes</a>: POST-STORM HOURS: #trophybikes is #OPENINPHL Tuesday, 1/26 at 12 NOON.</p> <p style="font-size: 10px;">Tue Jan 26 02:52 | <a target="_blank" href="https://twitter.com/statuses/691816017350279169">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-1234<br/> Directions: <a href="https://maps.google.com?daddr=712+N+2nd+St+%28Wildey+Street%29%2C+Philadelphia%2C+PA+19123" target="_blank">712 N 2nd St (Wildey Street), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.trophybikes.com/">http://www.trophybikes.com/</a> </p> </div> </div>', '<div id="content"> <h1>Panorama</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Panorama120wine">@Panorama120wine</a>: We\'re #OpenInPHL Restaurant Week Continues https://t.co/sbA5TXvwrB https://t.co/7l1wYYx0vY</p> <p style="font-size: 10px;">Mon Jan 25 22:59 | <a target="_blank" href="https://twitter.com/statuses/691757389205368832">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-7800<br/> Directions: <a href="https://maps.google.com?daddr=14+N+Front+St%2C+Philadelphia%2C+PA+19106" target="_blank">14 N Front St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.panoramaristorante.com">http://www.panoramaristorante.com</a> </p> </div> </div>', '<div id="content"> <h1>AcademyofNatSciences</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AcadNatSci">@AcadNatSci</a>: Philadelphia schools are closed again tomorrow. Cure your cabin fever and take a trip to the Academy, which will be #openinPHL.</p> <p style="font-size: 10px;">Mon Jan 25 22:20 | <a target="_blank" href="https://twitter.com/statuses/691747375707262976">Read on Twitter</a></p> <hr> <p> Phone: (215) 299-1000<br/> Directions: <a href="https://maps.google.com?daddr=1900+Benjamin+Franklin+Pkwy+%28at+19th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1900 Benjamin Franklin Pkwy (at 19th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.ansp.org">http://www.ansp.org</a> </p> </div> </div>', '<div id="content"> <h1>Bellevue Salon & Spa</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BellevueSandS">@BellevueSandS</a>: #openinPHL Have off? Stop by for a fabu blowout. See you soon. Call first! 267-514-8000. https://t.co/wEqFcNcgci</p> <p style="font-size: 10px;">Mon Jan 25 18:20 | <a target="_blank" href="https://twitter.com/statuses/691687086060101632">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=Broad+%26+Walnut%2C+Philadelphia%2C+PA" target="_blank">Broad & Walnut, Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.bellevuesalonandspa.com/">http://www.bellevuesalonandspa.com/</a> </p> </div> </div>', '<div id="content"> <h1>Monk\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MonksCafePhilly">@MonksCafePhilly</a>: The best brews of the world, right in your Philly backyard. Monk\'s Cafe is #OpenInPHL til 2am. https://t.co/egVJJKqIE2</p> <p style="font-size: 10px;">Mon Jan 25 17:52 | <a target="_blank" href="https://twitter.com/statuses/691680106327203840">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-7005<br/> Directions: <a href="https://maps.google.com?daddr=264+S+16th+St+%28btwn+Spruce+St+%26+Locust+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">264 S 16th St (btwn Spruce St & Locust St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://monkscafe.com">http://monkscafe.com</a> </p> </div> </div>', '<div id="content"> <h1>Oyster House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PHLOysterHouse">@PHLOysterHouse</a>: We stocked up on eggs, milk, and happy hour. #OpeninPHL today, trudge on in. https://t.co/sThrqDmrKJ</p> <p style="font-size: 10px;">Mon Jan 25 17:48 | <a target="_blank" href="https://twitter.com/statuses/691679154098573312">Read on Twitter</a></p> <hr> <p> Phone: (215) 567-7683<br/> Directions: <a href="https://maps.google.com?daddr=1516+Sansom+St+%28btw+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">1516 Sansom St (btw 15th St & 16th St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.oysterhousephilly.com">http://www.oysterhousephilly.com</a> </p> </div> </div>', '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: @PHLVisitorCntr The Museum at CHF is #OpeninPHL, too! https://t.co/kUZjCKqzrM</p> <p style="font-size: 10px;">Mon Jan 25 17:48 | <a target="_blank" href="https://twitter.com/statuses/691679140307689472">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+Street+Philadelphia%2C+PA+19106-2702" target="_blank">315 Chestnut Street Philadelphia, PA 19106-2702</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>', '<div id="content"> <h1>Tattooed Mom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Tmoms">@Tmoms</a>: snow day off, stir crazy &amp; nothing left in the fridge? we\'re #openinPHL for beer, food, fun &amp; cyclops snow angels https://t.co/3eLmHgmY7l</p> <p style="font-size: 10px;">Mon Jan 25 17:19 | <a target="_blank" href="https://twitter.com/statuses/691671844747894784">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9880<br/> Directions: <a href="https://maps.google.com?daddr=530+South+St+%28btw+5th+and+6th%29%2C+Philadelphia%2C+PA+19147" target="_blank">530 South St (btw 5th and 6th), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://tattooedmomphilly.com">http://tattooedmomphilly.com</a> </p> </div> </div>', '<div id="content"> <h1>Uncle Oogie\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/UncleOogies">@UncleOogies</a>: We are delivering again! Let us know of any road blocks on our way to your house! We will do our best! #blizzard2016 #openinPHL</p> <p style="font-size: 10px;">Mon Jan 25 17:11 | <a target="_blank" href="https://twitter.com/statuses/691669616591003648">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=36+Snyder+Ave+%28Snyder%29%2C+Philadelphia%2C+PA+19148" target="_blank">36 Snyder Ave (Snyder), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="https://twitter.com/UncleOogies">https://twitter.com/UncleOogies</a> </p> </div> </div>', '<div id="content"> <h1>Friends Center Phila</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FriendsCtr">@FriendsCtr</a>: We\'re #OpenInPHL, though many of our tenants are #ClosedInPHL. Huge kudos to our staff who enabled us to stay open all weekend!</p> <p style="font-size: 10px;">Mon Jan 25 17:01 | <a target="_blank" href="https://twitter.com/statuses/691667306028634113">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=1501+Cherry+St+%2815th%29%2C+Philadelphia%2C+PA+19102" target="_blank">1501 Cherry St (15th), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.friendscentercorp.org/">http://www.friendscentercorp.org/</a> </p> </div> </div>', '<div id="content"> <h1>McNally\'s Tavern</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/McNallysCH">@McNallysCH</a>: #OpeninPHL @ChestnutHillPA Hot #Schmitter #HotSoup #ColdBeer https://t.co/SnCBLnYoco</p> <p style="font-size: 10px;">Mon Jan 25 16:47 | <a target="_blank" href="https://twitter.com/statuses/691663691373285376">Read on Twitter</a></p> <hr> <p> Phone: (215) 247-9736<br/> Directions: <a href="https://maps.google.com?daddr=8634+Germantown+Ave+%28near+Bethlehem+Pike%29%2C+Philadelphia%2C+PA+19118" target="_blank">8634 Germantown Ave (near Bethlehem Pike), Philadelphia, PA 19118</a><br/> Website: <a target="_blank" href="http://www.mcnallystavern.com">http://www.mcnallystavern.com</a> </p> </div> </div>', '<div id="content"> <h1>Dave & Buster\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DaveBustersPHL">@DaveBustersPHL</a>: No school for the kids today? Don\'t go stir crazy, we\'re open today! #Jonas #OPENinPHL</p> <p style="font-size: 10px;">Mon Jan 25 16:30 | <a target="_blank" href="https://twitter.com/statuses/691659439447920640">Read on Twitter</a></p> <hr> <p> Phone: (215) 413-1951<br/> Directions: <a href="https://maps.google.com?daddr=325+N+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">325 N Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.daveandbusters.com/locations/StoreInformation.aspx?StoreId=5">http://www.daveandbusters.com/locations/StoreInformation.aspx?StoreId=5</a> </p> </div> </div>', '<div id="content"> <h1>Kaya Aerial Yoga</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/kayaaerialyoga">@kayaaerialyoga</a>: We\'re #openinPHL, fam! #aerialeverydamnday https://t.co/r5kzZxQ135</p> <p style="font-size: 10px;">Mon Jan 25 16:19 | <a target="_blank" href="https://twitter.com/statuses/691656734310555648">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=225+Quarry+St%2C+Philadelphia%2C+PA+19106" target="_blank">225 Quarry St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.kayaaerialyoga.com/">http://www.kayaaerialyoga.com/</a> </p> </div> </div>', '<div id="content"> <h1>honeygrow</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/honeygrow">@honeygrow</a>: Beauty in the blizzard. ❄️❤️ All stores OPEN today! #hgLocal #OpenInPHL https://t.co/oFMB6fSxlK</p> <p style="font-size: 10px;">Mon Jan 25 16:12 | <a target="_blank" href="https://twitter.com/statuses/691654909360496641">Read on Twitter</a></p> <hr> <p> Phone: (215) 279-7724<br/> Directions: <a href="https://maps.google.com?daddr=110+S+16th+St+%28at+Sansom+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">110 S 16th St (at Sansom St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.honeygrow.com">http://www.honeygrow.com</a> </p> </div> </div>', '<div id="content"> <h1>Petit Rôti</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PetitRoti">@PetitRoti</a>: Specials: BBQ chicken baguette w/ apple slaw, potato leek soup, beet salad with apple &amp; radicchio. Open regular hours today #openinPHL</p> <p style="font-size: 10px;">Mon Jan 25 16:10 | <a target="_blank" href="https://twitter.com/statuses/691654272879104000">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-5447<br/> Directions: <a href="https://maps.google.com?daddr=248+S+11th+St%2C+Philadelphia%2C+PA+19107" target="_blank">248 S 11th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.petit-roti.com/">http://www.petit-roti.com/</a> </p> </div> </div>', '<div id="content"> <h1>Eastern State Pen</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/easternstate">@easternstate</a>: @PHLVisitorCntr No, we\'re OPEN from 12:00 to 5:00! #OpenInPHL</p> <p style="font-size: 10px;">Mon Jan 25 16:06 | <a target="_blank" href="https://twitter.com/statuses/691653496668495872">Read on Twitter</a></p> <hr> <p> Phone: (215) 236-3300<br/> Directions: <a href="https://maps.google.com?daddr=2027+Fairmount+Ave+%28btwn+Corinthian+Ave+%26+22nd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2027 Fairmount Ave (btwn Corinthian Ave & 22nd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.easternstate.org">http://www.easternstate.org</a> </p> </div> </div>', '<div id="content"> <h1>Dave & Buster\'s Plym</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DnBplymouthFUN">@DnBplymouthFUN</a>: #NoSchool for the kids today? We\'re open! #StormJonas #OPENinPHL</p> <p style="font-size: 10px;">Mon Jan 25 16:00 | <a target="_blank" href="https://twitter.com/statuses/691651910676418561">Read on Twitter</a></p> <hr> <p> Phone: (215) 413-1951<br/> Directions: <a href="https://maps.google.com?daddr=325+N+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">325 N Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.daveandbusters.com/locations/StoreInformation.aspx?StoreId=5">http://www.daveandbusters.com/locations/StoreInformation.aspx?StoreId=5</a> </p> </div> </div>', '<div id="content"> <h1>Herban Quality Eats</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HerbanQE">@HerbanQE</a>: Don\'t let #WinterStormJonas keep you from eating well today. We are open 11am to 9pm! #OpenInPHL #EatHerban https://t.co/0rZCSOzcVO</p> <p style="font-size: 10px;">Mon Jan 25 15:27 | <a target="_blank" href="https://twitter.com/statuses/691643443827859458">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://herbanqualityeats.com/">http://herbanqualityeats.com/</a> </p> </div> </div>', '<div id="content"> <h1>Mütter Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MutterMuseum">@MutterMuseum</a>: Got @phillySTAMPpass? Got #snowday? We\'re #OPENinPHL &amp; Passholders get in free. Join us 4pm for #PATeenHealthWeek. https://t.co/uRhzD0VQXQ</p> <p style="font-size: 10px;">Mon Jan 25 15:24 | <a target="_blank" href="https://twitter.com/statuses/691642698869129217">Read on Twitter</a></p> <hr> <p> Phone: (215) 560-8564<br/> Directions: <a href="https://maps.google.com?daddr=19+S+22nd+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">19 S 22nd St (at Ludlow St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://muttermuseum.org">http://muttermuseum.org</a> </p> </div> </div>', '<div id="content"> <h1>IKEA South Philly</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/IKEASouthPhilly">@IKEASouthPhilly</a>: We\'re #OpeninPHL today with regular hours! Come grab free, hot, delicious coffee with your IKEA FAMILY card!</p> <p style="font-size: 10px;">Mon Jan 25 14:56 | <a target="_blank" href="https://twitter.com/statuses/691635852116672513">Read on Twitter</a></p> <hr> <p> Phone: (215) 551-4532<br/> Directions: <a href="https://maps.google.com?daddr=2206+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19148" target="_blank">2206 S Columbus Blvd, Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://www.ikea.com/us/en/store/philadelphia">http://www.ikea.com/us/en/store/philadelphia</a> </p> </div> </div>', '<div id="content"> <h1>Phillyfunguide</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Phillyfunguide">@Phillyfunguide</a>: Spend your #snowday at a museum! @TheFranklin @AcadNatSci @pleasetouch are all #OpeninPHL</p> <p style="font-size: 10px;">Mon Jan 25 14:49 | <a target="_blank" href="https://twitter.com/statuses/691634037044174848">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1214+Arch+Street+Philadelphia+PA+19107" target="_blank">1214 Arch Street Philadelphia PA 19107</a><br/> Website: <a target="_blank" href="https://phillyfunguide.com/">https://phillyfunguide.com/</a> </p> </div> </div>', '<div id="content"> <h1>Fishtown Market</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/fishtown_market">@fishtown_market</a>: Business as usual. Yes, we have fresh pretzels, fresh rolls, and rock salt. #openinphl #fishtown https://t.co/HE6LGHFT4Y</p> <p style="font-size: 10px;">Mon Jan 25 14:48 | <a target="_blank" href="https://twitter.com/statuses/691633840868212736">Read on Twitter</a></p> <hr> <p> Phone: (215) 739-5929<br/> Directions: <a href="https://maps.google.com?daddr=2328+E+Norris+St+%28at+Memphis+St.%29%2C+Philadelphia%2C+PA+19125" target="_blank">2328 E Norris St (at Memphis St.), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.youcantbeatourmeat.com/">http://www.youcantbeatourmeat.com/</a> </p> </div> </div>', '<div id="content"> <h1>CompanionPetHospital</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Companion_Pets">@Companion_Pets</a>: We are #OpenInPHL today with our normal schedule of 9am-7pm. Be careful out there today! #cphphilly</p> <p style="font-size: 10px;">Mon Jan 25 14:16 | <a target="_blank" href="https://twitter.com/statuses/691625594837143552">Read on Twitter</a></p> <hr> <p> Phone: (215) 703-7387<br/> Directions: <a href="https://maps.google.com?daddr=1524+S+5th+St+%28Cross+St.%29%2C+Philadelphia%2C+PA+19147" target="_blank">1524 S 5th St (Cross St.), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://www.companion-pets.com/">http://www.companion-pets.com/</a> </p> </div> </div>', '<div id="content"> <h1>Career Wardrobe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/careerwardrobe">@careerwardrobe</a>: 1822boutique: We are #openinphl today! Off work or school? Come shop and get your retail therapy on! #designerresa… https://t.co/QUNWRGOFPM</p> <p style="font-size: 10px;">Mon Jan 25 13:47 | <a target="_blank" href="https://twitter.com/statuses/691618497957359617">Read on Twitter</a></p> <hr> <p> Phone: (215) 568-6693<br/> Directions: <a href="https://maps.google.com?daddr=21+S+12th+St+%28at+Ludlow+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">21 S 12th St (at Ludlow St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', '<div id="content"> <h1>Wardrobe Boutique</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/1822boutique">@1822boutique</a>: We are #openinphl today! Off work or school? Come shop and get your retail therapy on! #designerresale #snowzilla... https://t.co/hV1lhuqJAk</p> <p style="font-size: 10px;">Mon Jan 25 13:40 | <a target="_blank" href="https://twitter.com/statuses/691616651603628032">Read on Twitter</a></p> <hr> <p> Phone: (215) 568-2660<br/> Directions: <a href="https://maps.google.com?daddr=1822+Spring+Garden+St+%2819th%29%2C+Philadelphia%2C+PA+19130" target="_blank">1822 Spring Garden St (19th), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.wardrobeboutique.org/home.php">http://www.wardrobeboutique.org/home.php</a> </p> </div> </div>', '<div id="content"> <h1>Rival Bros Coffee</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/rivalbroscoffee">@rivalbroscoffee</a>: Yo we back at it full strength! We\'re here for all your aprés-sledding needs and desires. Fresh hot and local. #openinPHL</p> <p style="font-size: 10px;">Mon Jan 25 13:33 | <a target="_blank" href="https://twitter.com/statuses/691614802507087872">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=2400+Lombard+St+%28At+24th+St.%29%2C+Philadelphia%2C+PA+19146" target="_blank">2400 Lombard St (At 24th St.), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.rivalbros.com">http://www.rivalbros.com</a> </p> </div> </div>', '<div id="content"> <h1>Gavin\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Gavinscafe">@Gavinscafe</a>: Swing by for @LaColombeCoffee warm scones and #empanadas #openinPHL #Jonas</p> <p style="font-size: 10px;">Mon Jan 25 13:10 | <a target="_blank" href="https://twitter.com/statuses/691609138133127168">Read on Twitter</a></p> <hr> <p> Phone: (267) 519-2494<br/> Directions: <a href="https://maps.google.com?daddr=2536+Pine+St+%2826th%29%2C+Philadelphia%2C+PA+19103" target="_blank">2536 Pine St (26th), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.gavinscafe.com">http://www.gavinscafe.com</a> </p> </div> </div>', '<div id="content"> <h1>FederalDonuts</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FederalDonuts">@FederalDonuts</a>: It me, #openinPHL!</p> <p style="font-size: 10px;">Mon Jan 25 13:07 | <a target="_blank" href="https://twitter.com/statuses/691608241005039616">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-8258<br/> Directions: <a href="https://maps.google.com?daddr=1632+Sansom+St+%28at+17th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1632 Sansom St (at 17th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.federaldonuts.com">http://www.federaldonuts.com</a> </p> </div> </div>', '<div id="content"> <h1>Franklin Institute</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TheFranklin">@TheFranklin</a>: @MikeFOX29 The #FranklinInstitute will be open today from 9:30 am-5:00 pm. https://t.co/HfxYIxh3S0 #OpenInPHL https://t.co/VUTVcQH33K</p> <p style="font-size: 10px;">Mon Jan 25 12:30 | <a target="_blank" href="https://twitter.com/statuses/691598946448252928">Read on Twitter</a></p> <hr> <p> Phone: (215) 448-1200<br/> Directions: <a href="https://maps.google.com?daddr=222+N+20th+St+%28btwn+Winter+St+%26+Race+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">222 N 20th St (btwn Winter St & Race St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www2.fi.edu">http://www2.fi.edu</a> </p> </div> </div>', '<div id="content"> <h1>Green Eggs Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenEggsCafe">@GreenEggsCafe</a>: Schools are closed but we are OPEN\U0001f917☕️❄️ #openinPHL</p> <p style="font-size: 10px;">Mon Jan 25 12:23 | <a target="_blank" href="https://twitter.com/statuses/691597201689157632">Read on Twitter</a></p> <hr> <p> Phone: (267) 861-0314<br/> Directions: <a href="https://maps.google.com?daddr=212+S+13th+St+%28at+Locust+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">212 S 13th St (at Locust St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://greeneggscafe.com">http://greeneggscafe.com</a> </p> </div> </div>'];

    var infowindow0 = new google.maps.InfoWindow({
        content: contentStrings[0],
        maxWidth: 400
    });
    var marker0 = new google.maps.Marker({
        position: {lat: 39.965362315682, lng: -75.17257690429688},
        map: map,
        title: 'the belgian cafe'
    });
    marker0.addListener('click', function() {
        infowindow0.open(map, marker0);
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: contentStrings[1],
        maxWidth: 400
    });
    var marker1 = new google.maps.Marker({
        position: {lat: 39.951321, lng: -75.173942},
        map: map,
        title: 'Home Sweet Homebrew'
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: contentStrings[2],
        maxWidth: 400
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 40.02260283470359, lng: -75.21710157394408},
        map: map,
        title: 'Merge Dance Studio'
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: contentStrings[3],
        maxWidth: 400
    });
    var marker3 = new google.maps.Marker({
        position: {lat: 39.94883997790703, lng: -75.16290323312215},
        map: map,
        title: 'Sweet Box'
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: contentStrings[4],
        maxWidth: 400
    });
    var marker4 = new google.maps.Marker({
        position: {lat: 39.95017920084754, lng: -75.14752924259453},
        map: map,
        title: 'PHL Business Journal'
    });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: contentStrings[5],
        maxWidth: 400
    });
    var marker5 = new google.maps.Marker({
        position: {lat: 39.96231257915497, lng: -75.14110386371613},
        map: map,
        title: 'Trophy Bikes'
    });
    marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
    });

    var infowindow6 = new google.maps.InfoWindow({
        content: contentStrings[6],
        maxWidth: 400
    });
    var marker6 = new google.maps.Marker({
        position: {lat: 39.95006594974687, lng: -75.14227867126465},
        map: map,
        title: 'Panorama'
    });
    marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
    });

    var infowindow7 = new google.maps.InfoWindow({
        content: contentStrings[7],
        maxWidth: 400
    });
    var marker7 = new google.maps.Marker({
        position: {lat: 39.957115481871945, lng: -75.17117142611824},
        map: map,
        title: 'AcademyofNatSciences'
    });
    marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
    });

    var infowindow8 = new google.maps.InfoWindow({
        content: contentStrings[8],
        maxWidth: 400
    });
    var marker8 = new google.maps.Marker({
        position: {lat: 39.949071962194076, lng: -75.16441375917606},
        map: map,
        title: 'Bellevue Salon & Spa'
    });
    marker8.addListener('click', function() {
        infowindow8.open(map, marker8);
    });

    var infowindow9 = new google.maps.InfoWindow({
        content: contentStrings[9],
        maxWidth: 400
    });
    var marker9 = new google.maps.Marker({
        position: {lat: 39.9477629747096, lng: -75.16807079315186},
        map: map,
        title: "Monk's Cafe"
    });
    marker9.addListener('click', function() {
        infowindow9.open(map, marker9);
    });

    var infowindow10 = new google.maps.InfoWindow({
        content: contentStrings[10],
        maxWidth: 400
    });
    var marker10 = new google.maps.Marker({
        position: {lat: 39.950497, lng: -75.166676},
        map: map,
        title: 'Oyster House'
    });
    marker10.addListener('click', function() {
        infowindow10.open(map, marker10);
    });

    var infowindow11 = new google.maps.InfoWindow({
        content: contentStrings[11],
        maxWidth: 400
    });
    var marker11 = new google.maps.Marker({
        position: {lat: 39.9490511, lng: -75.1464632},
        map: map,
        title: 'chemheritage'
    });
    marker11.addListener('click', function() {
        infowindow11.open(map, marker11);
    });

    var infowindow12 = new google.maps.InfoWindow({
        content: contentStrings[12],
        maxWidth: 400
    });
    var marker12 = new google.maps.Marker({
        position: {lat: 39.942187740763075, lng: -75.15227213923758},
        map: map,
        title: 'Tattooed Mom'
    });
    marker12.addListener('click', function() {
        infowindow12.open(map, marker12);
    });

    var infowindow13 = new google.maps.InfoWindow({
        content: contentStrings[13],
        maxWidth: 400
    });
    var marker13 = new google.maps.Marker({
        position: {lat: 39.92125329950192, lng: -75.14697627539474},
        map: map,
        title: "Uncle Oogie's"
    });
    marker13.addListener('click', function() {
        infowindow13.open(map, marker13);
    });

    var infowindow14 = new google.maps.InfoWindow({
        content: contentStrings[14],
        maxWidth: 400
    });
    var marker14 = new google.maps.Marker({
        position: {lat: 39.95557237154348, lng: -75.16476716317528},
        map: map,
        title: 'Friends Center Phila'
    });
    marker14.addListener('click', function() {
        infowindow14.open(map, marker14);
    });

    var infowindow15 = new google.maps.InfoWindow({
        content: contentStrings[15],
        maxWidth: 400
    });
    var marker15 = new google.maps.Marker({
        position: {lat: 40.077202, lng: -75.208787},
        map: map,
        title: "McNally's Tavern"
    });
    marker15.addListener('click', function() {
        infowindow15.open(map, marker15);
    });

    var infowindow16 = new google.maps.InfoWindow({
        content: contentStrings[16],
        maxWidth: 400
    });
    var marker16 = new google.maps.Marker({
        position: {lat: 39.95619313073562, lng: -75.1386147737503},
        map: map,
        title: "Dave & Buster's"
    });
    marker16.addListener('click', function() {
        infowindow16.open(map, marker16);
    });

    var infowindow17 = new google.maps.InfoWindow({
        content: contentStrings[17],
        maxWidth: 400
    });
    var marker17 = new google.maps.Marker({
        position: {lat: 39.953583, lng: -75.144344},
        map: map,
        title: 'Kaya Aerial Yoga'
    });
    marker17.addListener('click', function() {
        infowindow17.open(map, marker17);
    });

    var infowindow18 = new google.maps.InfoWindow({
        content: contentStrings[18],
        maxWidth: 400
    });
    var marker18 = new google.maps.Marker({
        position: {lat: 39.95076920973739, lng: -75.16730936851067},
        map: map,
        title: 'honeygrow'
    });
    marker18.addListener('click', function() {
        infowindow18.open(map, marker18);
    });

    var infowindow19 = new google.maps.InfoWindow({
        content: contentStrings[19],
        maxWidth: 400
    });
    var marker19 = new google.maps.Marker({
        position: {lat: 39.94712229669305, lng: -75.15930071238085},
        map: map,
        title: 'Petit Rôti'
    });
    marker19.addListener('click', function() {
        infowindow19.open(map, marker19);
    });

    var infowindow20 = new google.maps.InfoWindow({
        content: contentStrings[20],
        maxWidth: 400
    });
    var marker20 = new google.maps.Marker({
        position: {lat: 39.96838828801233, lng: -75.17261981964111},
        map: map,
        title: 'Eastern State Pen'
    });
    marker20.addListener('click', function() {
        infowindow20.open(map, marker20);
    });

    var infowindow21 = new google.maps.InfoWindow({
        content: contentStrings[21],
        maxWidth: 400
    });
    var marker21 = new google.maps.Marker({
        position: {lat: 39.95619313073562, lng: -75.1386147737503},
        map: map,
        title: "Dave & Buster's Plym"
    });
    marker21.addListener('click', function() {
        infowindow21.open(map, marker21);
    });

    var infowindow22 = new google.maps.InfoWindow({
        content: contentStrings[22],
        maxWidth: 400
    });
    var marker22 = new google.maps.Marker({
        position: {lat: 39.956436929128635, lng: -75.15891309447022},
        map: map,
        title: 'Herban Quality Eats'
    });
    marker22.addListener('click', function() {
        infowindow22.open(map, marker22);
    });

    var infowindow23 = new google.maps.InfoWindow({
        content: contentStrings[23],
        maxWidth: 400
    });
    var marker23 = new google.maps.Marker({
        position: {lat: 39.95328287617808, lng: -75.17657153967899},
        map: map,
        title: 'Mütter Museum'
    });
    marker23.addListener('click', function() {
        infowindow23.open(map, marker23);
    });

    var infowindow24 = new google.maps.InfoWindow({
        content: contentStrings[24],
        maxWidth: 400
    });
    var marker24 = new google.maps.Marker({
        position: {lat: 39.91727415127369, lng: -75.1410984992981},
        map: map,
        title: 'IKEA South Philly'
    });
    marker24.addListener('click', function() {
        infowindow24.open(map, marker24);
    });

    var infowindow25 = new google.maps.InfoWindow({
        content: contentStrings[25],
        maxWidth: 400
    });
    var marker25 = new google.maps.Marker({
        position: {lat: 39.9537074, lng: -75.1602417},
        map: map,
        title: 'Phillyfunguide'
    });
    marker25.addListener('click', function() {
        infowindow25.open(map, marker25);
    });

    var infowindow26 = new google.maps.InfoWindow({
        content: contentStrings[26],
        maxWidth: 400
    });
    var marker26 = new google.maps.Marker({
        position: {lat: 39.977495058798254, lng: -75.12876717929936},
        map: map,
        title: 'Fishtown Market'
    });
    marker26.addListener('click', function() {
        infowindow26.open(map, marker26);
    });

    var infowindow27 = new google.maps.InfoWindow({
        content: contentStrings[27],
        maxWidth: 400
    });
    var marker27 = new google.maps.Marker({
        position: {lat: 39.92912247415305, lng: -75.15369415283203},
        map: map,
        title: 'CompanionPetHospital'
    });
    marker27.addListener('click', function() {
        infowindow27.open(map, marker27);
    });

    var infowindow28 = new google.maps.InfoWindow({
        content: contentStrings[28],
        maxWidth: 400
    });
    var marker28 = new google.maps.Marker({
        position: {lat: 39.95123451757183, lng: -75.15988213745496},
        map: map,
        title: 'Career Wardrobe'
    });
    marker28.addListener('click', function() {
        infowindow28.open(map, marker28);
    });

    var infowindow29 = new google.maps.InfoWindow({
        content: contentStrings[29],
        maxWidth: 400
    });
    var marker29 = new google.maps.Marker({
        position: {lat: 39.96324835, lng: -75.169381},
        map: map,
        title: 'Wardrobe Boutique'
    });
    marker29.addListener('click', function() {
        infowindow29.open(map, marker29);
    });

    var infowindow30 = new google.maps.InfoWindow({
        content: contentStrings[30],
        maxWidth: 400
    });
    var marker30 = new google.maps.Marker({
        position: {lat: 39.94654489222836, lng: -75.1805099341096},
        map: map,
        title: 'Rival Bros Coffee'
    });
    marker30.addListener('click', function() {
        infowindow30.open(map, marker30);
    });

    var infowindow31 = new google.maps.InfoWindow({
        content: contentStrings[31],
        maxWidth: 400
    });
    var marker31 = new google.maps.Marker({
        position: {lat: 39.94769791439479, lng: -75.18264152744081},
        map: map,
        title: "Gavin's Cafe"
    });
    marker31.addListener('click', function() {
        infowindow31.open(map, marker31);
    });

    var infowindow32 = new google.maps.InfoWindow({
        content: contentStrings[32],
        maxWidth: 400
    });
    var marker32 = new google.maps.Marker({
        position: {lat: 39.95063066163185, lng: -75.16814156131629},
        map: map,
        title: 'FederalDonuts'
    });
    marker32.addListener('click', function() {
        infowindow32.open(map, marker32);
    });

    var infowindow33 = new google.maps.InfoWindow({
        content: contentStrings[33],
        maxWidth: 400
    });
    var marker33 = new google.maps.Marker({
        position: {lat: 39.958142199403056, lng: -75.17279148101807},
        map: map,
        title: 'Franklin Institute'
    });
    marker33.addListener('click', function() {
        infowindow33.open(map, marker33);
    });

    var infowindow34 = new google.maps.InfoWindow({
        content: contentStrings[34],
        maxWidth: 400
    });
    var marker34 = new google.maps.Marker({
        position: {lat: 39.94821976528194, lng: -75.16224201714789},
        map: map,
        title: 'Green Eggs Cafe'
    });
    marker34.addListener('click', function() {
        infowindow34.open(map, marker34);
    });
}