import styles from "./Form.module.css"
import {ChangeEvent, useState} from "react";
import axios from "axios";
import Wrapper from "../Wrapper/Wrapper";

interface IGuestData {
    name: string,
    incoming: string,
    message: string,
    guestsCount: number
}

function Form() {
    const [guestData, setGuestData] = useState<IGuestData>({
        name: "",
        incoming: "",
        message: "",
        guestsCount: 1
    })

    const [validateInput, setValidateInput] = useState(false);
    const [responseMessage, setResponseMessage] = useState("")

    const [hideForm, setHideForm] = useState(false)

    const changeDataHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setGuestData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const incrementGuestsCount = () => {
        setGuestData(prevState => {
            return {
                ...prevState,
                guestsCount: +prevState.guestsCount + 1
            }
        })
    }

    const decrementGuestssCount = () => {
        const count = guestData.guestsCount - 1 > 1 ? guestData.guestsCount - 1 : 1

        setGuestData(prevState => {
            return {
                ...prevState,
                guestsCount: count
            }
        })
    }

    const sendDataHandler = async () => {
        if (guestData.name.trim().length === 0 || guestData.incoming.trim().length === 0) {
            setValidateInput(true)
            return
        } else {
            setValidateInput(false)
        }

        try {
            const response = await axios.post("https://wedding-v2-4947f-default-rtdb.firebaseio.com/.json", guestData)

            if (response.status === 200) {
                setHideForm(true)
                setResponseMessage("Біз сізді күтеміз! Тойда көріскенше!")
            }
        } catch (e) {
            setResponseMessage("Что то пошло не так, попробуйте позже")
        }
    }


    return (
        <Wrapper>

            <div className={styles.form}>
                <div className={[styles.formWrapper, hideForm ? styles.hideForm : ""].join(" ")}>

                    <div className={styles.formItem}>
                        <p className={styles.formItemTitle}>Аты-жөніңізді жазыңыз</p>
                        <input className={styles.formItemInput} type="text" name="name" onChange={changeDataHandler}
                               value={guestData.name}/>
                        {
                            validateInput ?
                                <p>Пожалуйста, заполните все обязательные поля</p> : null
                        }
                    </div>

                    <div className={styles.formItem}>
                        <p className={styles.formItemTitle}>Тойға келесіз бе?</p>
                        <input className={styles.formItemInput} type="text" name="incoming" onChange={changeDataHandler}
                               value={guestData.incoming}/>
                        {
                            validateInput ?
                                <p>Пожалуйста, заполните все обязательные поля</p> : null
                        }
                    </div>

                    <div className={styles.formItem}>
                        <p className={styles.formItemTitle}>Ізгі тілек білдірсеңіз</p>
                        <textarea className={styles.formItemTextArea} name="message" onChange={changeDataHandler}
                                  value={guestData.message}></textarea>
                    </div>

                    <div className={styles.formItem}>
                        <p className={styles.formItemTitle}>Қанша адам келесіздер?</p>
                        <div className={styles.counter}>
                            <button
                                className={styles.counterButton} onClick={decrementGuestssCount}>-
                            </button>
                            <input className={styles.formItemCount} type="number" name="guestsCount"
                                   onChange={changeDataHandler} value={guestData.guestsCount}/>
                            <button
                                className={styles.counterButton}
                                onClick={incrementGuestsCount}>+
                            </button>
                        </div>
                    </div>

                    <button className={styles.sendButton} onClick={sendDataHandler}>Жіберу</button>

                </div>


                <p className={[hideForm ? styles.statusText : ""].join(" ")}>{responseMessage}</p>

            </div>
        </Wrapper>

    );
}

export default Form;
