import Wrapper from "../Wrapper/Wrapper.tsx";
import styles from "./Chat.module.css"
import Title from "../Title/Title.tsx";
import telegramIcon from "../../assets/telegram.png"

const Chat = () => {
    return (
        <Wrapper>
            <div className={styles.chatContainer}>
                <div className={styles.textBlock}>
                    <p className={styles.text}>Құрметті қонақтар, той фотоларын төмендегі каналдан ала аласыздар!</p>

                    <a className={styles.telegramButton} href="https://google.com">
                        <span>Каналға өту</span>
                        <img src={telegramIcon} alt="telegram"/>
                    </a>
                </div>

                <Title text={["қуанышымызға", "ортақ болыңыздар!"]} />
            </div>
        </Wrapper>
    );
};

export default Chat;
