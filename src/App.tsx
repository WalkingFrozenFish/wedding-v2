import Hero from "./components/Hero/Hero.tsx";
import styles from "./App.module.css"
import Text from "./components/Text/Text.tsx";
import Shedule from "./components/Shedule/Shedule.tsx";
import Address from "./components/Address/Address.tsx";
import Timer from "./components/Timer/Timer.tsx";
import Form from "./components/Form/Form.tsx";
import Wrapper from "./components/Wrapper/Wrapper.tsx";

function App() {
    return (
        <div className={styles.container}>

            <Wrapper>
                <Hero/>
            </Wrapper>

            <Wrapper>
                <Text />
            </Wrapper>

            <Wrapper>
                <Shedule />
            </Wrapper>

            <Wrapper>
                <Timer />
            </Wrapper>

            <Wrapper>
                <Address />
            </Wrapper>

            <Wrapper>
                <Form />
            </Wrapper>
        </div>
    );
}

export default App;