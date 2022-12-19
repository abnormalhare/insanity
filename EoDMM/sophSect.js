phrases = [
    {name: "Complete", color: "rainbow"},
    {name: "Practically done", color: "blue"},
    {name: "Partially done", color: "green"},
    {name: "Important parts done", color: "green"},
    {name: "In progress", color: "yellow"},
    {name: "AAAAAAA", color: "red"},
    {name: "Not done", color: "red"}
]

const setColor = (block) => {
    for (let i = 0; i < phrases.length; i++) {
        if (phrases[i].name == block.innerHTML) block.className = phrases[i].color + "Before"
    }
}