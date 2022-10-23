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

const check_text = (text) => {
    let split = text.value.split(" ")
    text.value = ""
    switch (split[0]) {
        case "color":
            determineColor(split[1])
            break
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

document.input.focus()
