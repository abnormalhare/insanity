const amountSPC = {
    start: 1,
    chapters: [2, 2, 4, 104, 84, 187, 490]
}
let locationSPC = 2
let indexSPC = 0
let i = amountSPC.chapters[indexSPC]
while (locationSPC - i > 0) {
    locationSPC -= i;
    indexSPC++;
    i = amountSPC.chapters[indexSPC];
}
console.log(locationSPC)