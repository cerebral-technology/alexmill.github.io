/* Track outbound links */
var outbounds = $("a").filter(function(index){
    try{
        var h = $(this).attr("href");
        return h.indexOf("http") > -1 && h.indexOf(window.location.host) == -1;
    } catch(err){
        return false;
    }
});
$(outbounds).click(function(){
    ga('send', 'event', 'Outbound Link', $(this).attr("href"), 'From page: '.concat(document.URL) );
    console.log($(this).attr("href"))
});

