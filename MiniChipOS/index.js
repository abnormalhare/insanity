const determineColor = (value) => {
    let out = value.replace("#", "")
    try {
        out2 = Number(out)
        console.log(out2)
        if (out.length < 4 && out2 < 555) {
            document.body.style.color = "white"
            console.log("White: < 4, < 555")
        } else if (out.length > 4 && out2 < 555555) {
            document.body.style.color = "white"
            console.log("White: > 4, < 555555")
        } else {
            document.body.style.color = "black"
            console.log("black")
        }
        out = "#" + out2
        console.log(out)
    } catch (e) {
        if (out == "black" || out.indexOf("dark") != -1) {
            document.body.style.color = "white"
        } else {
            document.body.style.color = "black"
        }
    }
    document.body.style.backgroundColor = out
}

const check_text = (text) => {
    let split = text.value.split(" ")

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

    text.value = ""

    window.requestAnimationFrame
}

const check_input = (event) => {
    switch (event.keyCode) {
        case 13:
            command_check()
    }
}

document.input.focus()
