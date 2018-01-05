import { generateRandomID, Component } from './utils';

function enumerable(isEnumerable: boolean) {
    return (
        target,
        propertyName,
        propertyDescriptor: PropertyDescriptor
    ) => {
        propertyDescriptor.enumerable = isEnumerable;
    }
}

@Component({
    id: 'app'
})
class App {
    @enumerable(false)
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