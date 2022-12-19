const amountSPC = {
    start: 1,
    chapters: [2, 2, 4, 104, 84, 187, 490]
}
let locationSPC = 670
const setPercentage = (block) => {
    let indexSPC = 0
    let i = amountSPC.chapters[indexSPC]
    while (indexSPC < parseInt(block.id)) {
        locationSPC -= i;
        indexSPC++;
        i = amountSPC.chapters[indexSPC];
    }
    console.log("LOCATION:", locationSPC, "INDEX:", indexSPC)
    if (locationSPC >= 0) {
        block.className = "greenBefore";
        block.innerHTML = "100%";
    } else {
        block.className = "yellowBefore";
        block.innerHTML = locationSPC / amountSPC.chapters[indexSPC] + "%"
    }
}