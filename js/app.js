function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}


function onDeviceReady() {
    FastClick.attach(document.body);
//	startRatchet();
}