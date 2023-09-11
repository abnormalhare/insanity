///// important
const chapters = [
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
    26,   // ⊤ + ⊥
    28
]
let locationG = 1571;
let sectAt = 0;
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

const setPercentage = (block, list) => {
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
    list.push(percentage);
    block.innerHTML += " (" + (amount - chapters[indexSPC]) + "-" + (amount - 1) + ")";
    return percentage;
}

const sectPercentage = (num) => {
    let sectPercentList = []
    const block = document.getElementById("sect-"+num);
    num = parseInt(num) - sectAt
    sectPercent = 0;
    for (let i = 0; i <= num; i++) {
        sectPercent += setPercentage(document.getElementById(""+i), sectPercentList);
    }
    sectPercent = Math.round(sectPercent / num * 10) / 10;
    interpretPercentage(block, sectPercent)
}

const position = () => {
    let posOut = locationG;
    if (!(locationG % 100)) posOut += "!";
    document.getElementById("LUP").innerHTML = posOut;
}
