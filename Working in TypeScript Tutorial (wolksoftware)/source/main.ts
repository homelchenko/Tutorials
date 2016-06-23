import Greeter from "./entities/greeter";

let greeter = new Greeter("world!");
let msg = greeter.greet();

export default function() {
    return msg;
}
