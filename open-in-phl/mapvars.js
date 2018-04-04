
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Varga Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VargaBar">@VargaBar</a>: #VargaSpecialBoard for lunch today! #OpenInPHL everyday for lunch now! @vargabar is open 1130am… https://t.co/TfBm1qDaA4</p> <p style="font-size: 10px;">Tue Apr 03 15:53 | <a target="_blank" href="https://twitter.com/statuses/981197998821650435">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-5200<br/> Directions: <a href="https://maps.google.com?daddr=941+Spruce+St+%28at+S+10th+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">941 Spruce St (at S 10th St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.vargabar.com">http://www.vargabar.com</a> </p> </div> </div>', 'name': 'Varga Bar', 'lat': 39.946212231855064, 'lng': -75.1578756272796}, {'content': '<div id="content"> <h1>Dilworth Park Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Dilworth_Cafe">@Dilworth_Cafe</a>: Stop by @AirGrille_PHL today to try out the new menu from @Brulee_Catering \'s chefs. #DilworthPark #PHL #OpeninPHL</p> <p style="font-size: 10px;">Mon Apr 02 15:41 | <a target="_blank" href="https://twitter.com/statuses/980832594181918721">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1400+John+F+Kennedy+Blvd%2C+Philadelphia%2C+PA+19107" target="_blank">1400 John F Kennedy Blvd, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="https://centercityphila.org/parks/dilworth-park">https://centercityphila.org/parks/dilworth-park</a> </p> </div> </div>', 'name': 'Dilworth Park Cafe', 'lat': 39.953026, 'lng': -75.16446}, {'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Yes we are open today, #EASTERSUNDAY2018. Hop on down and spend this holiday with us. #iLOVEWOODYS 5PM-2AM… https://t.co/NX6tbhX2D3</p> <p style="font-size: 10px;">Sun Apr 01 19:45 | <a target="_blank" href="https://twitter.com/statuses/980531742854537217">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'name': "Woody's", 'lat': 39.94873969990853, 'lng': -75.16220781624595}, {'content': '<div id="content"> <h1>Saint Benjamin Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/stbenjaminbrew">@stbenjaminbrew</a>: We are #OpeninPHL @StBenjamins ! #HappyEaster #HappyPassover #SundayFunday https://t.co/FQqZlAVhZp</p> <p style="font-size: 10px;">Sun Apr 01 17:29 | <a target="_blank" href="https://twitter.com/statuses/980497448065011713">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1710-14+N+5th+St+%28Cecil+B+Moore%29%2C+Philadelphia%2C+PA+19122" target="_blank">1710-14 N 5th St (Cecil B Moore), Philadelphia, PA 19122</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Saint Benjamin Brewing Company', 'lat': 39.97727552620923, 'lng': -75.14343764555336}, {'content': '<div id="content"> <h1>Green Aisle Grocery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GreenAisle">@GreenAisle</a>: We are #OpeninPHL and have what you need for a perfect Easter brunch 💐 #greenaisle #brunch #eggs… https://t.co/dC27yMBKjN</p> <p style="font-size: 10px;">Sun Apr 01 16:32 | <a target="_blank" href="https://twitter.com/statuses/980483155126702080">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2241+Grays+Ferry+Ave%2C+Philadelphia%2C+PA+19146" target="_blank">2241 Grays Ferry Ave, Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.greenaislegrocery.com/">http://www.greenaislegrocery.com/</a> </p> </div> </div>', 'name': 'Green Aisle Grocery', 'lat': 39.94478586732886, 'lng': -75.18001977753168}, {'content': '<div id="content"> <h1>2nd Street Brewhouse</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/2ndstbrewhouse">@2ndstbrewhouse</a>: Happy Easter!! Come grab a beer! #openinphl #craftbeer #happyeaster #pennsport https://t.co/lZLGZ2Gx3C</p> <p style="font-size: 10px;">Sun Apr 01 15:54 | <a target="_blank" href="https://twitter.com/statuses/980473495644753920">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7964<br/> Directions: <a href="https://maps.google.com?daddr=1700+S+2nd+St+%28at+Morris+St.%29%2C+Philadelphia%2C+PA+19148" target="_blank">1700 S 2nd St (at Morris St.), Philadelphia, PA 19148</a><br/> Website: <a target="_blank" href="http://2ndstreetbrewhouse.com">http://2ndstreetbrewhouse.com</a> </p> </div> </div>', 'name': '2nd Street Brewhouse', 'lat': 39.92667786916592, 'lng': -75.14930726924231}, {'content': '<div id="content"> <h1>Silence Dogood\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/dogoodstavern">@dogoodstavern</a>: In #HistoricDistrict or #OldCity &amp; looking for a place to go today to hydrate or for a bite to eat? We\'re… https://t.co/bdltEtyQjT</p> <p style="font-size: 10px;">Sun Apr 01 15:21 | <a target="_blank" href="https://twitter.com/statuses/980465057376145408">Read on Twitter</a></p> <hr> <p> Phone: (215) 923-1400<br/> Directions: <a href="https://maps.google.com?daddr=216+Market+St+%282nd+Street%29%2C+Philadelphia%2C+PA+19106" target="_blank">216 Market St (2nd Street), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.silencedogoodstavern.com">http://www.silencedogoodstavern.com</a> </p> </div> </div>', 'name': "Silence Dogood's", 'lat': 39.94996766140579, 'lng': -75.14435219439879}, {'content': '<div id="content"> <h1>José Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/JosePistolas">@JosePistolas</a>: We are #openinphl in case there was any confusion - let’s Sunday together!</p> <p style="font-size: 10px;">Sun Apr 01 14:03 | <a target="_blank" href="https://twitter.com/statuses/980445535139229696">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-4101<br/> Directions: <a href="https://maps.google.com?daddr=263+S+15th+St+%28at+Manning+St%29%2C+Philadelphia%2C+PA+19102" target="_blank">263 S 15th St (at Manning St), Philadelphia, PA 19102</a><br/> Website: <a target="_blank" href="http://www.josepistolas.com/">http://www.josepistolas.com/</a> </p> </div> </div>', 'name': "José Pistola's", 'lat': 39.947505895213666, 'lng': -75.16617507121423}, {'content': '<div id="content"> <h1>Prohibition Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ProhibitionTR">@ProhibitionTR</a>: Sunday Brunch kicks off at 11am with DJ Seef! #prohibitiontaproom #djbrunch #openinphl https://t.co/KCcerLs4HP</p> <p style="font-size: 10px;">Sun Apr 01 13:00 | <a target="_blank" href="https://twitter.com/statuses/980429753168646145">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-1818<br/> Directions: <a href="https://maps.google.com?daddr=501+N+13th+St%2C+Philadelphia%2C+PA+19123" target="_blank">501 N 13th St, Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://theprohibitiontaproom.com">http://theprohibitiontaproom.com</a> </p> </div> </div>', 'name': 'Prohibition Tap Room', 'lat': 39.961219828446765, 'lng': -75.15947261828937}, {'content': '<div id="content"> <h1>Urban Front Pilates</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/UrbnfrntPILATES">@UrbnfrntPILATES</a>: Happy Easter! #openinphl #seeyouonthemat #pilates #everybunnyisdoingit https://t.co/B6nd0Oowo3</p> <p style="font-size: 10px;">Sun Apr 01 12:31 | <a target="_blank" href="https://twitter.com/statuses/980422307062730753">Read on Twitter</a></p> <hr> <p> Phone: (215) 564-4410<br/> Directions: <a href="https://maps.google.com?daddr=1700+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1700 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://urbanfrontpilates.com/">http://urbanfrontpilates.com/</a> </p> </div> </div>', 'name': 'Urban Front Pilates', 'lat': 39.9508005964914, 'lng': -75.16899107741666}, {'content': '<div id="content"> <h1>Sweet Freedom Bakery</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/sfbakery">@sfbakery</a>: #openinphl #sundayfunday#veganeaster #glutenfreeeaster #selfiesunday via https://t.co/zYOGqC77Lh https://t.co/Y7UtwpXq3E</p> <p style="font-size: 10px;">Sun Apr 01 10:47 | <a target="_blank" href="https://twitter.com/statuses/980396346824888327">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1899<br/> Directions: <a href="https://maps.google.com?daddr=1424+South+St+%28at+15th+St.%29%2C+Philadelphia%2C+PA+19146" target="_blank">1424 South St (at 15th St.), Philadelphia, PA 19146</a><br/> Website: <a target="_blank" href="http://www.sweetfreedombakery.com">http://www.sweetfreedombakery.com</a> </p> </div> </div>', 'name': 'Sweet Freedom Bakery', 'lat': 39.94378257690332, 'lng': -75.1664188069332}, {'content': '<div id="content"> <h1>Trophy Bikes</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/trophybikes">@trophybikes</a>: It’s Saturday, and we’re #OPENINPHL from 10-4 today. • Closed tomorrow, then back on Monday!… https://t.co/NDWteIL4HK</p> <p style="font-size: 10px;">Sat Mar 31 13:04 | <a target="_blank" href="https://twitter.com/statuses/980068319163162630">Read on Twitter</a></p> <hr> <p> Phone: (215) 592-1234<br/> Directions: <a href="https://maps.google.com?daddr=712+N+2nd+St+%28Wildey+Street%29%2C+Philadelphia%2C+PA+19123" target="_blank">712 N 2nd St (Wildey Street), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="https://trophybikes.com/">https://trophybikes.com/</a> </p> </div> </div>', 'name': 'Trophy Bikes', 'lat': 39.9623339735277, 'lng': -75.14105084172222}, {'content': '<div id="content"> <h1>Wagner Free Institute of Science</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/wagnerinstitute">@wagnerinstitute</a>: Open today just like the jaws of this Florida Alligator!! #openinPHL https://t.co/dIlSa3ArFH</p> <p style="font-size: 10px;">Fri Mar 30 13:38 | <a target="_blank" href="https://twitter.com/statuses/979714412855611392">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1700+W+Montgomery+Ave%2C+Philadelphia%2C+PA+19121" target="_blank">1700 W Montgomery Ave, Philadelphia, PA 19121</a><br/> Website: <a target="_blank" href="http://www.wagnerfreeinstitute.org/">http://www.wagnerfreeinstitute.org/</a> </p> </div> </div>', 'name': 'Wagner Free Institute of Science', 'lat': 39.98091730304039, 'lng': -75.16274086580007}, {'content': '<div id="content"> <h1>Standard Tap</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/StandardTap">@StandardTap</a>: Porch is open y\'all! Brewery ARS is our Featured Brewery for Happy Hour! We are also hosting Art Wars tonight at 7!… https://t.co/O26UB4uiWF</p> <p style="font-size: 10px;">Thu Mar 29 20:48 | <a target="_blank" href="https://twitter.com/statuses/979460208228556800">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-0630<br/> Directions: <a href="https://maps.google.com?daddr=901+N+2nd+St+%28at+Poplar+St.%29%2C+Philadelphia%2C+PA+19123" target="_blank">901 N 2nd St (at Poplar St.), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://standardtap.com/">http://standardtap.com/</a> </p> </div> </div>', 'name': 'Standard Tap', 'lat': 39.96406390664877, 'lng': -75.14068257383308}, {'content': '<div id="content"> <h1>Voyeur</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/VoyeurNightclub">@VoyeurNightclub</a>: #AZNJAKE on the mainfloor starting at midnight... #voyeurnightclub #WednesdayNight #OpeninPHL https://t.co/Z8rBLSARKH</p> <p style="font-size: 10px;">Thu Mar 29 00:48 | <a target="_blank" href="https://twitter.com/statuses/979158279170478081">Read on Twitter</a></p> <hr> <p> Phone: (215) 735-5772<br/> Directions: <a href="https://maps.google.com?daddr=1221+Saint+James+St+%28btwn+S+13th+%26+S+Camac+St%29%2C+Philadelphia%2C+PA+19107" target="_blank">1221 Saint James St (btwn S 13th & S Camac St), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.voyeurnightclub.com">http://www.voyeurnightclub.com</a> </p> </div> </div>', 'name': 'Voyeur', 'lat': 39.948394683746855, 'lng': -75.16172330266902}];

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