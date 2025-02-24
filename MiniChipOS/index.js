const determineColor = (value) => {
    if (value.indexOf("#") != -1) {
        return
    }
    if (value == "black" || value.indexOf("dark") != -1) {
        document.body.style.color = "white"
        document.getElementById("text").style.color = "white"
    } else {
        document.body.style.color = "black"
        document.getElementById("text").style.color = "black"
    }
    document.body.style.backgroundColor = value
}

const cd = (value) => {
    for (let i in currentDir) {
        inside = currentDir[i]
        console.log(inside)
        if (value == inside.name_.toUpperCase()) {
            currentDirName.concat(inside.name_)
        }
    }
}

const check_text = (text) => {
    let split = text.value.split(" ")
    text.value = ""
    switch (split[0]) {
        case "color":
            determineColor(split[1])
            break
        case "cd":
            cd(split[1])
        case "quit":
            document.body.innerHTML = ""
            break
    }
}

const command_check = () => {
    let text = document.getElementById("text")

    check_text(text)
}

const check_input = (event) => {
    switch (event.keyCode) {
        case 13:
            command_check()
    }
}

let directory = {
    NUL: {
        computer: {
            operations: {
                about: ["cmd", "ABOUT"],
                cd: ["cmd", "CD"],
                help: ["cmd", "HELP"],
            },
            name_: "COMPUTER"
        },
        name_: "[NUL]:/"
    }
}
let currentDir = directory.NUL
let currentDirName = directory.NUL.name_

document.getElementById("text").focus()

dirList = []
for (let i in currentDir) {
    dirList.push(currentDir[i].name_)
}

document.getElementById("dirText").innerHTML = dirList