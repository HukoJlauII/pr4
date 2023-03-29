import {Title} from "./Title";
import App from "../App";
import {TextArea} from "./TextArea";
import {MessageArea} from "./MessageArea";
import {root} from "../index";

const messageList = []

function pushMessage(message) {
    messageList.push(message)
    root.render(<App/>)
}
export function Dialog() {
    return (
        <div>
            <Title/>
            <MessageArea messages={messageList}/>
            <TextArea pushMessage={pushMessage}/>
        </div>

    );
}