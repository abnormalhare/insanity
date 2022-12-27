const amountSPC = {
    chapters: [2, 2, 4, 104, 84, 187, 489, 104, 108]
}
///// important
let locationG = 1000;
/////
const setPercentage = (block) => {
    let locationSPC = locationG;
    let amount = 1;
    let indexSPC = 0;
    let i = amountSPC.chapters[indexSPC];
    const id = parseInt(block.id);
    while (indexSPC < id) {
        locationSPC -= i;
        amount += i;
        indexSPC++;
        i = amountSPC.chapters[indexSPC];
    }
    amount += amountSPC.chapters[indexSPC]
    console.log(amount)
    let percentage = Math.round(locationSPC / amountSPC.chapters[indexSPC] * 1000) / 10;
    if (percentage >= 100) {
        block.className = "greenBefore";
        block.innerHTML = "100%";
        if (percentage == 100)
            block.innerHTML = "100%!";
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
    block.innerHTML += " (" + (amount - amountSPC.chapters[indexSPC]) + "-" + (amount - 1) + ")";
}
const position = () => {
    let posOut = locationG
    if (locationG % 100) posOut += "!"
    document.getElementById("LUP").innerHTML = locationG
}
