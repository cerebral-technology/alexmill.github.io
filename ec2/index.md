---
layout: page
css: "#state{color:#fff;border-radius:5px;padding:2px 10px}#state.running{background-color:green}input[type=range]{-webkit-appearance:none;margin:10px 0;width:100%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer;-webkit-appearance:none;margin-top:-19px}input[type=range]:focus::-webkit-slider-runnable-track{background:#2497e3}input[type=range]::-moz-range-track{width:100%;height:5px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer}input[type=range]::-ms-track{width:100%;height:5px;cursor:pointer;animate:.2s;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-fill-upper{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:5px;background:#a1d0ff;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#2497e3}input[type=range]:focus::-ms-fill-upper{background:#2497e3}"
---


Your server is: <span id="state"></span>

Actions:

<div>
  <button>Start</button>
  <button>Stop</button>
  <select>
    <option value="volvo">2GB</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  
  <input type="range" min="32" max="128" value="32" step="1" onchange="showValue(this.value)"/>
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
  
  function showValue(newValue)
  {
    document.getElementById("range").innerHTML=newValue;
  }
}
</script>
