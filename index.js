function detectMinecraftClient() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes("Minecraft")) {
        console.log("Minecraft client detected");
    } else {
        console.log("Not a Minecraft client");
    }
}

detectMinecraftClient()
