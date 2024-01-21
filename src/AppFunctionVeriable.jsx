import { sum, sub, multi, div } from "./Calc";
const youtuber = "thapa technical";

const favprog = "React js";
function myName() {
    let name = "shahil";
    return name;
}
function myNames() {
    let name = "kumar";
    return name;
}
function App() {
    return (<ol>
        <li>{sum(40, 4)}</li>
        <li>{sub(40, 4)}</li>
        <li>{multi(40, 4)}</li>
        <li>{div(40, 3)}</li>
    </ol>);
}

export default youtuber;

export { favprog, myName, myNames, App };