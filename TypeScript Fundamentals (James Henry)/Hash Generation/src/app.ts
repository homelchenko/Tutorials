import { generateRandomID } from './utils';

class App {
    static id = 'app';
}

function main() {
    var appComponent = document.getElementById(App.id);
    setInterval(function() {
        appComponent.innerHTML = generateRandomID({
            symbol: '#',
            length: 7,
        });
    }, 1000);
}

main();