import React, { useState } from 'react'
import Title from '../Title/Title'
import styles from "./Road.module.css"

import favorite from "../../assets/roadmapIcons/favorite.png"
import bride from "../../assets/roadmapIcons/bride.png"
import arch from "../../assets/roadmapIcons/arch.png"
import dance from "../../assets/roadmapIcons/dance.png"
import cake from "../../assets/roadmapIcons/cake.png"
import groupDance from "../../assets/roadmapIcons/groupDance.png"
import Wrapper from '../Wrapper/Wrapper'

const Road = () => {
    const [roadData, setRoadData] = useState([
        {
            textData: {
                time: "17:00",
                description: "ҚОНАҚТАРДЫҢ ЖИНАЛУЫ"
            },
            imagePath: favorite
        },
        {
            textData: {
                time: "18:00",
                description: "БЕТАШАР РӘСІМІ"
            },
            imagePath: bride
        },
        {
            textData: {
                time: "19:00",
                description: "ТОЙДЫҢ БАСТАЛУЫ"
            },
            imagePath: arch
        },
        {
            textData: {
                time: "20:00",
                description: "ҚАЛЫҢДЫҚ ПЕН КҮЙЕУЖІГІТ ВАЛЬСІ"
            },
            imagePath: dance
        },
        {
            textData: {
                time: "21:00",
                description: "ТОЙДЫҢ ТОРТЫ"
            },
            imagePath: cake
        },
        {
            textData: {
                time: "22:00",
                description: "МУЗЫКАЛЫҚ БИ, ШОУ БАҒДАРЛАМА"
            },
            imagePath: groupDance
        },
    ])

    return (
        <Wrapper>

        <div className={styles.roadContainer}>

            <Title text={["той күнінің", "бағдарламасы:"]} />

            <div className={styles.roadmapItems}>


            {
                roadData.map((item, index) => {
                    return (
                        <div key={index} className={styles.roadItem}>
                            <div className={styles.block}>
                                <img className={styles.roadItemIcon} src={item.imagePath} alt="icon" />
                            </div>
                            <div className={styles.block}>
                                <div className={styles.marker}></div>
                            </div>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.time}>{item.textData.time}</p>
                                    <p className={styles.description}>{item.textData.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>


        </div>
        </Wrapper>

    )
}

export default Road
