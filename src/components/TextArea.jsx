export function TextArea(props) {
    return (
        <div className="row g-3 sticky-bottom justify-content-center">
            <div className="col-3">
                <input type="text" className="form-control" placeholder="Enter your name" id="name"/>
            </div>
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Text message" id="text"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={function () {
                    let sender = document.querySelector('#name').value
                    let text = document.querySelector('#text').value
                    if (sender && text) {
                        props.pushMessage({
                            sender: sender,
                            text: text
                        })
                        document.querySelector('#text').value=''
                    }
                }}>Send
                </button>
            </div>
        </div>
    );
}