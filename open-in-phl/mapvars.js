
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Girard brassiere & bruncherie</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/GirardOnGirard">@GirardOnGirard</a>: Hey y\'all, we will be #openinPHL on #memorialday (5/30) for #brunch. You can find us here from 9-3! #fishtown #byob https://t.co/BimL3VNB43</p> <p style="font-size: 10px;">Wed May 25 13:47 | <a target="_blank" href="https://twitter.com/statuses/735467328608034817">Read on Twitter</a></p> <hr> <p> Phone: (267) 457-2486<br/> Directions: <a href="https://maps.google.com?daddr=300+E+Girard+Ave%2C+Philadelphia%2C+PA+19125" target="_blank">300 E Girard Ave, Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://www.girardongirard.com">http://www.girardongirard.com</a> </p> </div> </div>', 'lat': 39.96978415108942, 'name': 'Girard brassiere & bruncherie', 'lng': -75.13168624908334}];

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