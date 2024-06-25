import styles from "./Text.module.css"

function Text() {
    return (
        <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
                <p>
                    Құрметті қонақтар!
                </p>
                <p>
                    Сіздерді ұлымыз Дарханның мен келініміз Марзияның шаңырақ көтеру тойына шақырамыз!
                </p>
                <p>
                    Келіңіздер, шақырамыз тойымызға Келін түсті, құс қонды қолымызға Ағайын,құда,жекжат, дос жарандар Ақ
                    ниетпен шақырамыз тойымызға.
                </p>
            </div>
        </div>
    );
}

export default Text;