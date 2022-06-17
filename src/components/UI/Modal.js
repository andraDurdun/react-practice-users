import "./Modal.css"

const Modal = (props) => {

    return (
        <div className="modal_container">
            <div className="modal_container_header">
                Invalid input
            </div>
            <div className="modal_container_text">
                {props.text}
            </div>
            <button onClick={props.closeModal}>Okay</button>
        </div>
    )
}

export default Modal;