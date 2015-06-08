// Materialize Initialization
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  });
})(jQuery);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37920818-1', 'auto');
ga('send', 'pageview');

/* Track outbound links */
var outbounds = $("a").filter(function(index){
    try{
        var h = $(this).attr("href");
        return h.indexOf("http") > -1 && h.indexOf("smartypal.com") == -1;
    } catch(err){
        return false;
    }
});
$(outbounds).click(function(){
    ga('send', 'event', 'Outbound Link', $(this).attr("href"), 'From page: '.concat(document.URL) );
    console.log($(this).attr("href"))
});

