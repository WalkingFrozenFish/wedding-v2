import styles from "./Address.module.css"

function Address() {
    return (
        <div className={styles.addressWrapper}>
            <p>
                Мекен-жай: Ақтөбе обл Ырғыз ауданы. “Наурыз” мейрамханасы
            </p>
        </div>
    );
}

export default Address;