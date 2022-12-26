const amountSPC = {
    chapters: [2, 2, 4, 104, 84, 187, 489, 104]
}
let locationG;
const setPercentage = (block) => {
    ///// important
    let locationSPC = 970
    /////
    locationG = locationSPC
    let indexSPC = 0
    let i = amountSPC.chapters[indexSPC]
    while (indexSPC < parseInt(block.id)) {
        locationSPC -= i;
        indexSPC++;
        i = amountSPC.chapters[indexSPC];
    }
    let percentage = Math.round(locationSPC / amountSPC.chapters[indexSPC] * 1000) / 10
    if (percentage >= 100) {
        block.className = "greenBefore";
        block.innerHTML = "100%";
        if (percentage == 100)
            block.innerHTML = "100%!"
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
                percentage = 0
            }
        }
        block.innerHTML = percentage + "%+";
    }
}
const position = () => { document.getElementById("LUP").innerHTML = locationG }
