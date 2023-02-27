import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Title} from "./components/Title";
import {TextArea} from "./components/TextArea";
import {MessageArea} from "./components/MessageArea";
import {root} from "./index";

const messageList = []

function pushMessage(message) {
    messageList.push(message)
    root.render(<App/>)
}

function App() {
    return (
        <div className="App">
            <Title/>
            <MessageArea messages={messageList}/>
            <TextArea pushMessage={pushMessage}/>
        </div>
    );
}

export default App;
