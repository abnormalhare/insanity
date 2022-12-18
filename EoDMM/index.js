const sectionList = [
    {type: "chapter", chapter: "1.2.6", end: 633},
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
while (sectionList[chapter].type != "chapter") {
    chapter -= 1;
}

chapCurr.innerHTML = sectionList[chapter].chapter
typeCurr.innerHTML = ""+sectionList[section].type
areaCurr.innerHTML = (sectionList[section - 1].end + 1) + "-" + sectionList[section].end

section += 1;
if (sectionList[chapter].type == "chapter") {
    chapter = section;
    section += 1;
}
chapNext.innerHTML = sectionList[chapter].chapter
typeNext.innerHTML = ""+sectionList[section].type
areaNext.innerHTML = (sectionList[section - 1].end + 1) + "-" + sectionList[section].end
