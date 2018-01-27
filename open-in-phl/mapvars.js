
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.948952, 'content': '<div id="content"> <h1>globar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/globarphl">@globarphl</a>: Get a #HeartOn this #FridayNight at #WoodysPhilly! #5rooms1Cover #OpenInPHL #Nightclubbing #LGBTQ #gayborhood https://t.co/ADFKGqvrdW</p> <p style="font-size: 10px;">Sat Jan 27 00:00 | <a target="_blank" href="https://twitter.com/statuses/957040476955332610">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=Philadelphia%2C+PA" target="_blank">Philadelphia, PA</a><br/> Website: <a target="_blank" href="http://www.globar.woodysbar.com/">http://www.globar.woodysbar.com/</a> </p> </div> </div>', 'lng': -75.162052, 'name': 'globar'}, {'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: Get a #HeartOn this #FridayNight at #WoodysPhilly! #5rooms1Cover #OpenInPHL #Nightclubbing #LGBTQ #gayborhood https://t.co/USSIF9yEiw</p> <p style="font-size: 10px;">Fri Jan 26 23:59 | <a target="_blank" href="https://twitter.com/statuses/957040421540126722">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>', 'lng': -75.16220781624595, 'name': "Woody's"}, {'lat': 39.95219811754151, 'content': '<div id="content"> <h1>Betsy Ross House</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/BetsyRossHouse">@BetsyRossHouse</a>: Even if the federal government doesn’t open tomorrow, the Betsy Ross House will. #OpenInPHL Tuesday through Sunday. https://t.co/f7TzQiOn13</p> <p style="font-size: 10px;">Mon Jan 22 19:55 | <a target="_blank" href="https://twitter.com/statuses/955529461944016896">Read on Twitter</a></p> <hr> <p> Phone: (215) 686-1254<br/> Directions: <a href="https://maps.google.com?daddr=239+Arch+St+%28btwn+Bread+St+%26+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">239 Arch St (btwn Bread St & 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://historicphiladelphia.org/betsy-ross-house/what-to-see/">http://historicphiladelphia.org/betsy-ross-house/what-to-see/</a> </p> </div> </div>', 'lng': -75.14475868640321, 'name': 'Betsy Ross House'}, {'lat': 39.96735351323819, 'content': '<div id="content"> <h1>Ali\'s Wagon</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/AlisWagon">@AlisWagon</a>: We are #openinPHL today💫 Need a cute travel ready gift? We love these shea butter soaps &amp; hand… https://t.co/q7CQsmMnF3</p> <p style="font-size: 10px;">Sun Jan 21 15:32 | <a target="_blank" href="https://twitter.com/statuses/955100735322062853">Read on Twitter</a></p> <hr> <p> Phone: (215) 787-0611<br/> Directions: <a href="https://maps.google.com?daddr=2017+Fairmount+Ave+%2820th+and+Fairmount%29%2C+Philadelphia%2C+PA+19130" target="_blank">2017 Fairmount Ave (20th and Fairmount), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://aliswagon.com">http://aliswagon.com</a> </p> </div> </div>', 'lng': -75.17096870392517, 'name': "Ali's Wagon"}, {'lat': 39.94610247783623, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: We are #OpenInPHL. Come visit the Museum today! https://t.co/pGmjueP98u https://t.co/ar5ywm2Kdg</p> <p style="font-size: 10px;">Sun Jan 21 15:26 | <a target="_blank" href="https://twitter.com/statuses/955099347783507968">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lng': -75.14019638734368, 'name': 'Independence Seaport Museum'}];

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