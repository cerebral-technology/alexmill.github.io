
function initMap() {
    var philly = {lat: 39.9530715, lng: -75.1646839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: philly
    });

    var tweets = [{'lat': 39.92430501943201, 'lng': -75.18705280759997, 'name': 'Smith Playground', 'content': '<div id="content"> <h1>Smith Playground</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/SmithPlayground">@SmithPlayground</a>: Please note, Smith will be closed on Thurs 11/23 for #Thanksgiving but join us on #BlackFriday 11/24 for an After T… https://t.co/MgFLcNkPqQ</p> <p style="font-size: 10px;">Mon Nov 20 17:15 | <a target="_blank" href="https://twitter.com/statuses/932658553948594176">Read on Twitter</a></p> <hr> <p> Phone: (visit website)<br/> Directions: <a href="https://maps.google.com?daddr=2408-2498+W+Snyder+Ave+%2825th+and+Snyder%29%2C+Philadelphia%2C+PA+19145" target="_blank">2408-2498 W Snyder Ave (25th and Snyder), Philadelphia, PA 19145</a><br/> Website: <a target="_blank" href="http://smithplayground.org/">http://smithplayground.org/</a> </p> </div> </div>'}, {'lat': 39.96740055333233, 'lng': -75.17541492227016, 'name': 'London Grill', 'content': '<div id="content"> <h1>London Grill</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/LondonGrill">@LondonGrill</a>: #turkey #thanksgiving 200 reservations Bar open at noon after parade #openinphl https://t.co/yjmgfDCJul</p> <p style="font-size: 10px;">Mon Nov 20 16:01 | <a target="_blank" href="https://twitter.com/statuses/932639939790905344">Read on Twitter</a></p> <hr> <p> Phone: (215) 978-4545<br/> Directions: <a href="https://maps.google.com?daddr=2301+Fairmount+Ave+%28at+23rd+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">2301 Fairmount Ave (at 23rd St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.londongrillphilly.com">http://www.londongrillphilly.com</a> </p> </div> </div>'}, {'lat': 39.94139787220309, 'lng': -75.14720355648697, 'name': 'Lovash Indian Restaurant & Bar', 'content': '<div id="content"> <h1>Lovash Indian Restaurant & Bar</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/Lovash_Philly">@Lovash_Philly</a>: Feast your eyes on this!! \U0001f923\U0001f913\U0001f92a\U0001f336️#goodeats #igfood #foodstagram #foodbloggers #eatfamous #foodblog #hungry… https://t.co/RRGFpWGD37</p> <p style="font-size: 10px;">Sun Nov 19 18:58 | <a target="_blank" href="https://twitter.com/statuses/932322296127135744">Read on Twitter</a></p> <hr> <p> Phone: (215) 925-3881<br/> Directions: <a href="https://maps.google.com?daddr=236+South+Street+%28btwn+2nd+%26+3rd+St%29%2C+Philadelphia%2C+PA+19147" target="_blank">236 South Street (btwn 2nd & 3rd St), Philadelphia, PA 19147</a><br/> Website: <a target="_blank" href="http://lovashrestaurant.com">http://lovashrestaurant.com</a> </p> </div> </div>'}, {'lat': 39.96531090100131, 'lng': -75.17252802654721, 'name': 'The Belgian Cafe', 'content': '<div id="content"> <h1>The Belgian Cafe</h1> <div id="bodyContent"> <hr> <p><a target="_blank" href="https://twitter.com/thebelgiancafe">@thebelgiancafe</a>: Join us now #OpeninPHL #SundayBrunch after @Philly_Marathon nearby @philamuseum @rodinmuseum @the_barnes #craftbeer… https://t.co/kPQq6oqM2J</p> <p style="font-size: 10px;">Sun Nov 19 16:06 | <a target="_blank" href="https://twitter.com/statuses/932278906018844672">Read on Twitter</a></p> <hr> <p> Phone: (215) 235-3500<br/> Directions: <a href="https://maps.google.com?daddr=601+N.+21st+Street+%28at+Green+St%29%2C+Philadelphia%2C+PA+19130" target="_blank">601 N. 21st Street (at Green St), Philadelphia, PA 19130</a><br/> Website: <a target="_blank" href="http://www.thebelgiancafe.com">http://www.thebelgiancafe.com</a> </p> </div> </div>'}];

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