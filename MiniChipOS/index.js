const check_text = (text) => {
    let split = text.value.split(" ")
    console.log(split, split[0])
    switch (split[0]) {
        case "color":
            document.body.style.backgroundColor = split[1]
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

    window.requestAnimationFrame
}

const check_input = (event) => {
    switch (event.keyCode) {
        case 13:
            command_check()
    }
}

document.input.focus()