import React, { useEffect, useReducer, useState } from "react";
import formReducer from "./formReducer";
import {
    Form,
    FormGroup,
    Label,
    Input,
}
from 'reactstrap';
import { UserDataContext } from "../../Contexts/FormContext";
import EducationModal from "./EducationModal";

const ParentForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {});
    const [showModal, setShowModal] = useState(false);
    const [modalSettings, setModalSettings] = useState({name:"",data:"", idx:null});

    const toggle = () => {
        setShowModal(!showModal);
    };
    const setupModal = (name, data, idx) => {
        toggle();
        setModalSettings({
            name: name,
            data: data,
            idx: idx
        });
    };
    
    const handleTextInput = (e) => {
        dispatch({
            type: "HANDLE_INPUT",
            payload: e.target.value,
            key: e.target.name
        });
    };
    
    return(
        <UserDataContext.Provider
            value={{formState, dispatch}}
        >
            <div className="container">
                <h1 className="display-4">9. Moderate Form - React Context API</h1>
                <h6 className="lead">
                    <ol>
                        <li>Create a form that has nested components (child components)</li>
                        <li>Manage the state of the form in a single global state</li>
                        <li>Use React Context API for the same</li>
                    </ol>
                </h6>
                <Form>
                    <FormGroup>
                        <Label for="name">
                        Name
                        </Label>
                        <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        value={formState.name}
                        onChange={handleTextInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                        EMail
                        </Label>
                        <Input
                        id="email"
                        name="email"
                        placeholder="Please enter your email"
                        type="email"
                        value={formState.email}
                        onChange={handleTextInput}
                        />
                    </FormGroup>
                    <div className="row" style={{margin: '0 0 20px 0'}}>
                        <h6 className="display-6">Enter your education details</h6>
                        {
                            formState && formState.education && formState.education.length > 0 ? 
                            formState.education.map((entry,idx) => {
                                return(
                                    <div className="col-sm-12 card" onClick={() => setupModal("education",entry,idx)}>
                                        <div className="card-body">
                                            <p className="card-text">College: {entry.college}</p>
                                            <p className="card-text">Degree: {entry.degree}</p>
                                            <p className="card-text">Click to edit</p>
                                        </div>
                                    </div>
                                )
                            })
                            : null
                        }
                    <button type="button" className="btn btn-secondary" style={{maxWidth:'30%'}} onClick={() => setupModal("education", null, null)}>Add Education Details</button>
                    </div>
                    
                    
                    <EducationModal 
                        toggle={toggle}
                        modalOpen={showModal}
                        data={modalSettings.data}
                        name={modalSettings.name}
                        idx={modalSettings.idx}
                    />
                    <button className="btn btn-primary">
                        Submit
                    </button>
                    <br></br>
                    <p className="text-wrap" style={{ wrapText: "break-all" }}>
                        {JSON.stringify(formState)}
                    </p>
                </Form>
            </div>
        </UserDataContext.Provider>
        
    );

};


export default ParentForm;