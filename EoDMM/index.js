const sectionList = [
    {type: "chapter", chapter: "1.2.6", end: 634},
    {type: "an", end: 651},
    {type: "anabs", end: 665},
    {type: "anand", end: 669},
    {type: "sylan", end: 677},
    {type: "mpan", end: 697},
    {type: "mpbian", end: 704}
]

const section = 1
const chapCurr = document.getElementById("CC")
const typeCurr = document.getElementById("TC")
const areaCurr = document.getElementById("AC")
const chapNext = document.getElementById("CN")
const typeNext = document.getElementById("TN")
const areaNext = document.getElementById("AN")

let chapter = section;
while (sectionList[chapter].chapter != null) {
    chapter -= 1
}

chapCurr.innerHTML = sectionList[chapter].chapter
typeCurr.innerHTML = ""+sectionList[section].type
areaCurr.innerHTML = sectionList[section - 1].end + "-" + sectionList[section].end