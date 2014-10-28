---
layout: post
title: "Material Design CSS Animations: Rotating Icon Buttons"
categories: blog
author: "Alex Miller"
meta:
description: "Pure HTML5/CSS3 example of Google's fancy material design spinning icon effect. No Javascript required!"
tags: template
source: default
css: ".auto-icon-transition { margin: 0 auto;} .button{background-color:#db4437;height:56px;width:56px;border:none;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);box-sizing:content-box;cursor:pointer;outline:0;padding:0;position:relative;-webkit-transform:scale(1) rotate(360deg);transform:scale(1) rotate(360deg);-webkit-transition:-webkit-transform 150ms cubic-bezier(.4,0,1,1);transition:transform 150ms cubic-bezier(.4,0,1,1)}.button:hover{box-shadow:0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);-webkit-transition:box-shadow 150ms cubic-bezier(0,0,.2,1);transition:box-shadow 150ms cubic-bezier(0,0,.2,1)}.icon{background-size:24px;display:block;height:24px;margin:auto;width:24px}.first-icon,.second-icon{left:0;margin-left:16px;margin-top:16px;position:absolute;top:0;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1)}.button:hover .first-icon,.second-icon{opacity:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.button:hover .second-icon{opacity:1;visibility:visible;-webkit-transform:rotate(360deg);transform:rotate(360deg)}"
---

Google has done an excellent job documenting and sharing their [Material Design](http://www.google.com/design/spec/) specifications. And while they've shared a ton of great resources to mimic Material Design in your own applications, they haven't actually done the coding for you. By no means am I complaining, but I wanted to share some HTML/CSS I've pieced together to mimic what I think is one of Material Design's best "delightful details": **icon transitions**.

Several of Google's best icon transitions have been meticulously designed:

However, it's not always practical to create custom transitions between two very different icons. An example of this it the transition below, which is using what I would call a "universal" icon transition in Material Design:

<button class="button" id="auto-icon-transition">
    <img class="icon second-icon" src="/img/pencil.png" />
    <img class="icon first-icon" src="/img/plus.png" />
</button>

http://jsfiddle.net/alexpmil/9Lwtw9vy/1/
