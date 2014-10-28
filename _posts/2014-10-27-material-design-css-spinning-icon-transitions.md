---
layout: post
title: "Material Design CSS Animations: Spinning Icon Transitions"
categories: blog
author: "Alex Miller"
meta:
description: "Pure HTML5/CSS3 example of Google's fancy material design spinning icon effect. No Javascript required!"
tags: template
source: default
css: "#gfy-embed {margin-bottom: -17px;margin-left: 13px;} .md-preview .button{background-color:#db4437;height:56px;width:56px;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);box-sizing:content-box;cursor:default;outline:0;padding:0;position:relative;-webkit-transform:scale(1) rotate(360deg);transform:scale(1) rotate(360deg);-webkit-transition:-webkit-transform 150ms cubic-bezier(.4,0,1,1);transition:transform 150ms cubic-bezier(.4,0,1,1)}.md-preview .button.hover{}.md-preview .md-icon{background-size:24px;display:block;height:24px;margin:auto;width:24px}.md-preview .first-icon,.md-preview .second-icon{left:0;margin-left:16px;margin-top:16px;position:absolute;top:0;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1)}.md-preview .button.hover .first-icon,.md-preview .second-icon{opacity:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.md-preview .button.hover .second-icon{opacity:1;visibility:visible;-webkit-transform:rotate(360deg);transform:rotate(360deg)}.slomo .button{background-color:#db4437;height:56px;width:56px;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);box-sizing:content-box;cursor:default;outline:0;padding:0;position:relative;-webkit-transform:scale(1) rotate(360deg);transform:scale(1) rotate(360deg);-webkit-transition:-webkit-transform 1.5s cubic-bezier(.4,0,1,1);transition:transform 1.5s cubic-bezier(.4,0,1,1)}.slomo .button.hover{}.slomo .md-icon{background-size:24px;display:block;height:24px;margin:auto;width:24px}.slomo .first-icon,.slomo .second-icon{left:0;margin-left:16px;margin-top:16px;position:absolute;top:0;-webkit-transition:all 2s cubic-bezier(.4,0,.2,1);transition:all 2s cubic-bezier(.4,0,.2,1)}.slomo .button.hover .first-icon,.slomo .second-icon{opacity:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.slomo .button.hover .second-icon{opacity:1;visibility:visible;-webkit-transform:rotate(360deg);transform:rotate(360deg)}.interprev{text-align: center;}.interprev .button{background-color:#db4437;height:56px;width:56px;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);box-sizing:content-box;cursor:pointer;outline:0;padding:0;position:relative;-webkit-transform:scale(1) rotate(360deg);transform:scale(1) rotate(360deg);-webkit-transition:-webkit-transform 150ms cubic-bezier(.4,0,1,1);transition:transform 150ms cubic-bezier(.4,0,1,1)}.interprev .button:hover{box-shadow:0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);-webkit-transition:box-shadow 150ms cubic-bezier(0,0,.2,1);transition:box-shadow 150ms cubic-bezier(0,0,.2,1)}.interprev .md-icon{background-size:24px;display:block;height:24px;margin:auto;width:24px}.interprev .first-icon,.interprev .second-icon{left:0;margin-left:16px;margin-top:16px;position:absolute;top:0;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1)}.interprev .button:hover .first-icon,.interprev .second-icon{opacity:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.interprev .button:hover .second-icon{opacity:1;visibility:visible;-webkit-transform:rotate(360deg);transform:rotate(360deg)}"
---

Google has done an excellent job documenting and sharing their [Material Design](http://www.google.com/design/spec/) specifications. And while they've shared a ton of great resources to mimic Material Design in your own applications, they haven't actually done the coding for you. By no means am I complaining, but I wanted to share some HTML/CSS I've pieced together to mimic what I think is one of Material Design's best "delightful details": **icon transitions.**

Several of Google's best icon transitions have been meticulously designed:

<div style="text-align:center;">
    <iframe id="gfy-embed" src="http://gfycat.com/ifr/OddballScalyGuppy" frameborder="0" scrolling="no" width="150" height="150" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>
    <br/>
    <a href="http://www.google.com/design/spec/animation/delightful-details.html" style="text-decoration: none; color: rgba(0,0,0,.5);">source</a>
</div>

However, it's not always practical to create custom transitions between two very different icons. An example of this the transition below (used in GMail's new "Inbox" UI), which is using what I would call a "universal" icon transition in Material Design:
<br/>
<div style="text-align:center;">
    <div class="md-preview">
        <button class="button" id="auto-icon-transition">
            <img class="md-icon second-icon" src="/img/pencil.png" />
            <img class="md-icon first-icon" src="/img/plus.png" />
        </button>
    </div>
    <br/>
    <p style="text-align: left">Here's the same animation in slomo:</p>
    <br/>
    <div class="slomo">
        <button class="button">
            <img class="md-icon second-icon" src="/img/pencil.png" />
            <img class="md-icon first-icon" src="/img/plus.png" />
        </button>
    </div>
</div>
<br/>

<script type="text/javascript">
    setInterval(function(){$('.md-preview .button').addClass('hover')}, 3000);
    setTimeout(function(){
        setInterval(function(){$('.md-preview .button').removeClass('hover')}, 3000);
    }, 1500);
    
    setInterval(function(){$('.slomo .button').addClass('hover')}, 8000);
    setTimeout(function(){
        setInterval(function(){$('.slomo .button').removeClass('hover')}, 8000);
    }, 4000);
</script>

This transition isn't as fancy as Google's custom transitions, but it is still a very smooth way to switch between icons. As promised, here is the code for this transition:

## CSS
```
.button {
    background-color: #db4437;
    height: 56px;
    width: 56px;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
    box-sizing: content-box;
    cursor: pointer;
    outline: none;
    padding: 0;
    position: relative;
    -webkit-transform: scale(1) rotate(360deg);
    transform: scale(1) rotate(360deg);
    -webkit-transition: -webkit-transform 150ms cubic-bezier(.4, 0, 1, 1);
    transition: transform 150ms cubic-bezier(.4, 0, 1, 1);
}
.button:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32);
    -webkit-transition: box-shadow 150ms cubic-bezier(0, 0, .2, 1);
    transition: box-shadow 150ms cubic-bezier(0, 0, .2, 1);
}
.icon {
    background-size: 24px;
    display: block;
    height: 24px;
    margin: auto;
    width: 24px;
}
.second-icon, .first-icon {
    left: 0;
    margin-left: 16px;
    margin-top: 16px;
    position: absolute;
    top: 0;
    -webkit-transition: all .2s cubic-bezier(.4, 0, .2, 1);
    transition: all .2s cubic-bezier(.4, 0, .2, 1);
}
.second-icon, .button:hover .first-icon {
    opacity: 0;
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
}
.button:hover .second-icon {
    opacity: 1;
    visibility: visible;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
```

## HTML
```
<button class="button">
    <img class="icon second-icon" src="/img/pencil.png" />
    <img class="icon first-icon" src="/img/plus.png" />
</button>
```

## Interactive Example

<div class="interprev">
<button class="button">
    <img class="md-icon second-icon" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
    <img class="md-icon first-icon" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/bt_speed_dial_2x.png" />
</button>
</div>

http://jsfiddle.net/alexpmil/9Lwtw9vy/1/
