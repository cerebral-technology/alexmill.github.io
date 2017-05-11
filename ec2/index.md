---
layout: page
css: "#state {color: #ffffff; border-radius: 5px; padding: 2px 10px;} #state.running { background-color: green;}"
---


Your server is: <span id="state"></span>

Actions:

<div>
<button>Stop</button>
<button>Change Memory</button>
<button>Change Storage</button>
</div>

<script>
window.onload = function () {
  $.getJSON("http://api.alex.miller.im/ec2/status")
    .done(function( json ) {
      $("#state").text(json["state"]);
      $("#state").addClass(json["state"]);
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}
</script>
