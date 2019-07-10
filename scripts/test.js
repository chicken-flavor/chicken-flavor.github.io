function test() {
    document.write("Hello World");
}

function requestReady() {
    return xmlRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
}