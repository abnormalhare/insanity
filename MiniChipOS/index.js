const check_text = (text) => {
    let split = text.split(" ")
    switch (split[0]) {
        case "color":
            text.style.background_color = split[1]
            break
        case "quit":
            window.close()
            break
    }
}

const command_check = () => {
    let text = document.getElementById("text")

    check_text(text)

    window.requestAnimationFrame
}

const check_input = (event) => {
    switch (event.keyCode) {
        case 13:
            command_check()
    }
}

document.getElementById("text").focus()