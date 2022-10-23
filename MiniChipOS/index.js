const determineColor = (value) => {
    let out = value.replace("#", "")
    try {
        out = Number(out)
        if (out.toString().length < 4 && out < 555) {
            document.body.style.color = white
        } else if (out.toString().length > 4 && out < 555555) {
            document.body.style.color = white
        } else {
            document.body.style.color = black
        }
    } catch (e) {
        if (out == "black" || out.search("dark") != -1) {
            document.body.style.color = white
        } else {
            document.body.style.color = black
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
            window.close()
            break
    }
}

const command_check = () => {
    let text = document.getElementById("text")

    check_text(text)
    console.log("test")

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
