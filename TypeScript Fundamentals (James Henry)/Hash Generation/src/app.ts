type ValidSymbol = '#' | '$';

function generateRandomID(options: { symbol: ValidSymbol, length: number }): string {
    return options.symbol + Math.random().toString(36)
        .substr(2, options.length);
}

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        appComponent.innerHTML = generateRandomID({
            symbol: '#',
            length: 7,
        });
    }, 1000);
}