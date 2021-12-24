// ==UserScript==
// @name         Антизапрет выделения текста на i-exam
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Позволяет выделять текст на сайте i-exam
// @author       Dunamis4tw
// @include      https://*.i-exam.ru/*
// @include      https://i-exam.ru/*
// @include      https://test.i-exam.ru/test.html
// @include      https://test.i-exam.ru/*/test.html
// @grant        none
// @run-at       document-start
// @updateURL    https://dunamis4tw.github.io/CheatSoft/plugin/AntiNoSelectIExam.user.js
// @updateURL    https://raw.githack.com/Dunamis4tw/Dunamis4tw.github.io/master/CheatSoft/plugin/AntiNoSelectIExam.user.js
// @updateURL    https://gitcdn.xyz/repo/Dunamis4tw/Dunamis4tw.github.io/master/CheatSoft/plugin/AntiNoSelectIExam.user.js
// @updateURL    https://gitcdn.link/repo/Dunamis4tw/Dunamis4tw.github.io/master/CheatSoft/plugin/AntiNoSelectIExam.user.js
// @updateURL    https://combinatronics.com/Dunamis4tw/Dunamis4tw.github.io/master/CheatSoft/plugin/AntiNoSelectIExam.user.js
// @updateURL    https://cdn.statically.io/gh/Dunamis4tw/Dunamis4tw.github.io/master/CheatSoft/plugin/AntiNoSelectIExam.user.js
// ==/UserScript==

(function() {

    //Создаём пустой тег с id=enable_selection и добавляем на страницу
    document.head.innerHTML += '<script id="enable_selection" />';
    //i-exam, видя тег с данным атрибутом, не включает запрет выделения текста

})();
