import { ReactNode } from 'react'
import styles from "./Wrapper.module.css"

const Wrapper = (props: { children: ReactNode, type?: string | undefined }) => {
    return (
        <div className={[styles.wrapper, props.type === "fluid" ? styles.fluid : ""].join(" ")}>{props.children}</div>
    )
}

export default Wrapper