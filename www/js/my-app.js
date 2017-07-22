// Initialize your app
var myApp = new Framework7({});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
    var success = function (message) {
        alert(message);
    };

    var failure = function (error) {
        alert("Error:" + error);
    };
    clientCertificate.register("keystore/client_side.p12", "123456", success, failure);

}