import styles from "./Hero.module.css"
import heroBg from "../../assets/hero-bg.png"

function Hero() {
    return (
        <div className={styles.heroContainer}>
            <img className={styles.heroBg} src={heroBg} alt="Background"/>

            <h2 className={styles.names}>Нұрберген & Анель</h2>

            <div className={styles.date}>
                <p>13.07.2024</p>
            </div>
        </div>
    );
}

export default Hero;