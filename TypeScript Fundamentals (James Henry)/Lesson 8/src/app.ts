type ValidSymbol = '#' | '$';

var symbol: ValidSymbol = '#';
var length: number = 7;

function generateRandomID() {
    return symbol + Math.random().toString(36)
        .substr(2, length);
}

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        appComponent.innerHTML = generateRandomID();
    }, 1000);
}