import {en} from '../translations/en-us.js'
import {es} from '../translations/es.js'
import {pt} from '../translations/pt-br.js'

// Define the language reload anchors
var language = {
        pt: {
            pt
        },
        es: {
            es
        },
        en: {
            en
        },
    };

var langElements = document.querySelectorAll('.lang')

if (window.location.hash) {
    if (window.location.hash == "#pt") {
        langElements.forEach(function (element){
            var key = element.getAttribute('key')
            element.textContent = language.pt.pt.translation[key]
        })
    } else if (window.location.hash == "#en") {
        langElements.forEach(function (element){
            var key = element.getAttribute('key')
            element.textContent = language.en.en.translation[key]
        })
    } else if (window.location.hash == "#es"){
        langElements.forEach(function (element){
            var key = element.getAttribute('key')
            element.textContent = language.es.es.translation[key]
        })
    }
}