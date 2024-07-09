import styles from "./App.module.css"
import Timer from "./components/Timer/Timer.tsx";
import Form from "./components/Form/Form.tsx";
import Divider from "./components/Divider/Divider.tsx";
import Main from "./components/Main/Main.tsx";
import Invite from "./components/Invite/Invite.tsx";
import Road from "./components/Road/Road.tsx";
import DressCode from "./components/Dresscode/DressCode.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Calendar from "./components/Calendar/Calendar.tsx";
import Map from "./components/Map/Map.tsx";
import Chat from "./components/Chat/Chat.tsx";

function App() {
    return (
        <div className={styles.container}>
            <Main/>

            <Divider/>

            <Invite/>

            <Divider/>

            <Calendar/>

            <Divider/>

            <Timer/>

            <Divider/>

            <Road/>

            <Divider/>

            <DressCode/>

            <Divider/>

            <Form/>

            <Footer/>
        </div>
    );
}

export default App;
