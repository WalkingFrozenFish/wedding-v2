import styles from "./Timer.module.css"
import {useEffect, useState} from "react";

let timerId: any = null

function Timer() {
    const deadline: any = new Date(2024, 6, 13);

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const declensionNum = (num: any, words: any) => {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    };

    const countdownTimer = () => {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        setTimeRemaining({
            days,
            hours,
            minutes,
            seconds,
        });
    };

    useEffect(() => {
        timerId = setInterval(countdownTimer, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className={styles.timerWrapper}>
            <p className={styles.title}>Үйлену тойына дейін қалды</p>

            <div className={styles.items}>

                <div className={styles.item}>
                    <p>{timeRemaining.days < 10 ? '0' + timeRemaining.days : timeRemaining.days}</p>
                    <p>{declensionNum(timeRemaining.days, ['Күн', 'Күн', 'Күн'])}</p>
                </div>

                <div className={styles.item}>
                    <p>{timeRemaining.hours < 10 ? '0' + timeRemaining.hours : timeRemaining.hours}</p>
                    <p>{declensionNum(timeRemaining.hours, ['Сағат', 'Сағат', 'Сағат'])}</p>
                </div>

                <div className={styles.item}>
                    <p>{timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes}</p>
                    <p>{declensionNum(timeRemaining.minutes, ['Минут', 'Минут', 'Минут'])}</p>
                </div>

                <div className={styles.item}>
                    <p>{timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds}</p>
                    <p>{declensionNum(timeRemaining.seconds, ['Секунд', 'Секунд', 'Секунд'])}</p>
                </div>
            </div>

        </div>
    );
}

export default Timer;