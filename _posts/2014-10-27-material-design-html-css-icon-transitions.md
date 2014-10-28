---
layout: post
title: "Material Design CSS Animations: Rotating Icon Buttons"
categories: blog
author: "Alex Miller"
meta:
description: "Pure HTML5/CSS3 example of Google's fancy material design spinning icon effect. No Javascript required!"
tags: template
source: default
css: ".auto-icon-transition { margin: 0 auto;)"
---

Google has done an excellent job documenting and sharing their [Material Design](http://www.google.com/design/spec/) specifications. And while they've shared a ton of great resources to mimic Material Design in your own applications, they haven't actually done the coding for you. By no means am I complaining, but I wanted to share some HTML/CSS I've pieced together to mimic what I think is one of Material Design's best "delightful details": **icon transitions**.

Several of Google's best icon transitions have been meticulously designed:

However, it's not always practical to create custom transitions between two very different icons. An example of this it the transition below, which is using what I would call a "universal" icon transition in Material Design:

<button class="button" id="auto-icon-transition">
    <img class="icon second-icon" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
    <img class="icon first-icon" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/bt_speed_dial_2x.png" />
</button>

http://jsfiddle.net/alexpmil/9Lwtw9vy/1/
