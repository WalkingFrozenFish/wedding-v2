import { ReactNode } from 'react'
import styles from "./Wrapper.module.css"

const Wrapper = (props: { children: ReactNode }) => {
    return (
        <div className={styles.wrapper}>{props.children}</div>
    )
}

export default Wrapper