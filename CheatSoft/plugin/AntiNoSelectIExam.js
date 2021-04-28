// ==UserScript==
// @name         Антизапрет выделения текста на i-exam
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Позволяет выделять текст на сайте i-exam
// @author       Anonymous
// @include      https://*.i-exam.ru/*
// @include      https://i-exam.ru/*
// @include      https://test.i-exam.ru/test.html
// @include      https://test.i-exam.ru/*/test.html
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    //Создаём пустой тег с id=enable_selection и добавляем на страницу
    document.head.innerHTML += '<script id="enable_selection" />';
    //i-exam, видя тег с данным атрибутом, не включает запрет выделения текста

})();