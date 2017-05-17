---
layout: page
title: EC2 Manager
css: "header h1{font-size: 2em;}#state{color:#fff;border-radius:5px;padding:2px 10px}.running #state{background-color:green}.stopped #state{background-color:red}.stopped #stopBtn{display:none}input[type=range]{-webkit-appearance:none;margin:10px 0;width:40%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:11px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer;-webkit-appearance:none;margin-top:-19px}input[type=range]:focus::-webkit-slider-runnable-track{background:#2497e3}input[type=range]::-moz-range-track{width:100%;height:11px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#2497e3;border-radius:1px;border:0 solid #000}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer}input[type=range]::-ms-track{width:100%;height:11px;cursor:pointer;animate:.2s;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-fill-upper{background:#2497e3;border:0 solid #000;border-radius:2px;box-shadow:0 0 0 #000}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000;border:1px solid #2497e3;height:42px;width:17px;border-radius:11px;background:#a1d0ff;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#2497e3}input[type=range]:focus::-ms-fill-upper{background:#2497e3}"
---

<div>
  Your server is: <span id="state"></span>
  <button class="stateBtn" id="stopBtn">Stop</button>
</div>

<div>
  Instance Type:
  <select id="instanceType" disabled="disabled"></select>
</div>

<div>
  Key:
  <input type="password" id="key"/>
  <button id="commitBtn" disabled="disabled" onclick="server()">Start Server</button>
</div>
  
<!--
<div style="margin-top: 12px">
  Storage: 
  <input type="range" min="32" max="128" value="32" step="1" onchange="showStorageValue(this.value)"/>
  <span id="storageRange">0</span>
</div>
-->



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
        opt_tag = opt_tag +'>' + json["instance_info"][i][0] + ' (RAM: ' + json["instance_info"][i][2] + ' GB, Cores: ' + json["instance_info"][i][1] + ')</option>'
        $("#instanceType").append(opt_tag)
      }
      if(json["state"]=="stopped"){
        $("#instanceType").removeAttr("disabled");
        $("#commitBtn").removeAttr("disabled");
      } else {
        $("#commitBtn").text("Stop Server")
      }
      // $("#storageRange").text(String(json["size"])+" GB")
      
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  }); 
}

function showStorageValue(newValue) {
  $("#storageRange").text(String(newValue)+" GB")
}

function server() {
  if(json["state"] == "stopped"){
    payload = {
      "key": $("#key").val(),
      "instance_type": $("#instanceType").val()
    }
    console.log(payload);
    jQuery.ajax ({
      url: "http://api.alex.miller.im/ec2/start_instance",
      type: "POST",
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      done: console.log("POST"),
      fail: console.log("Error"),
      always:  function(data){ console.log(data) }
    });
   }
   else if(json["state"] == "running"){
      console.log("Stopping server.")
   }
   
}

</script>
