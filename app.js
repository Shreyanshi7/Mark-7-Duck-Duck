var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getUrl(text) {
    return serverURL + "?" + "text=" + text;
}

btnTranslate.addEventListener('click', function btnClick() {
  console.log(inputTxt.value);
    if (inputTxt.value === '') {
        alert('Please Enter some Text!');
    } else if (!isNaN(parseFloat(inputTxt.value))) {
        alert('Please Enter Text!');
    } else if (/\d/.test(inputTxt.value)) {
        alert('Please Enter only Text!');
    } else {
        let response = fetch(getUrl(inputTxt.value))
            .then(response => response.json())
            .then(function getContent(json) {
                console.log(json);
                return outputDiv.innerText = json.contents.translated;
            }).catch(function errorHandling(error) {
                if (error.code === 429) {
                    alert("Sorry There are Too Many Requests ! Please try again after some time");
                } else {
                    console.log("Sorry an Error Occured", error);
                    alert("Something went wrong with our server! Try again after some time");
                }
            });
            console.log("response", response)
    }
});