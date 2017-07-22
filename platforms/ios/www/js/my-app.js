// Initialize your app
var myApp = new Framework7({});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', onDeviceReady(), false);

function onDeviceReady() {
    var success = function (message) {
        alert(message);
    };

    var failure = function (error) {
        alert("Error:" + error);
    };
    if (clientCertificate) {
        clientCertificate.register("www/keystore/client_side.p12", "123456", success, failure);
    }

}