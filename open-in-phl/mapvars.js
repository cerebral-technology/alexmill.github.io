
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Yards Brewing Company</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/yardsbrew">@yardsbrew</a>: Yo, people with the day off - come hang out. Yards is #OpeninPHL 10/9 until 7pm. https://t.co/BsJcDUwTMH</p> <p style="font-size: 10px;">Mon Oct 09 16:35 | <a target="_blank" href="https://twitter.com/statuses/917428316868628480">Read on Twitter</a></p> <hr> <p> Phone: (215) 634-2600<br/> Directions: <a href="https://maps.google.com?daddr=901+N+Delaware+Ave+%28at+Poplar+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">901 N Delaware Ave (at Poplar St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.yardsbrewing.com">http://www.yardsbrewing.com</a> </p> </div> </div>', 'lat': 39.96239308799966, 'lng': -75.13595424084652, 'name': 'Yards Brewing Company'}, {'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: It\'s a great day for discovery. Visit the Museum for exploration around every wheel and corner.… https://t.co/fvXTM0n7jI</p> <p style="font-size: 10px;">Mon Oct 09 14:45 | <a target="_blank" href="https://twitter.com/statuses/917400513813078016">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>', 'lat': 39.94610247783623, 'lng': -75.14019638734368, 'name': 'Independence Seaport Museum'}, {'content': '<div id="content"> <h1>High Street on Market</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/HighStPhilly">@HighStPhilly</a>: We’ve extended the weekend and are serving brunch today from 8am until 3:30pm! #brunchgoals #columbusday #openinphl https://t.co/lCVEXT87r6</p> <p style="font-size: 10px;">Mon Oct 09 12:00 | <a target="_blank" href="https://twitter.com/statuses/917358994888388615">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=308+Market+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">308 Market St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://highstreetonmarket.com">http://highstreetonmarket.com</a> </p> </div> </div>', 'lat': 39.95021633286155, 'lng': -75.14617878543162, 'name': 'High Street on Market'}, {'content': '<div id="content"> <h1>Philadelphia Museum of Art</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/philamuseum">@philamuseum</a>: The Museum is OPEN this Monday, Oct 9, for Columbus Day. Off from work or school? Stop by and visit your favorite w… https://t.co/PmZIsCVy8a</p> <p style="font-size: 10px;">Fri Oct 06 23:00 | <a target="_blank" href="https://twitter.com/statuses/916437945023913984">Read on Twitter</a></p> <hr> <p> Phone: (215) 763-8100<br/> Directions: <a href="https://maps.google.com?daddr=2600+Benjamin+Franklin+Pkwy%2C+Philadelphia%2C+PA+19130" target="_blank">2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.philamuseum.org">http://www.philamuseum.org</a> </p> </div> </div>', 'lat': 39.965705518332456, 'lng': -75.18106848275961, 'name': 'Philadelphia Museum of Art'}];

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