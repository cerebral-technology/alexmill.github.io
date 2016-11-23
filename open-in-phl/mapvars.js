
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.94856595, 'lng': -75.14572444999999, 'content': '<div id="content"> <h1>Drink Philly</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DrinkPhilly">@DrinkPhilly</a>: Where To Drink On Thanksgiving Day in Philadelphia #OpenInPHL https://t.co/rgvCxG8kLH https://t.co/vHNURrpZ06</p> <p style="font-size: 10px;">Wed Nov 23 17:11 | <a target="_blank" href="https://twitter.com/statuses/801473369782812672">Read on Twitter</a></p> <hr> <p> Phone: (267) 761-9692<br/> Directions: <a href="https://maps.google.com?daddr=239+Chestnut+St.+2nd+Floor+Unit+B+%283rd+and+Chestnut%29%2C+Philadelphia%2C+PA+19106" target="_blank">239 Chestnut St. 2nd Floor Unit B (3rd and Chestnut), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'name': 'Drink Philly'}, {'lat': 39.96750024480156, 'lng': -75.17528057098389, 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #happythankgiving more pies please #chocolatepecanpie #openinphl @ London Grill https://t.co/gXKgTbv3ho</p> <p style="font-size: 10px;">Tue Nov 22 20:07 | <a target="_blank" href="https://twitter.com/statuses/801155086499999744">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>', 'name': 'London Grill'}, {'lat': 39.949555580543404, 'lng': -75.14394917313429, 'content': '<div id="content"> <h1>Cuba Libre Restaurant & Rum Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CubaLibrePHL">@CubaLibrePHL</a>: We will be closed on #Thanksgiving, but open all day &amp; night #ThanksgivingEve! Paella before the party w/… https://t.co/dhAlQ6Iggy</p> <p style="font-size: 10px;">Tue Nov 22 15:01 | <a target="_blank" href="https://twitter.com/statuses/801078136016236544">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-0666<br/> Directions: <a href="https://maps.google.com?daddr=10+S+2nd+St+%28btwn+Market+St+%26+Chestnut+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">10 S 2nd St (btwn Market St & Chestnut St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://cubalibrerestaurant.com">http://cubalibrerestaurant.com</a> </p> </div> </div>', 'name': 'Cuba Libre Restaurant & Rum Bar'}, {'lat': 39.94174323542434, 'lng': -75.15084700502142, 'content': '<div id="content"> <h1>South Street</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/officialsouthst">@officialsouthst</a>: Congrats @SerpicoOnSouth @serpico_p on being named a top spot to celebrate Thanksgiving #openinphl https://t.co/gl1VzBJjpe</p> <p style="font-size: 10px;">Tue Nov 22 04:18 | <a target="_blank" href="https://twitter.com/statuses/800916326512521216">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=South+St%2C+Philadelphia%2C+PA+19147" target="_blank">South St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://southstreet.com/">http://southstreet.com/</a> </p> </div> </div>', 'name': 'South Street'}, {'lat': 39.94868850708008, 'lng': -75.14585876464844, 'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: Our new pastry chef has a special holiday surprise for you! Homemade egg nog cheesecake #Thanksgiving #openinphl https://t.co/0gT2UXcHgf</p> <p style="font-size: 10px;">Tue Nov 22 03:37 | <a target="_blank" href="https://twitter.com/statuses/800905960319492096">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>', 'name': 'The Little Lion'}];

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