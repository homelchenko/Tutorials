import { generateRandomID, Component } from './utils';

@Component({
    id: 'app'
})
class App {
    private onInit(element: HTMLElement | null): void {
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
    var applicationRoot = document.getElementById(ComponentClass.id);
    var component = new ComponentClass();
    component.onInit(applicationRoot);
}

main(App);