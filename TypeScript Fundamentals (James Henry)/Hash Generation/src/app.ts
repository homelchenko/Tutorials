import { random } from 'lodash';

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

function prop(){
    return (
        target,
        propertyName
    ) => {
        console.log(target, propertyName);
    }
}

function param(){
    return (
        target,
        propertyName,
        index
    ) => {
        console.log(target, propertyName, index);
    }
}

@Component({
    id: 'app'
})
class App {
    @prop()
    factor: number;

    @enumerable(false)
    private onInit(@param()element: HTMLElement | null): void {
        if (element) {
            setInterval(function() {
                element.innerHTML = generateRandomID({
                    symbol: '#',
                    length: random(7, 10),
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