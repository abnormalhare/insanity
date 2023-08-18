///// important
const chapters = [2, 2, 4, 104, 85, 188, 448, 104, 106, 17, 6, 396, 25, 17, 26, 26]
let locationG = 1424;
let sectPercentageList = [];
let sectNumStart = 0;
/////

const interpretPercentage = (block, percentage) => {
    if (percentage >= 100 && block != null) {
        block.className = "greenBefore";
        block.innerHTML = "100%";
        if (percentage == 100) block.innerHTML = "100%!";
    } else if (block != null) {
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
    
    if (percentage > 100) percentage = 100;
    else if (percentage < 0) percentage = 0;
    return percentage;
}

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
    percentage = interpretPercentage(block, percentage);
    sectPercentageList.push(percentage);
    block.innerHTML += " (" + (amount - chapters[indexSPC]) + "-" + (amount - 1) + ")";
}

const sectPercentage = (block) => {
    const num = parseInt(block.id.split("-")[1]);
    const addPart = sectPercentageList.slice(sectNumStart, num + 1);
    sectPercentageList = sectPercentageList.slice(num + 1);
    let x = 0;
    for (let i = 0; i < addPart.length; i++) {
        x += addPart[i];
        console.log(x, addPart[i]);
    }
    x = Math.round(x / addPart.length * 10) / 10;
    interpretPercentage(block, x)
}

const position = () => {
    let posOut = locationG;
    if (!(locationG % 100)) posOut += "!";
    document.getElementById("LUP").innerHTML = posOut;
}
