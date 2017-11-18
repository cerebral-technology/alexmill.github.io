
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.96531090100131, 'lng': -75.17252802654721, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: #OpeninPHL @Philly_Marathon #Brunch #Fairmount @philamuseum</p> <p style="font-size: 10px;">Sat Nov 18 15:22 | <a target="_blank" href="https://twitter.com/statuses/931905393697218561">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}, {'lat': 39.94139787220309, 'lng': -75.14720355648697, 'name': 'Lovash Indian Restaurant & Bar', 'content': '<div id="content"> <h1>Lovash Indian Restaurant & Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Lovash_Philly">@Lovash_Philly</a>: #goodeats #igfood #foodstagram #foodbloggers #eatfamous #foodblog #hungry #indianstyle #Philadelphia #saturday… https://t.co/ahyFsAt5O0</p> <p style="font-size: 10px;">Fri Nov 17 19:43 | <a target="_blank" href="https://twitter.com/statuses/931608740461125632">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-3881<br/> Directions: <a href="https://maps.google.com?daddr=236+South+Street+%28btwn+2nd+%26+3rd+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">236 South Street (btwn 2nd & 3rd St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://lovashrestaurant.com">http://lovashrestaurant.com</a> </p> </div> </div>'}, {'lat': 39.96740055333233, 'lng': -75.17541492227016, 'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #collards #Thanksgiving #openinphl #fairmountavenue #soulfood https://t.co/EkxGm5yofG</p> <p style="font-size: 10px;">Tue Nov 14 17:16 | <a target="_blank" href="https://twitter.com/statuses/930484568406323200">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>'}];

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