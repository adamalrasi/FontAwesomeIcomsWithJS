// Brake chain animation
function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function () {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

// Call animation
brakeChain();

// Brakes chain every 2 seconds
setInterval(brakeChain, 2000);

function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    setTimeout(function () {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
        battery.innerHTML = "&#xf240;";
    }, 4000);


}

// Run animation
chargeBattery();

// Charge battery every 5 seconds
setInterval(chargeBattery, 5000);


function hourGlass() {
    let glass = document.getElementById('glass');
    glass.innerHTML = "&#xf251;";
    setTimeout(function () {
        glass.innerHTML = "&#xf253;";
    }, 1000);
    setTimeout(function () {
        glass.innerHTML = "&#xf252;";
    }, 2000);
}

hourGlass();

// Run animation every 3 seconds
setInterval(hourGlass, 3000);