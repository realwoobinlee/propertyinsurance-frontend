// ==UserScript==
// @name         Gegenstandsversicherung
// @namespace    http://ergo.de/
// @version      0.1
// @description  Gegenstandsversicherung "Angebort anfordern" umbiegen
// @author       Ole Bittner
// @match        https://www.ergo.de/de/Produkte/Hausrat-und-Gebaeudeversicherung/Gegenstandversicherung
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.evaluate("/html/body/main/main/section/div/div/div[6]/div/div/a", document, null, XPathResult.ANY_TYPE, null).iterateNext();
    button.href = "http://localhost:4200/";

    var button_text = document.evaluate("/html/body/main/main/section/div/div/div[6]/div/div/a/button/span/span", document, null, XPathResult.ANY_TYPE, null).iterateNext();
    button_text.innerText = "Beitrag berechnen";
})();