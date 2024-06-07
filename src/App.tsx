import Hero from "./components/Hero/Hero.tsx";
import styles from "./App.module.css"
import Text from "./components/Text/Text.tsx";
import Shedule from "./components/Shedule/Shedule.tsx";
import Flower from "./components/Flower/Flower.tsx";
import Address from "./components/Address/Address.tsx";
import Timer from "./components/Timer/Timer.tsx";

function App() {
    return (
        <div className={styles.container}>
            <Hero/>

            <Flower>
                <Text />
            </Flower>

            <Flower>
                <Shedule />
            </Flower>

            <Flower>
                <Timer />
            </Flower>

            <Flower>
                <Address />
            </Flower>
        </div>
    );
}

export default App;