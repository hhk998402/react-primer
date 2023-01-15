import React, { useReducer } from "react";
import formReducer from "../SimpleForm2_DynamicInputs/formReducer";

const SimpleFormDynamicInputs = () =>{
    const initialFormState = {
        username: "",
        recipient: "",
        url: "",
        amount: 0,
        comments: ""
    };

    const [formState, dispatch] = useReducer(formReducer, [initialFormState]);
    const handleTextInput = (e, idx) => {
        dispatch({
            type: "TEXT_INPUT",
            name: e.target.name,
            payload: e.target.value,
            idx: idx
        });
    };
    const handleAddNewInputGroup = (e) => {
        dispatch({
            type: "ADD_NEW_INPUT_GROUP",
            payload: initialFormState
        })
    };
    const handleDelNewInputGroup = (e) => {
        dispatch({
            type: "DEL_NEW_INPUT_GROUP",
            payload: initialFormState
        })
    };

    return(
        <div className="container">
            <h1 className="display-4">6. Simple Form - Dynamic Inputs</h1>
            <h6 className="lead">
                <ol>
                    <li>Create a form with multiple input fields</li>
                    <li>Manage the state of the form using a single state variable</li>
                    <li>Allow addition of a new input group</li>
                    <li>Allow removal of an input group</li>
                </ol>
            </h6>
            <button className="btn btn-primary" type="button" onClick={handleAddNewInputGroup}>Add Input Group</button>
            <button className="btn btn-danger" type="button" onClick={handleDelNewInputGroup}>Remove Input Group</button>
            <div className="text-wrap" style={{wordBreak: "break-all", margin: '20px 0 20px 0'}}>
                All Input Group Data Display: <br></br>
                {JSON.stringify(formState)}
            </div>
            {
                formState.map((entry, idx) => {
                    return(
                        <div className="row" style={{ border: '1px solid black', margin: '20px 0 20px 0' }}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
                                name="username" value={entry.username} onChange={(e) => handleTextInput(e,idx)} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                 name="recipient" value={entry.recipient} onChange={(e) => handleTextInput(e,idx)} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                            </div>

                            <label htmlFor="basic-url">Your vanity URL</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="url" value={entry.url} onChange={(e) => handleTextInput(e,idx)} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" name="amount" value={entry.amount} onChange={(e) => handleTextInput(e,idx)} />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Additional Comments</span>
                                </div>
                                <textarea className="form-control" aria-label="Additional Comments" name="comments" value={entry.comments} onChange={(e) => handleTextInput(e,idx)}></textarea>
                            </div>
                            <div className="text-wrap" style={{wordBreak: "break-all", margin: '20px 0 20px 0'}}>{JSON.stringify(entry)}</div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default SimpleFormDynamicInputs;