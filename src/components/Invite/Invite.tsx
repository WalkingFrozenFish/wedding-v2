import Title from "../Title/Title"
import Wrapper from "../Wrapper/Wrapper"
import styles from "./Invite.module.css"

const Invite = () => {
  return (
    <Wrapper>
      <div className={styles.inviteContainer}>
        <Title text={["Құрметті", "қонақтар!"]} />

        <div className={styles.textBlock}>
          <p className={styles.text}>Сіз(дер)ді балаларымыз</p>

          <p className={styles.left}>Дархан</p>
          <p className={styles.text}>МЕН</p>
          <p className={styles.right}>Марзия</p>

          <p className={styles.text}>үйлену тойына<br />
            арналған салтанатты<br />
            ақ дастарханымыздың<br />
            қадірлі қонағы болуға<br />
            шақырамыз!</p>
        </div>

        <div className={styles.bottomText}>
          <p className={styles.text}>той иелері:</p>
          <p className={styles.name}><strong>“Қабаш”</strong>-Сәлима</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Invite
