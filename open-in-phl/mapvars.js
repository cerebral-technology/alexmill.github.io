
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.9490511, 'lng': -75.1464632, 'name': 'chemheritage', 'content': '<div id="content"> <h1>chemheritage</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ChemHeritage">@ChemHeritage</a>: Starting today, the Museum at CHF is open on Saturdays! #OpenInPHL https://t.co/zLtVqEcW7h https://t.co/d3MYecPz2X</p> <p style="font-size: 10px;">Sat Jul 09 13:01 | <a target="_blank" href="https://twitter.com/statuses/751763272710389760">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=877.CHF.4550+The+Conference+Center+at+CHF+315+Chestnut+Street+Philadelphia%2C+PA+19106-2702" target="_blank">877.CHF.4550 The Conference Center at CHF 315 Chestnut Street Philadelphia, PA 19106-2702</a><br/> Website: <a target="_blank" href="http://www.chemheritage.org/">http://www.chemheritage.org/</a> </p> </div> </div>'}, {'lat': 39.94857438494993, 'lng': -75.17420047593134, 'name': 'Twenty Manning Grill', 'content': '<div id="content"> <h1>Twenty Manning Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/TwentyManning">@TwentyManning</a>: We\'re #OpenInPHL Come try our Firecracker cocktail. $7 all night. Also, ask about our sparkling wines by the glass. https://t.co/lqkrrqbf07</p> <p style="font-size: 10px;">Mon Jul 04 21:32 | <a target="_blank" href="https://twitter.com/statuses/750079808093040640">Read on Twitter</a></p> <hr> <p> Phone: (215) 731-0900<br/> Directions: <a href="https://maps.google.com?daddr=261+S+20th+St+%28at+Spruce+St%29%2C+Philadelphia%2C+PA+19103" target="_blank">261 S 20th St (at Spruce St), Philadelphia, PA 19103</a><br/> Website: <a target="_blank" href="http://www.twentymanninggrill.com">http://www.twentymanninggrill.com</a> </p> </div> </div>'}, {'lat': 39.96893097540645, 'lng': -75.13511180877686, 'name': "Sancho Pistola's", 'content': '<div id="content"> <h1>Sancho Pistola\'s</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Sancho_Pistolas">@Sancho_Pistolas</a>: Red, White &amp; Blueberry Margs🇺🇸 #openinphl https://t.co/nMomFYcHmo</p> <p style="font-size: 10px;">Mon Jul 04 20:35 | <a target="_blank" href="https://twitter.com/statuses/750065484792487936">Read on Twitter</a></p> <hr> <p> Phone: (267) 324-3530<br/> Directions: <a href="https://maps.google.com?daddr=19+W+Girard+Ave+%28at+Leopard+St%29%2C+Philadelphia%2C+PA+19123" target="_blank">19 W Girard Ave (at Leopard St), Philadelphia, PA 19123</a><br/> Website: <a target="_blank" href="http://www.sanchopistolas.com">http://www.sanchopistolas.com</a> </p> </div> </div>'}, {'lat': 39.969132, 'lng': -75.134629, 'name': 'ROOT restaurant + wine bar', 'content': '<div id="content"> <h1>ROOT restaurant + wine bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/ROOTrestaurant">@ROOTrestaurant</a>: Happy 4th of July! We\'re offering happy hour all night! 4-close. #openinphl 🇺🇸 #fishtown #rootphilly #4thofjuly https://t.co/Vni7MZVZOW</p> <p style="font-size: 10px;">Mon Jul 04 19:37 | <a target="_blank" href="https://twitter.com/statuses/750050997851004928">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=1206+Frankford+Ave+%28at+W+Girard+Ave%29%2C+Philadelphia%2C+PA+19125" target="_blank">1206 Frankford Ave (at W Girard Ave), Philadelphia, PA 19125</a><br/> Website: <a target="_blank" href="http://rootrestaurant.com">http://rootrestaurant.com</a> </p> </div> </div>'}];

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