var textInput = document.querySelector('#textarea-box')
var btn = document.querySelector('#btn')
var showOutput = document.querySelector('#output')

var styleOutputBox = `
background-color: #0533ab;
font-size: large;
font-weight: bold;
color: white;`

var serverUrl = "https://api.funtranslations.com/translate/groot.json"

btn.addEventListener('click' , clickEventHandler)

function errorHandler(error) {
    alert("something went wrong please try again later" , error)
    console.log("error occured" , error)
    
}

function getTranslatedTxt(text) {
    return serverUrl + "?" + "text=" + text
    
}

function clickEventHandler () {
    var inputTxt = textInput.value

    fetch(getTranslatedTxt(inputTxt))
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {
        // var translatedText = json.contents.translated
        var translatedText = json.contents.translated
        showOutput.innerText = translatedText
        showOutput.style =styleOutputBox
    })
    .catch(errorHandler)
}