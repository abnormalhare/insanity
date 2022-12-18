const sectionList = [
    {type: "chapter", chapter: "1.2.6", end: 633},
    {type: "an", end: 651},
    {type: "anabs", end: 665},
    {type: "anand", end: 669},
    {type: "sylan", end: 677},
    {type: "mpan", end: 697},
    {type: "mpbian", end: 704},
    {type: "adant", end: 780},
    {type: "simp", end: 832}
]
///// USE FOR UPDATING TO NEXT SECTION /////
let section = 2
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

chapCurr.innerHTML = sectionList[chapter].chapter
typeCurr.innerHTML = ""+sectionList[section].type
areaCurr.innerHTML = (sectionList[section - 1].end + 1) + "-" + sectionList[section].end

section++;
if (sectionList[section].type == "chapter") {
    chapter = section;
    section++;
}
chapNext.innerHTML = sectionList[chapter].chapter
typeNext.innerHTML = ""+sectionList[section].type
areaNext.innerHTML = (sectionList[section - 1].end + 1) + "-" + sectionList[section].end
