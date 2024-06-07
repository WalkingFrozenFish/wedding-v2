import { ReactNode } from "react";
import styles from "./Flower.module.css"

function Flower(props: { children: ReactNode }) {
    return (
        <div className={styles.flowerContainer}>
            {props.children}
        </div>
    );
}

export default Flower;