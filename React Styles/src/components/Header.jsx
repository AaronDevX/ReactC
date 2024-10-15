import logo from '../assets/logo.png';
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles["header"]}>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
