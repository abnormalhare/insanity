function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

const check_text = (text) => {
    let split = text.innerHTML.split(" ")
    switch (split[0]) {
        case "color":
            text.style = "background-color: " + split[1]
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

document.getElementById("text").focus()