var textInput = document.querySelector('#textarea-box')
var btn = document.querySelector('#btn')
var showOutput = document.querySelector('#output')
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverUrl = "https://api.funtranslations.com/translate/groot.json"


btn.addEventListener('click' , clickEventHandler)

function errorHandler(error) {
    console.log("error occured" , error)
    
}

function getTranslatedTxt(text) {
    return serverUrl + "?" + "text=" + text
    
}

function clickEventHandler () {
    console.log("testing")
    var inputTxt = textInput.value

    fetch(getTranslatedTxt(inputTxt))
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {
        // var translatedText = json.contents.translated
        var translatedText = json.contents.text
        showOutput.innerText = translatedText
    })
    .catch(errorHandler)
}