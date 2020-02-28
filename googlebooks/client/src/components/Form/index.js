import react from "react";
import "./style.css";

function Form(props) {
    return (
        <form>
            <div className="form-inline" id="form">
                <input className="form-control"
                    id="title"
                    type="text"
                    value={q}
                    placeholder="Book Search"
                    name="q"
                    onChange={props.handleInputChange} />
            </div>
            <div>
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-info">
                </button>
            </div>
        </form>
    );
}

export default Form;