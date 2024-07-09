import { useState } from "react"
import styles from "./Title.module.css"

interface IProps {
    text: string[]
}

const Title = ({ text }: IProps) => {
    const [textData] = useState<string[]>(text)

    return (
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                {
                    textData.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        </div>

    )
}

export default Title
