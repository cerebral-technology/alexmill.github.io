---
layout: page
css: "#state.running { background-color: green; font-color: #ffffff; border-radius: 3px; padding: 4px; }"
---

<script>
$.getJSON("http://api.alex.miller.im/ec2/status")
  .done(function( json ) {
    $("#state").text(json["state"]);
    $("#state").addClass(json["state"]);
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
</script>

Your server is: <span id="state"></span>
