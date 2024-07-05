import Hero from "./components/Hero/Hero.tsx";
import styles from "./App.module.css"
import Text from "./components/Text/Text.tsx";
import Shedule from "./components/Shedule/Shedule.tsx";
import Flower from "./components/Flower/Flower.tsx";
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

            

            {/* <Flower> */}
                
            {/* </Flower> */}

            <Wrapper>
                <Text />
            </Wrapper>

            {/* <Flower> */}
            <Wrapper>
                <Shedule />
            </Wrapper>
            {/* </Flower> */}

            {/* <Flower> */}
            <Wrapper>
                <Timer />
            </Wrapper>
            {/* </Flower> */}

            {/* <Flower> */}
            <Wrapper>
                <Address />
            </Wrapper>
            {/* </Flower> */}

            {/* <Flower> */}
            <Wrapper>
                <Form />
            </Wrapper>
            {/* </Flower> */}
        </div>
    );
}

export default App;