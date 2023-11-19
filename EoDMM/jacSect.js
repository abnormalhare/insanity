///// important
const chapters = [
    [
        2,   // 
        2,   // wff
        4,   // ⊢
        104, // →
        85,  // ¬
        188, // ⟷
        446, // ∧
        104, // ∨
        106, // ∧ + ∨
        18,  // if
        6,   // ded
        396, // 3wff
        25,  // nand
        17,  // xor
        26,  // ∀, =, ⊤, ⊥
        26,  // ⊤ + ⊥
        28,  // add
    ],
    [
        6
    ],
];
let chapterLengths = [1599];
const locationG = 1597;
let sectAt = 0;
let sectNumStart = 0;
let sectIter = 0;
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

const setPercentage = (block, list) => {
    // movement to local
    let locationSPC = locationG;
    // start of chapter
    let amount = 1;
    // index of chapter
    let indexSPC = 0;
    // chapter
    let i = chapters[sectIter][indexSPC];
    // chapter of html block
    const id = block.id.split('-')[1]
    console.log(blockId.length - 1);

    // skip over any previous arrays we've already done
    for (let l = 0; l < sectIter; l++) {
        locationSPC -= chapterLengths[l];
        amount += chapterLengths[l];
    }

    // find the chapter
    while (indexSPC < id) {
        locationSPC -= i;
        amount += i;
        indexSPC++;
        i = chapters[sectIter][indexSPC];
    }
    amount += chapters[sectIter][indexSPC];

    // calculate the percentage of completion
    let percentage = Math.round(locationSPC / chapters[sectIter][indexSPC] * 1000) / 10;
    percentage = interpretPercentage(block, percentage);
    list.push(percentage);
    block.innerHTML += " (" + (amount - chapters[sectIter][indexSPC]) + "-" + (amount - 1) + ")";
    return percentage;
}

const sectPercentage = (num) => {
    let sectPercentList = [];
    let i;
    num = num - sectAt;
    sectPercent = 0;
    for (i = 1; i <= num; i++) {
        let blockSet = document.getElementById(`${sectIter}-${i}`);
        sectPercent += setPercentage(blockSet, sectPercentList);
    }
    const block = document.getElementById(`sect-${sectIter}`);
    sectIter++;
    sectPercent = Math.round(sectPercent / num * 10) / 10;
    interpretPercentage(block, sectPercent);
}

const position = () => {
    let posOut = locationG;
    if (!(locationG % 100)) posOut += "!";
    document.getElementById("LUP").innerHTML = posOut;
}
