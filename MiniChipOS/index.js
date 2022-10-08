const determineColor = (value) => {
    const hex = [["a", "b", "c", "d", "e", "f"], [10, 11, 12, 13, 14, 15]]
    let hex6 = false
    value = value.split("")
    if (value.length == 7) { value.remove(2);value.remove(4);value.remove(6) }
    for (let i = 1; i < 3; i++) {
        try {
            value[i] = parseInt(value[i])
        } catch {
            for (let j = 0; j < 6; j++) {
                if (value[i] == hex[0][j]) {
                    value[i] = hex[1][j]
                }
            }
        }
    }
    if (value[0] > 8 && value[1] > 8 && value[2] > 8) {
        body.style.color = "black"
    } else {
        body.style.color = "white"
    }
    
}

const check_text = (text) => {
    let split = text.value.split(" ")

    switch (split[0]) {
        case "color":
            
            determineColor(split[1])
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