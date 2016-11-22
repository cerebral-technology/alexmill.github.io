
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'content': '<div id="content"> <h1>Drink Philly</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/DrinkPhilly">@DrinkPhilly</a>: Things We Are Thankful For: That These Bars Are #OpenInPHL on Thanksgiving Day https://t.co/iTJRxypqks</p> <p style="font-size: 10px;">Tue Nov 22 17:10 | <a target="_blank" href="https://twitter.com/statuses/801110716975497216">Read on Twitter</a></p> <hr> <p> Phone: (267) 761-9692<br/> Directions: <a href="https://maps.google.com?daddr=239+Chestnut+St.+2nd+Floor+Unit+B+%283rd+and+Chestnut%29%2C+Philadelphia%2C+PA+19106" target="_blank">239 Chestnut St. 2nd Floor Unit B (3rd and Chestnut), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="False">False</a> </p> </div> </div>', 'lng': -75.14572444999999, 'lat': 39.94856595, 'name': 'Drink Philly'}, {'content': '<div id="content"> <h1>Cuba Libre Restaurant & Rum Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/CubaLibrePHL">@CubaLibrePHL</a>: We will be closed on #Thanksgiving, but open all day &amp; night #ThanksgivingEve! Paella before the party w/… https://t.co/dhAlQ6Iggy</p> <p style="font-size: 10px;">Tue Nov 22 15:01 | <a target="_blank" href="https://twitter.com/statuses/801078136016236544">Read on Twitter</a></p> <hr> <p> Phone: (215) 627-0666<br/> Directions: <a href="https://maps.google.com?daddr=10+S+2nd+St+%28btwn+Market+St+%26+Chestnut+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">10 S 2nd St (btwn Market St & Chestnut St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="http://cubalibrerestaurant.com">http://cubalibrerestaurant.com</a> </p> </div> </div>', 'lng': -75.14394917313429, 'lat': 39.949555580543404, 'name': 'Cuba Libre Restaurant & Rum Bar'}, {'content': '<div id="content"> <h1>South Street</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/officialsouthst">@officialsouthst</a>: Congrats @SerpicoOnSouth @serpico_p on being named a top spot to celebrate Thanksgiving #openinphl https://t.co/gl1VzBJjpe</p> <p style="font-size: 10px;">Tue Nov 22 04:18 | <a target="_blank" href="https://twitter.com/statuses/800916326512521216">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=South+St%2C+Philadelphia%2C+PA+19147" target="_blank">South St, Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://southstreet.com/">http://southstreet.com/</a> </p> </div> </div>', 'lng': -75.15084700502142, 'lat': 39.94174323542434, 'name': 'South Street'}, {'content': '<div id="content"> <h1>The Little Lion</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LittleLionPHL">@LittleLionPHL</a>: Our new pastry chef has a special holiday surprise for you! Homemade egg nog cheesecake #Thanksgiving #openinphl https://t.co/0gT2UXcHgf</p> <p style="font-size: 10px;">Tue Nov 22 03:37 | <a target="_blank" href="https://twitter.com/statuses/800905960319492096">Read on Twitter</a></p> <hr> <p> Phone: (267) 273-0688<br/> Directions: <a href="https://maps.google.com?daddr=243+Chestnut+St+%28at+3rd+St%29%2C+Philadelphia%2C+PA+19106" target="_blank">243 Chestnut St (at 3rd St), Philadelphia, PA 19106</a><br/> Website: <a target="_blank" href="https://www.thelittlelionphilly.com">https://www.thelittlelionphilly.com</a> </p> </div> </div>', 'lng': -75.14585876464844, 'lat': 39.94868850708008, 'name': 'The Little Lion'}];

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