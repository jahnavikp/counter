let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let prevoiuscounterElement = counterElement.textContent;
    let updatedcounterElement = parseInt(prevoiuscounterElement) + 1;
    counterElement.textContent = updatedcounterElement;
    if (updatedcounterElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";

    }
}

function onDecrement() {
    let prevoiuscounterElement = counterElement.textContent
    let updatedcounterElement = parseInt(prevoiuscounterElement) - 1
    counterElement.textContent = updatedcounterElement
    if (updatedcounterElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";

    }
}

function onReset() {
    let counterValue = 0
    counterElement.textContent = counterValue
    counterElement.style.color = "black"
}
