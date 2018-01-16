
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'The Belgian Cafe', 'lat': 39.96531090100131, 'lng': -75.17252802654721, 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: It\'s #MLKDay and we are #openinphl all day today. Stop in for late afternoon lunch or beer snack, such as pierogies… https://t.co/zFmDT59tGI</p> <p style="font-size: 10px;">Mon Jan 15 16:27 | <a target="_blank" href="https://twitter.com/statuses/952940231480762373">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}, {'name': 'Independence Seaport Museum', 'lat': 39.94610247783623, 'lng': -75.14019638734368, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: The Museum and historic ships are open today. Discover history, science, and more. https://t.co/pGmjuf6K02… https://t.co/vhUJV4CwJ2</p> <p style="font-size: 10px;">Mon Jan 15 15:05 | <a target="_blank" href="https://twitter.com/statuses/952919554128166912">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>'}, {'name': 'The Chemical Heritage Foundation', 'lat': 39.948726962168095, 'lng': -75.14643250883483, 'content': '<div id="content"> <h1>The Chemical Heritage Foundation</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: The museum will be open on Monday, January 15. The Othmer Library and CHF offices will be closed in observance of… https://t.co/zhqvGKbYjk</p> <p style="font-size: 10px;">Mon Jan 15 12:30 | <a target="_blank" href="https://twitter.com/statuses/952880629640761345">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-2222<br/> Directions: <a href="https://maps.google.com?daddr=315+Chestnut+St+%28btwn+3rd+%26+4th+Sts%29%2C+Philadelphia%2C+PA+19106" target="_blank">315 Chestnut St (btwn 3rd & 4th Sts), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://chemheritage.org">http://chemheritage.org</a> </p> </div> </div>'}, {'name': 'Bufad', 'lat': 39.96196447013848, 'lng': -75.15928097205814, 'content': '<div id="content"> <h1>Bufad</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BufadPizza">@BufadPizza</a>: We\'re re-opening at 5pm - however our phone system is still down! Please email us for reservations or use… https://t.co/3t0pCCsqEx</p> <p style="font-size: 10px;">Sat Jan 13 21:28 | <a target="_blank" href="https://twitter.com/statuses/952291178602487809">Read on Twitter</a></p> <hr> <p> Phone: (215) 238-9311<br/> Directions: <a href="https://maps.google.com?daddr=1240+Spring+Garden+St+%28at+13th+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">1240 Spring Garden St (at 13th St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://bufadpizza.com">http://bufadpizza.com</a> </p> </div> </div>'}, {'name': 'Home Sweet Homebrew', 'lat': 39.95133267106301, 'lng': -75.17401059383587, 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: #FlyEaglesFly #OpeninPHL to pick up a batch for this long weekend. You know you\'re gonna need beer. (and, yes,... https://t.co/8BnPyPKp0G</p> <p style="font-size: 10px;">Fri Jan 12 15:27 | <a target="_blank" href="https://twitter.com/statuses/951837962785914880">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>'}];

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