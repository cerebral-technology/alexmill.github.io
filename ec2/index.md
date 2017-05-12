---
layout: page
css: "#state{color:#fff;border-radius:5px;padding:2px 10px}#state.running{background-color:green}input[type=range]{-webkit-appearance:none;margin:10px 0;width:100%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer;-webkit-appearance:none;margin-top:-19px}input[type=range]:focus::-webkit-slider-runnable-track{background:#2497e3}input[type=range]::-moz-range-track{width:100%;height:5px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer}input[type=range]::-ms-track{width:100%;height:5px;cursor:pointer;animate:.2s;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-fill-upper{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#2497e3}input[type=range]:focus::-ms-fill-upper{background:#2497e3}"
---


Your server is: <span id="state"></span> <button id="startBtn">Start</button> <button id="stopBtn">Stop</button>

Resize your instance:
<hr>
<div>
  <input id="instanceRange_slider" type="range" min="0" max="6" value="1" step="1" onchange="showInstanceValue(this.value)"/>
  <p>
    Change instance type from 
    <span class="instance_type" id="currentInstance"></span>
    to 
    <span class="instance_type" id="instanceRange">0</span>
  </p>
</div>
  
<div>
  <input type="range" min="32" max="128" value="32" step="1" onchange="showStorageValue(this.value)"/>
  <span id="storageRange">0</span>
  <button>Change Storage</button>
</div>

<script>
var json = new Object;

window.onload = function () {
  $.getJSON("http://api.alex.miller.im/ec2/status")
    .done(function( data ) {
      json = data;
      $("#state").text(json["state"]);
      $("#state").addClass(json["state"]);
      $("#instanceRange_slider").attr({"value": json["instance_type_index"]});  
      $("#currentInstance").text(json["instance_type_name"]);  
      $("#storageRange").text(String(json["size"])+" GB")
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  }); 
}

function showInstanceValue(newValue) {
  document.getElementById("instanceRange").innerHTML = json["instance_info"][newValue][0];
}
function showStorageValue(newValue) {
  $("#storageRange").text(String(newValue)+" GB")
}
</script>
