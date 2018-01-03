import { generateRandomID } from './utils';

class Component {
    constructor() {
        this.log();
    }

    log(){
        console.log(`Component created`);
    }
}

class App extends Component {
    static id = 'app';

    onInit(element: HTMLElement | null): void {
        if (element) {
            setInterval(function() {
                element.innerHTML = generateRandomID({
                    symbol: '#',
                    length: 7,
                });
            }, 1000);
        }
    }
}

function main(ComponentClass) {
    var applicationRoot = document.getElementById(App.id);
    var component = new ComponentClass();
    component.onInit(applicationRoot);
}

main(App);