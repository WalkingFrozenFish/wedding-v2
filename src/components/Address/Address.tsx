import styles from "./Address.module.css"

function Address() {
    return (
        <div className={styles.addressWrapper}>
            <p>
                Мекен-жайымыз
                Қандыағаш қаласы
                "Дастархан" мейрамханасы
            </p>
        </div>
    );
}

export default Address;