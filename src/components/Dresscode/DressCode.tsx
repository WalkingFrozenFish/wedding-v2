import styles from "./Dresscode.module.css"

import male from "../../assets/dressCodeIcons/male.png"
import female from "../../assets/dressCodeIcons/female.png"
import Wrapper from '../Wrapper/Wrapper'

const DressCode = () => {
    return (
        <Wrapper>
            <div className={styles.dresscodeContainer}>
                <h2 className={styles.title}>Дресс-код</h2>
                <div className={styles.types}>
                    <div className={styles.type}>
                        <img className={styles.icon} src={male} alt="Dress icon" />
                        <p className={styles.typeDescription}>Ерлер қауымы: классикалык костюм</p>
                    </div>
                    <div className={styles.type}>
                        <img className={styles.icon} src={female} alt="Dress icon" />
                        <p className={styles.typeDescription}>Әйелдер қауымы: кешкі көйлек</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DressCode
