///// important
const chapters = [2, 2, 4, 104, 85, 188, 448, 104, 106, 17, 6, 396, 25, 17, 26, 26]
let locationG = 1322;
let sectPercentage = [];
let sectNumStart = 0;
/////

const setPercentage = (block) => {
    let locationSPC = locationG;
    let amount = 1;
    let indexSPC = 0;
    let i = chapters[indexSPC];
    const id = parseInt(block.id);
    while (indexSPC < id) {
        locationSPC -= i;
        amount += i;
        indexSPC++;
        i = chapters[indexSPC];
    }
    amount += chapters[indexSPC];
    let percentage = Math.round(locationSPC / chapters[indexSPC] * 1000) / 10;
    sectPercentage.push(percentage);
    if (percentage >= 100) {
        block.className = "greenBefore";
        block.innerHTML = "100%";
        if (percentage == 100) block.innerHTML = "100%!";
    } else {
        if (percentage >= 75) {
            block.className = "ygBefore";
        } else if (percentage >= 50) {
            block.className = "yellowBefore";
        } else if (percentage >= 25) {
            block.className = "orangeBefore";
        } else {
            block.className = "redBefore";
            if (percentage < 0) {
                percentage = 0;
            }
        }
        block.innerHTML = percentage + "%+";
    }
    block.innerHTML += " (" + (amount - chapters[indexSPC]) + "-" + (amount - 1) + ")";
}

const sectPercentage = (block) => {
    const num = parseInt(block.id.split("-")[1]);
    const addPart = sectPercentage.slice(sectNumStart, num + 1);
    sectPercentage = sectPercentage.slice(num + 1);
    let x = 0;
    for (let i in addPart) {
        x += i;
    }
    block.innerHTML = x / addPart.length();
}

const position = () => {
    let posOut = locationG;
    if (!(locationG % 100)) posOut += "!";
    document.getElementById("LUP").innerHTML = posOut;
}
