---
layout: page
title: EC2 Manager
css: "#state{color:#fff;border-radius:5px;padding:2px 10px}.running #state{background-color:green}.stopped #state{background-color:red}.stopped #stopBtn{display:none}input[type=range]{-webkit-appearance:none;margin:10px 0;width:40%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:11px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer;-webkit-appearance:none;margin-top:-19px}input[type=range]:focus::-webkit-slider-runnable-track{background:#2497e3}input[type=range]::-moz-range-track{width:100%;height:11px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer}input[type=range]::-ms-track{width:100%;height:11px;cursor:pointer;animate:.2s;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-fill-upper{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#2497e3}input[type=range]:focus::-ms-fill-upper{background:#2497e3}"
---

<div>
  Your server is: <span id="state"></span>
  <button class="stateBtn" id="stopBtn">Stop</button>
</div>

<div>
  Instance Type:
  <select id="instanceType"></select>
</div>
  
<div>
  Storage: 
  <input type="range" min="32" max="128" value="32" step="1" onchange="showStorageValue(this.value)"/>
  <span id="storageRange">0</span>
</div>

<button id="commitBtn">Start Server</button>

<script>
var json = new Object;

window.onload = function () {
  $.getJSON("http://api.alex.miller.im/ec2/status")
    .done(function( data ) {
      json = data;
      $("#state").text(json["state"]);
      $(".post-content").addClass(json["state"]);
      for(i = 0; i < json["instance_info"].length; i++){
        opt_tag = '<option value="' + json["instance_info"][i][0] + '"'
        
        if(i==json["instance_type_index"]){
          opt_tag = opt_tag + ' selected="selected" '
        }
        opt_tag = opt_tag +'>' + json["instance_info"][i][0] + '</option>'
        $("#instanceType").append(opt_tag)
      }
      if(json["state"]=="running"){
        $("#commitBtn").text("Commit and Restart Server");
      }
    })
    
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  }); 
}

function showStorageValue(newValue) {
  $("#storageRange").text(String(newValue)+" GB")
}
</script>
