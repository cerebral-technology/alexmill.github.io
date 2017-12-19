
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.95133267106301, 'content': '<div id="content"> <h1>Home Sweet Homebrew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HomeSwtHomeBrew">@HomeSwtHomeBrew</a>: #OpeninPHL before &amp; after the Philadelphia Eagles game! Go Birds! Time for you to make more beer!</p> <p style="font-size: 10px;">Sun Dec 17 17:45 | <a target="_blank" href="https://twitter.com/statuses/942450588347981824">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2008+Sansom+St+%28at+20th+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">2008 Sansom St (at 20th St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://homesweethomebrew.com">http://homesweethomebrew.com</a> </p> </div> </div>', 'lng': -75.17401059383587, 'name': 'Home Sweet Homebrew'}, {'lat': 39.95612587780559, 'content': '<div id="content"> <h1>Good Good Comedy Theatre</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/goodgoodcomedy">@goodgoodcomedy</a>: Enjoy refreshing new comedy + refreshing live music from @SecretNFriends - only $5 tonight at midnight on #DARLINGS… https://t.co/8wjFbkYR4Y</p> <p style="font-size: 10px;">Fri Dec 15 23:48 | <a target="_blank" href="https://twitter.com/statuses/941817175098105856">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=215+N+11th+St%2C+Philadelphia%2C+PA+19107" target="_blank">215 N 11th St, Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="https://goodgoodcomedy.com/">https://goodgoodcomedy.com/</a> </p> </div> </div>', 'lng': -75.1572813438731, 'name': 'Good Good Comedy Theatre'}, {'lat': 39.950839073983005, 'content': '<div id="content"> <h1>Wister BYOB</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/WisterBYOB">@WisterBYOB</a>: Wister BYOB is #OpenInPHL for service this evening! Bring your bottle and enjoy the glittery snow from the comfort… https://t.co/AIFUbGDjgM</p> <p style="font-size: 10px;">Fri Dec 15 23:14 | <a target="_blank" href="https://twitter.com/statuses/941808623801466880">Read on Twitter</a></p> <hr> <p> Phone: (267) 239-5900<br/> Directions: <a href="https://maps.google.com?daddr=26+N+3rd+St%2C+Philadelphia%2C+PA+19106" target="_blank">26 N 3rd St, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.14577627182007, 'name': 'Wister BYOB'}, {'lat': 39.95053654349037, 'content': '<div id="content"> <h1>Philadelphia Runner</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/PhillyRun">@PhillyRun</a>: Our shops are #openinphl but if you can’t make it in, you can order gift cards online! https://t.co/S2rozSSblC https://t.co/TPf6STgfDr</p> <p style="font-size: 10px;">Fri Dec 15 21:53 | <a target="_blank" href="https://twitter.com/statuses/941788441662156802">Read on Twitter</a></p> <hr> <p> Phone: (215) 972-8333<br/> Directions: <a href="https://maps.google.com?daddr=1601+Sansom+St%2C+Philadelphia%2C+PA+19103" target="_blank">1601 Sansom St, Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.philadelphiarunner.com">http://www.philadelphiarunner.com</a> </p> </div> </div>', 'lng': -75.1674454719403, 'name': 'Philadelphia Runner'}, {'lat': 39.926971, 'content': '<div id="content"> <h1>Newbold Brew</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/NewboldBrew">@NewboldBrew</a>: Don’t panic, #SouthPhilly. We’re open until 10pm tonight. (11am - 10pm all weekend too!) #OpenInPHL… https://t.co/immoFeig7l</p> <p style="font-size: 10px;">Fri Dec 15 21:01 | <a target="_blank" href="https://twitter.com/statuses/941775360408113152">Read on Twitter</a></p> <hr> <p> Phone: (215) 339-5177<br/> Directions: <a href="https://maps.google.com?daddr=1900+S+15th+St+%28Mifflin%29%2C+Philadelphia%2C+PA+19145" target="_blank">1900 S 15th St (Mifflin), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.newboldbrew.com">http://www.newboldbrew.com</a> </p> </div> </div>', 'lng': -75.170942, 'name': 'Newbold Brew'}, {'lat': 39.927221, 'content': '<div id="content"> <h1>South Philadelphia Tap Room</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SPTapRoom">@SPTapRoom</a>: Happy Hour welcoming committee? https://t.co/ipVnd6TbqN #OpenInPHL #6ABCAction</p> <p style="font-size: 10px;">Fri Dec 15 20:57 | <a target="_blank" href="https://twitter.com/statuses/941774225278427137">Read on Twitter</a></p> <hr> <p> Phone: (215) 271-7787<br/> Directions: <a href="https://maps.google.com?daddr=1509+Mifflin+St+%28btwn+15th+St+%26+16th+St%29%2C+Philadelphia%2C+PA+19145" target="_blank">1509 Mifflin St (btwn 15th St & 16th St), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.southphiladelphiataproom.com">http://www.southphiladelphiataproom.com</a> </p> </div> </div>', 'lng': -75.1713124, 'name': 'South Philadelphia Tap Room'}, {'lat': 39.921655117675286, 'content': '<div id="content"> <h1>Taproom on 19th</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TaproomOn19th">@TaproomOn19th</a>: How do you snow showers? Swing by @taproomon19th ! Happy Hour 5-7, 1/2 Price Wings and General Tso Cauliflower ! $2… https://t.co/h0G4JAxheB</p> <p style="font-size: 10px;">Fri Dec 15 18:39 | <a target="_blank" href="https://twitter.com/statuses/941739472248627201">Read on Twitter</a></p> <hr> <p> Phone: (267) 687-7817<br/> Directions: <a href="https://maps.google.com?daddr=2400+S+19th+St+%28Ritner%29%2C+Philadelphia%2C+PA+19145" target="_blank">2400 S 19th St (Ritner), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://www.taproomon19th.com">http://www.taproomon19th.com</a> </p> </div> </div>', 'lng': -75.17856279676369, 'name': 'Taproom on 19th'}];

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