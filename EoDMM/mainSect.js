const sectionList = [
    {type: "chapter", chapter: "1.2.6", end: 633},
    {type: "an", end: 651},
    {type: "anabs", end: 665},
    {type: "anand", end: 669},
    {type: "sylan", end: 677},
    {type: "mpan", end: 697},
    {type: "mpbian", end: 704},
    {type: "adant", end: 780},
    {type: "simp", end: 832},
    {type: "pm", end: 838},
    {type: "misc.", end: 864}
]
///// USE FOR UPDATING TO NEXT SECTION /////
let section = 6
/////         VERY IMPORTANT           /////
const chapCurr = document.getElementById("CC")
const typeCurr = document.getElementById("TC")
const areaCurr = document.getElementById("AC")
const chapNext = document.getElementById("CN")
const typeNext = document.getElementById("TN")
const areaNext = document.getElementById("AN")

let chapter = section;
while (sectionList[chapter].type != "chapter") {
    chapter--;
}

const setDisplay = (chap, type, area) => {
    chap.innerHTML = sectionList[chapter].chapter
    type.innerHTML = sectionList[section].type
    area.innerHTML = (sectionList[section - 1].end + 1) + "-" + sectionList[section].end
    if (type.innerHTML == "misc.") {
        type.innerHTML.italics()
    }
}

setDisplay(chapCurr, typeCurr, areaCurr)
section++;
if (sectionList[section].type == "chapter") {
    chapter = section;
    section++;
}
setDisplay(chapNext, typeNext, areaNext)
