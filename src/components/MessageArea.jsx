import {NavLink} from "react-router-dom";


export function MessageArea(props) {

    return (
        <ul className="list-group mb-3 mt-3">
            {props.messages.map(function (message, index) {
                return (
                    <li key={index} className="list-group-item d-flex justify-content-start align-items-center">
                        <span className="bg-dark rounded-circle text-white m-2 p-2">
                            <NavLink className="link-light" to={`/dialogs/${parseInt(Math.random()*100)}`}>
                                {message.sender}
                                </NavLink>
                        </span>
                        <div className="bg-info text-white rounded p-2 col-auto">
                            {message.text}
                        </div>
                    </li>
                )
            })}
        </ul>
    );

}