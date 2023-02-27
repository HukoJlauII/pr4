export function MessageArea(props) {
    console.log(props.messages)
    return (
        <ul className="list-group mb-3 mt-3">
            {props.messages.map(function (message,index)
            {
                return(
                    <li key={index} className="list-group-item d-flex justify-content-start align-items-center">
                        <span className="bg-dark rounded-circle text-white m-2 p-2">
                            {message.sender}
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