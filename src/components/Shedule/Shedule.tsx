import styles from "./Shedule.module.css"

function Shedule() {
    return (
        <div className={styles.sheduleContainer}>
            <div className={styles.sheduleWrapper}>
                <p>
                    Той иелері: <br/>
                    <strong style={{color: "white"}}>“Қабаш”</strong>-Сәлима
                </p>

                <p>
                    Той күні<br/>
                    11 Тамыз
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