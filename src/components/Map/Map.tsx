import Wrapper from "../Wrapper/Wrapper.tsx";
import styles from "./Map.module.css"
import Title from "../Title/Title.tsx";

const Map = () => {
    return (
        <Wrapper>
            <div className={styles.mapContainer}>
                <Title text={["мекен-жайы:"]} />

                <div className={styles.textBlock}>
                    <p className={styles.text}>Ақтөбе обл Ырғыз ауданы.</p>
                    <p className={styles.place}>“Наурыз”</p>
                    <p className={styles.text}>мейрамханасы</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Map;
