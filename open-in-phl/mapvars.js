
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'name': 'Independence Seaport Museum', 'lng': -75.14019638734368, 'lat': 39.94610247783623, 'content': '<div id="content"> <h1>Independence Seaport Museum</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/phillyseaport">@phillyseaport</a>: Exploration, science and historic ships are a great way to kick-off the holiday season. We are open today!… https://t.co/Ioz8Wh1P1T</p> <p style="font-size: 10px;">Fri Nov 24 15:45 | <a target="_blank" href="https://twitter.com/statuses/934085454592225280">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-5439<br/> Directions: <a href="https://maps.google.com?daddr=211+S+Columbus+Blvd%2C+Philadelphia%2C+PA+19106" target="_blank">211 S Columbus Blvd, Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://www.phillyseaport.org/">http://www.phillyseaport.org/</a> </p> </div> </div>'}, {'name': "Woody's", 'lng': -75.16220781624595, 'lat': 39.94873969990853, 'content': '<div id="content"> <h1>Woody\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/woodysphilly">@woodysphilly</a>: NO COVER ALL NIGHT- Woody\'s will be opening later, 8PM, so our staff can spend time with theirs. But then all madne… https://t.co/I6hOhXLWdb</p> <p style="font-size: 10px;">Thu Nov 23 19:17 | <a target="_blank" href="https://twitter.com/statuses/933776560179564544">Read on Twitter</a></p> <hr> <p> Phone: (215) 545-1893<br/> Directions: <a href="https://maps.google.com?daddr=202+S+13th+St+%28at+Walnut+St.%29%2C+Philadelphia%2C+PA+19107" target="_blank">202 S 13th St (at Walnut St.), Philadelphia, PA 19107</a><br/> Website: <a target="_blank" href="http://www.woodysbar.com/">http://www.woodysbar.com/</a> </p> </div> </div>'}];

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