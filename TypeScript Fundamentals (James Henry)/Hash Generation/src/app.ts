import { generateRandomID } from './utils';

var id = identity<number | string>(1);

function identity<T>(argument: T): T {
    return argument;
}

generateRandomID('#', 8);
generateRandomID({ symbol: '$', length: 11 });

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        appComponent.innerHTML = generateRandomID({
            symbol: '#',
            length: 7,
        });
    }, 1000);
}

main();