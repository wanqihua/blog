// 'use strict';
const fs = require('fs');
const getLanguage = () => {
    let language = {};
    fs.readdirSync('./language').forEach(lang => {
        language[lang] = {};
        fs.readdirSync(`./language/${lang}`).forEach(doc => {
            language[lang][doc.match(/(.+)\.js$/)[1]] = require(`./language/${lang}/${doc}`)
        })
    });
    return language
};
function loadLang() {
    global.language = getLanguage();
}
module.exports = loadLang;

