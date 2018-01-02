import { generateRandomID } from './utils';

class App {
    id: string;

    constructor() {
        this.id = 'app';
    }
}

function main(ComponentClass) {
    var component = new ComponentClass();

    var appComponent = document.getElementById(component.id);
    setInterval(function() {
        appComponent.innerHTML = generateRandomID({
            symbol: '#',
            length: 7,
        });
    }, 1000);
}

main(App);