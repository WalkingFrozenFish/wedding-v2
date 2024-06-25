import styles from "./Text.module.css"

function Text() {
    return (
        <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
                <p>
                    Құрметті қонақтар!
                </p>
                <p>
                    Сіздерді ұлымыз Дархан мен келініміз Марзияның шаңырақ көтеру тойына шақырамыз!
                </p>
                <p>
                    Келіңіздер, шақырамыз тойымызға<br />
                    Келін түсті, құс қонды қолымызға<br />
                    Ағайын,құда,жекжат, дос жарандар<br />
                    Ақ ниетпен шақырамыз тойымызға.<br />
                </p>
            </div>
        </div>
    );
}

export default Text;