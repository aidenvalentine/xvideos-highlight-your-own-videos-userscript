// ==UserScript==
// @name         XVIDEOS - Highlight Your Own Videos
// @namespace    https://xvideos.com/
// @version      0.1
// @description  Highlights your videos in a red box so you can find your own clips at a glance.
// @author       Aiden Valentine
// @match        https://www.xvideos.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $( document ).ready(function() {

        // NOTE: Change Aiden Valentine Official to the name of your channel.
        $("div.thumb-block:contains('Aiden Valentine Official')").css("background-color", "orangered");

    });
})();
