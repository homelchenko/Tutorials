import { generateRandomID } from './utils';

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