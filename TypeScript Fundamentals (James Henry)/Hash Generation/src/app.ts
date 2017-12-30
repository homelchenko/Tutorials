type ValidSymbol = '#' | '$';

interface GenerateOptions {
    symbol: ValidSymbol,
    length: number,
}

generateRandomID('#', 8);
generateRandomID({ symbol: '$', length: 11 });

function generateRandomID(symbol: ValidSymbol, length: number): string;
function generateRandomID(options: GenerateOptions): string;
function generateRandomID(optionsOrSymbol: GenerateOptions | ValidSymbol, length?: number): string {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36)
            .substr(2, length);
    }

    return optionsOrSymbol.symbol + Math.random().toString(36)
        .substr(2, optionsOrSymbol.length);
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