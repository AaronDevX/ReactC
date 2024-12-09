import LogoImg from '../assets/quiz-logo.png';

function Header() {
    return(
        <header>
            <img src={LogoImg} alt="Quiz Logo" />
            <h1>React Quiz</h1>
        </header>
    )
}

export default Header;