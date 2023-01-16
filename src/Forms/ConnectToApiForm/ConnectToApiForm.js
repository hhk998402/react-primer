import React, { useEffect, useReducer, useState } from "react";
import ApiFormReducer from "./ApiFormReducer";
import axios from "axios";
import MessageAlertBox from "../../Common/MessageAlertBox";

const ConnectToApiForm = () => {
    const initialFormState = [
        {
            "createdAt": "",
            "name": "",
            "avatar": "",
            "id": "",
            "email": "",
            "sex": ""
        }
    ];

    const [formState, dispatch] = useReducer(ApiFormReducer, initialFormState);
    const [dataFromApi, updateApiData] = useReducer(ApiFormReducer, initialFormState);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    useEffect(() => {
        axios.get("https://63c476c58067b6bef6d989d6.mockapi.io/api/v1/users")
        .then(response => updateApiData({
            type: "UPDATE_FROM_API",
            payload: response.data
        }))
        .catch(err => {
            toggle();
            setModalContent({
                title: "Error occurred with API call",
                content: err
            });
            setTimeout(() => {
                setShowModal(showModal => showModal ? !showModal : showModal);
            }, 3000);
        });
    }, []);

    const toggle = () => {
        setShowModal(!showModal);
    }

    const handleTextInput = (e, idx) => {
        dispatch({
            type: "TEXT_INPUT",
            payload: e.target.value,
            key: e.target.name,
            idx: idx
        });
    };

    const submitDataToApi = () => {
        formState[0].createdAt = new Date();
        axios.post("https://63c476c58067b6bef6d989d6.mockapi.io/api/v1/users", formState[0])
        .then((response) => {
            toggle();
            setModalContent({
                title: "Data Successfully Posted to API",
                content: JSON.stringify(response.data)
            });
            setTimeout(() => {
                setShowModal(showModal => showModal ? !showModal : showModal);
            }, 3000);
        })
        .catch((err) => {
            toggle();
            setModalContent({
                title: "Error occurred with API call",
                content: err
            });
            setTimeout(() => {
                setShowModal(showModal => !showModal);
            }, 3000);
        });
    };

    return(
        <div className="container">
            <h1 className="display-4">7. Moderate Form - Submit Data to API</h1>
            <h6 className="lead">
                <ol>
                    <li>Create a form with multiple input fields</li>
                    <li>Send form output to API when user click submit</li>
                    <li>Show data below </li>
                </ol>
            </h6>
            {formState.map((entry, idx) => {
                return(
                    <div className="row">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Username</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" name="name" value={entry.name} 
                            onChange={(e) => handleTextInput(e,idx)} />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Sex</span>
                            </div>
                            <select type="custom-select" className="form-control" placeholder="Sex" aria-label="Sex" aria-describedby="basic-addon1" name="sex" value={entry.sex} 
                            onChange={(e) => handleTextInput(e,idx)}>
                                <option selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not-listed">Not Listed</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name="email" value={entry.email} 
                            onChange={(e) => handleTextInput(e,idx)} />
                        </div>
                    </div>
                );
            })}   
            <button className="btn btn-primary" type="submit" onClick={() => submitDataToApi()}>Submit Data</button>
            <h1 className="display-6">Data from API</h1>
            <div className="row">
            {
                dataFromApi.map((entry) => {
                    return(
                        <div className="col-sm-3 card" style={{ width: '18rem'}}>
                            <img className="card-img-top" src={entry.avatar} alt="User Avatar" />
                            <div className="card-body">
                                <p className="card-text">Name: {entry.name}</p>
                                <p className="card-text">Email: {entry.email}</p>
                                <p className="card-text">Sex: {entry.sex}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <MessageAlertBox
                title={modalContent.title}
                content={modalContent.content}
                toggle={toggle}
                modalOpen={showModal}
            />
        </div>
    );
};

export default ConnectToApiForm;