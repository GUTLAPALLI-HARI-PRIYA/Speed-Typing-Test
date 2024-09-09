let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let counter = 0;
spinnerEl.classList.toggle("d-none")

function startCounter() {
    counter += 1;
    timerEl.textContent = counter;
    console.log(counter)
}
let counterValue = setInterval(startCounter, 1000);

function getQuota() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none")

            let quota = jsonData.content;
            quoteDisplayEl.textContent = quota;
            console.log(jsonData)
        })
}
getQuota()
startCounter()

resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQuota();
    startCounter();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.textContent = ""

};
submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterValue);
        resultEl.textContent = "You typed In " + counter + " seconds"
    } else {
        resultEl.textContent = "You typed Incorrect sentence"
    }
}