import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
const randomArrayIndex = randomNumber(reactDescriptions.length);


export default function Header() {
    const randomDescription = reactDescriptions[randomArrayIndex];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {randomDescription} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}