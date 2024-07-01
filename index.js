function detectChromeBrowser() {
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        return true
    } else {
        return false
    }
}

if (detectChromeBrowser()) {
    alert("Google is removing the ability to use ad-blockers on all chromium browsers!\nPlease use Firefox with uBlock Origin or Brave with shields!")
}
