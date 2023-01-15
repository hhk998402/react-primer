import React, { useReducer, useState } from "react";
import formReducer from "./formReducer";

const SimpleFormSingleState = () => {
    const [formState, dispatch] = useReducer(formReducer, {});
    const [showFormData, setShowFormData] = useState(false);
    const handleTextInput = (e) => {
        dispatch({
            type: "TEXT_INPUT",
            name: e.target.name,
            payload: e.target.value
        });
    };

    return(
        <div className="container">
            <h1 className="display-4">5. Simple Form - Single State Variable</h1>
            <h6 className="lead">
                <ol>
                    <li>Create a form with multiple input fields</li>
                    <li>Manage the state of the form using a single state variable</li>
                </ol>
            </h6>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={formState.username} onChange={handleTextInput} />
                    </div>

                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" name="recipient" value={formState.recipient} onChange={handleTextInput} />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                    </div>

                    <label htmlFor="basic-url">Your vanity URL</label>
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="url" value={formState.url} onChange={handleTextInput} />
                    </div>

                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" name="amount" value={formState.amount} onChange={handleTextInput} />
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                    </div>

                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Additional Comments</span>
                    </div>
                    <textarea className="form-control" aria-label="Additional Comments" name="comments" value={formState.comments} onChange={handleTextInput}></textarea>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => setShowFormData(!showFormData)}>Submit Data</button>
                <div className="text-wrap" style={{wordBreak: "break-all"}}>{showFormData ? JSON.stringify(formState) : "Form Submit not completed"}</div>
        </div>
    );
};

export default SimpleFormSingleState;