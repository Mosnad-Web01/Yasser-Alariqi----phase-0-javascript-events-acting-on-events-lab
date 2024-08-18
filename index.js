function moveDodgerLeft() {
    dodger.style.left = "0px";
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360) { 
        dodger.style.left = `${left + 10}px`;
    }
}
