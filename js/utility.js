var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomRangeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generateColor() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    return `rgb(${red},${green},${blue})`;
}

function removeBall(ball, ballLst) {
    nb = Array.from(ballLst);
    var index = ballLst.indexOf(ball);
    nb.splice(index, 1);
    return nb;
}