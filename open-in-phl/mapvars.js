
function initMap() {
    var philly = {lat: 39.9600779, lng: -75.216403};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });
        var contentStrings = ['<div id="content"> <h1>the belgian cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: &amp; Troubadour. Sour ales, Wild Ales, even Gose. Why not? makes January more fun. Stop in the bar, we\'ll tap at 7:27PM #craftbeer #openinPHL</p> <p style="font-size: 10px;">Tue Jan 26 17:28 | <a target="_blank" href="https://twitter.com/statuses/692036361830924288">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>', '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: Is your homebrew gone after #blizzard2016? Time to make more! We\'re #openinPHL until 5:30 today (thanks, @Septa!)... https://t.co/mxaZndjizg</p> <p style="font-size: 10px;">Tue Jan 26 15:46 | <a target="_blank" href="https://twitter.com/statuses/692010716262330369">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%2820th+St.%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (20th St.), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com/">http://homesweethomebrew.com/</a> </p> </div> </div>', '<div id="content"> <h1>Merge Dance Studio</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Merge_Dance">@Merge_Dance</a>: We are OPEN for class today! Please continue to be safe and use caution when traveling in for class. #OpenInPHL #Dance</p> <p style="font-size: 10px;">Tue Jan 26 14:23 | <a target="_blank" href="https://twitter.com/statuses/691989860249399296">Read on Twitter</a></p> <hr> <p> Phone: (215) 266-1311<br/> Directions: <a href="https://maps.google.com?daddr=4047+Cresson+St.%2C+2nd+Floor+Rear+%28Kingsley+St.%29%2C+Philadelphia%2C+PA+19127" target="_blank">4047 Cresson St., 2nd Floor Rear (Kingsley St.), Philadelphia, PA 19127</a><br/> Website: <a target="_blank" href="http://www.mergedancestudio.com">http://www.mergedancestudio.com</a> </p> </div> </div>', '<div id="content"> <h1>Sweet Box</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SweetBoxTruck">@SweetBoxTruck</a>: Who wants these for breakfast? #cookiedoughbrownie #openinphl 10-7 https://t.co/z4RIkRkhKN</p> <p style="font-size: 10px;">Tue Jan 26 05:08 | <a target="_blank" href="https://twitter.com/statuses/691850226848636928">Read on Twitter</a></p> <hr> <p> Phone: (215) 237-4647<br/> Directions: <a href="https://maps.google.com?daddr=339+S+13th+St%2C+Philadelphia%2C+PA+19107" target="_blank">339 S 13th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://sweetboxphilly.com">http://sweetboxphilly.com</a> </p> </div> </div>', '<div id="content"> <h1>PHL Business Journal</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PHLBizJournal">@PHLBizJournal</a>: Owners stay optimistic as #BlizzardJonas impacts Restaurant Week https://t.co/JgVSSeWUe7 #openinPHL https://t.co/6rqbzpDhyF</p> <p style="font-size: 10px;">Tue Jan 26 02:58 | <a target="_blank" href="https://twitter.com/statuses/691817346776731650">Read on Twitter</a></p> <hr> <p> Phone: (800) 220-3202<br/> Directions: <a href="https://maps.google.com?daddr=400+Market+St+Fl+12+%284th+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">400 Market St Fl 12 (4th St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.bizjournals.com/philadelphia/">http://www.bizjournals.com/philadelphia/</a> </p> </div> </div>', '<div id="content"> <h1>Trophy Bikes</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/trophybikes">@trophybikes</a>: POST-STORM HOURS: #trophybikes is #OPENINPHL Tuesday, 1/26 at 12 NOON.</p> <p style="font-size: 10px;">Tue Jan 26 02:52 | <a target="_blank" href="https://twitter.com/statuses/691816017350279169">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-1234<br/> Directions: <a href="https://maps.google.com?daddr=712+N+2nd+St+%28Wildey+Street%29%2C+Philadelphia%2C+PA+19123" target="_blank">712 N 2nd St (Wildey Street), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.trophybikes.com/">http://www.trophybikes.com/</a> </p> </div> </div>', '<div id="content"> <h1>Panorama</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Panorama120wine">@Panorama120wine</a>: We\'re #OpenInPHL Restaurant Week Continues https://t.co/sbA5TXvwrB https://t.co/7l1wYYx0vY</p> <p style="font-size: 10px;">Mon Jan 25 22:59 | <a target="_blank" href="https://twitter.com/statuses/691757389205368832">Read on Twitter</a></p> <hr> <p> Phone: (215) 922-7800<br/> Directions: <a href="https://maps.google.com?daddr=14+N+Front+St%2C+Philadelphia%2C+PA+19106" target="_blank">14 N Front St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.panoramaristorante.com">http://www.panoramaristorante.com</a> </p> </div> </div>', '<div id="content"> <h1>AcademyofNatSciences</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AcadNatSci">@AcadNatSci</a>: Philadelphia schools are closed again tomorrow. Cure your cabin fever and take a trip to the Academy, which will be #openinPHL.</p> <p style="font-size: 10px;">Mon Jan 25 22:20 | <a target="_blank" href="https://twitter.com/statuses/691747375707262976">Read on Twitter</a></p> <hr> <p> Phone: (215) 299-1000<br/> Directions: <a href="https://maps.google.com?daddr=1900+Benjamin+Franklin+Pkwy+%28at+19th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">1900 Benjamin Franklin Pkwy (at 19th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.ansp.org">http://www.ansp.org</a> </p> </div> </div>', '<div id="content"> <h1>Bellevue Salon & Spa</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BellevueSandS">@BellevueSandS</a>: #openinPHL Have off? Stop by for a fabu blowout. See you soon. Call first! 267-514-8000. https://t.co/wEqFcNcgci</p> <p style="font-size: 10px;">Mon Jan 25 18:20 | <a target="_blank" href="https://twitter.com/statuses/691687086060101632">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=Broad+%26+Walnut%2C+Philadelphia%2C+PA" target="_blank">Broad & Walnut, Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.bellevuesalonandspa.com/">http://www.bellevuesalonandspa.com/</a> </p> </div> </div>', '<div id="content"> <h1>Monk\'s Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/MonksCafePhilly">@MonksCafePhilly</a>: The best brews of the world, right in your Philly backyard. Monk\'s Cafe is #OpenInPHL til 2am. https://t.co/egVJJKqIE2</p> <p style="font-size: 10px;">Mon Jan 25 17:52 | <a target="_blank" href="https://twitter.com/statuses/691680106327203840">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-7005<br/> Directions: <a href="https://maps.google.com?daddr=264+S+16th+St+%28btwn+Spruce+St+%26+Locust+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">264 S 16th St (btwn Spruce St & Locust St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://monkscafe.com">http://monkscafe.com</a> </p> </div> </div>', '<div id="content"> <h1>Oyster House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PHLOysterHouse">@PHLOysterHouse</a>: We stocked up on eggs, milk, and happy hour. #OpeninPHL today, trudge on in. https://t.co/sThrqDmrKJ</p> <p style="font-size: 10px;">Mon Jan 25 17:48 | <a target="_blank" href="https://twitter.com/statuses/691679154098573312">Read on Twitter</a></p> <hr> <p> Phone: (215) 567-7683<br/> Directions: <a href="https://maps.google.com?daddr=1516+Sansom+St+%28btw+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">1516 Sansom St (btw 15th St & 16th St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.oysterhousephilly.com">http://www.oysterhousephilly.com</a> </p> </div> </div>', '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: @PHLVisitorCntr The Museum at CHF is #OpeninPHL, too! https://t.co/kUZjCKqzrM</p> <p style="font-size: 10px;">Mon Jan 25 17:48 | <a target="_blank" href="https://twitter.com/statuses/691679140307689472">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+Street+Philadelphia%2C+PA+19106" target="_blank">315 Chestnut Street Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>', '<div id="content"> <h1>Tattooed Mom</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Tmoms">@Tmoms</a>: snow day off, stir crazy &amp; nothing left in the fridge? we\'re #openinPHL for beer, food, fun &amp; cyclops snow angels https://t.co/3eLmHgmY7l</p> <p style="font-size: 10px;">Mon Jan 25 17:19 | <a target="_blank" href="https://twitter.com/statuses/691671844747894784">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9880<br/> Directions: <a href="https://maps.google.com?daddr=530+South+St+%28btw+5th+and+6th%29%2C+Philadelphia%2C+PA+19147" target="_blank">530 South St (btw 5th and 6th), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://tattooedmomphilly.com">http://tattooedmomphilly.com</a> </p> </div> </div>', '<div id="content"> <h1>Uncle Oogie\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/UncleOogies">@UncleOogies</a>: We are delivering again! Let us know of any road blocks on our way to your house! We will do our best! #blizzard2016 #openinPHL</p> <p style="font-size: 10px;">Mon Jan 25 17:11 | <a target="_blank" href="https://twitter.com/statuses/691669616591003648">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=36+Snyder+Ave+%28Snyder%29%2C+Philadelphia%2C+PA+19148" target="_blank">36 Snyder Ave (Snyder), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="https://twitter.com/UncleOogies">https://twitter.com/UncleOogies</a> </p> </div> </div>', '<div id="content"> <h1>Friends Center Phila</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/FriendsCtr">@FriendsCtr</a>: We\'re #OpenInPHL, though many of our tenants are #ClosedInPHL. Huge kudos to our staff who enabled us to stay open all weekend!</p> <p style="font-size: 10px;">Mon Jan 25 17:01 | <a target="_blank" href="https://twitter.com/statuses/691667306028634113">Read on Twitter</a></p> <hr> <p> Phone: None<br/> Directions: <a href="https://maps.google.com?daddr=1501+Cherry+St+%2815th%29%2C+Philadelphia%2C+PA+19102" target="_blank">1501 Cherry St (15th), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.friendscentercorp.org/">http://www.friendscentercorp.org/</a> </p> </div> </div>', '<div id="content"> <h1>McNally\'s Tavern</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/McNallysCH">@McNallysCH</a>: #OpeninPHL @ChestnutHillPA Hot #Schmitter #HotSoup #ColdBeer https://t.co/SnCBLnYoco</p> <p style="font-size: 10px;">Mon Jan 25 16:47 | <a target="_blank" href="https://twitter.com/statuses/691663691373285376">Read on Twitter</a></p> <hr> <p> Phone: (215) 247-9736<br/> Directions: <a href="https://maps.google.com?daddr=8634+Germantown+Ave+%28near+Bethlehem+Pike%29%2C+Philadelphia%2C+PA+19118" target="_blank">8634 Germantown Ave (near Bethlehem Pike), Philadelphia, PA 19118</a><br/> Website: <a target="_blank" href="http://www.mcnallystavern.com">http://www.mcnallystavern.com</a> </p> </div> </div>'];

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
}