import styles from "./Shedule.module.css"

function Shedule() {
    return (
        <div className={styles.sheduleContainer}>
            <div className={styles.sheduleWrapper}>
                <p>
                    Той иелері <br/>
                    Бауыржан & Ботагөз
                </p>

                <p>
                    Той күні<br/>
                    13 шілде
                </p>

                <p>
                    Басталу уақыты<br/>
                    Сағат 18:00
                </p>
            </div>
        </div>
    );
}

export default Shedule;