atv.config = {
    doesJavaScriptLoadRoot: true
}

atv.onAppEntry = function () {
    atv.loadURL("https://samples-appletv.shea.nz/xml/start.xml");
}