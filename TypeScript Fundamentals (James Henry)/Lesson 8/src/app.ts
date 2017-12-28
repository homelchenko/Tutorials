type ValidSymbol = '#' | '$';

function generateRandomID(symbol: ValidSymbol, length: number): string {
    return symbol + Math.random().toString(36)
        .substr(2, length);
}

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        appComponent.innerHTML = generateRandomID('#', 7);
    }, 1000);
}