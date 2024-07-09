import Wrapper from "../Wrapper/Wrapper"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <Wrapper type="fluid">
      <div className={styles.mainContainer}>
        <h2 className={styles.mainTitle}>Тойға шақыру</h2>
        <h2 className={styles.mainTitle}>Дархан-Марзия</h2>
        <p className={styles.date}>11.08.2024</p>
      </div>
    </Wrapper>
  )
}

export default Main