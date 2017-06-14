---
layout: page
title: EC2 Manager
css: "
header h1{font-size: 2em;}
#state{color:#fff;border-radius:5px;padding:2px 10px}
.running #state{background-color:green}
.stopped #state{background-color:red}
.running.between #state, .stopped.between #state{background-color: orange;}
#stopBtn, #startBtn{display:none}
.running #stopBtn, .stopped #startBtn{display:block}
#instanceType {
    width: 70%;
    height: 25px;
    font-size: 0.85em;
}
#commitDiv > div { float: left; }
#formContain {display: none;}
#btnLoader {display: none;}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #7a7a7a;
  font-size: 12px;
  margin: 10px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader.small { 
  font-size: 4px;
  margin: 0px 0 0 25px;
  display: inline-block;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}"
---

<div class="loader" id="mainLoader"></div>

<div id="formContain">
<div>
  Your server is: <span id="state"></span>
</div>

<div>
  Instance Type:
  <select id="instanceType" disabled="disabled"></select>
</div>

<div id="commitDiv">
  <div>Key: <input type="password" id="key"/></div>
  <div style="margin: 4px;">
    <button id="startBtn" onclick="startServer()">Start Server</button>
    <button id="stopBtn" onclick="stopServer()">Stop Server</button>
  </div>
  <div class="loader small" id="btnLoader"></div>
</div>
  
<!--
<div style="margin-top: 12px">
  Storage: 
  <input type="range" min="32" max="128" value="32" step="1" onchange="showStorageValue(this.value)"/>
  <span id="storageRange">0</span>
</div>
-->

</div>



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
        opt_tag = opt_tag +'>' +
        json["instance_info"][i][0] +
          ' (RAM: ' + json["instance_info"][i][2] + ' GB,' +
          ' Cores: ' + json["instance_info"][i][1] + 
          ' Cost: ' + json["instance_info"][i][json["instance_info"][i].length - 2] + ' hourly' +
          ')</option>'
        $("#instanceType").append(opt_tag)
      }
      if(json["state"]=="stopped"){
        $("#instanceType").removeAttr("disabled");
      }
      // $("#storageRange").text(String(json["size"])+" GB")
      $("#mainLoader").hide();
      $("#formContain").show();
      
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  }); 
}

function showStorageValue(newValue) {
  $("#storageRange").text(String(newValue)+" GB")
}

function startServer() {
    $("#btnLoader").show();
    $("#commitDiv button").attr("disabled","disabled");
    $("#state").text("starting");
    $(".post-content").addClass("between");
   
    payload = {
      "key": $("#key").val(),
      "instance_type": $("#instanceType").val()
    }
    $.ajax ({
      crossOrigin: true,
      url: "http://api.alex.miller.im/ec2/start_instance",
      type: "POST",
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data){$("#btnLoader").hide(); $("#commitDiv button").removeAttr("disabled"); console.log(data.reponseJSON); if(data.status==200){location.reload();}},
      error: function(data){ $("#btnLoader").hide(); $("#commitDiv button").removeAttr("disabled"); console.log(data.reponseJSON); console.log("Error"); }
    }); 
}


function stopServer() {
    $("#btnLoader").show();
    $("#commitDiv button").attr("disabled","disabled");
    $("#state").text("stopping");
    $(".post-content").addClass("between");
    
    payload = {
      "key": $("#key").val()
    }
    console.log("stopping server");
    $.ajax ({
      crossOrigin: true,
      url: "http://api.alex.miller.im/ec2/stop_instance",
      type: "POST",
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data){ $("#btnLoader").hide(); $("#commitDiv button").removeAttr("disabled");  console.log(data.reponseJSON); if(data.status==200){location.reload();}},
      error: function(data){ $("#btnLoader").hide(); $("#commitDiv button").removeAttr("disabled");  console.log(data.reponseJSON); console.log("Error"); }
    });
}

</script>
