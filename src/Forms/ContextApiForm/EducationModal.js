import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../Contexts/FormContext";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {
    FormGroup,
    Label,
    Input,
}
from 'reactstrap';

const EducationModal = ({data, name, modalOpen, toggle, idx}) => {
    const {dispatch} = useContext(UserDataContext);
    const [modalState, setModalState] = useState({});

    useEffect(() => {
        if(data){
            setModalState(data);
        }
        if(!modalOpen){
            setModalState({});
        }
    }, [data, modalOpen]);
    
    const handleTextInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setModalState((prevState) => {
            let oldState = {...prevState};
            oldState[key] = value;
            return oldState;
        });
    };

    const handleSubmit = () => {
        dispatch({
            type: "MODAL_FORM_DATA",
            key: name,
            payload: modalState,
            idx:idx
        });
        toggle();
    };

    return(
        <Modal isOpen={modalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Enter your Education Details</ModalHeader>
            <ModalBody className="text-wrap" style={{ wordBreak: "break-all" }}>
                <FormGroup>
                    <Label for="college">
                    College
                    </Label>
                    <Input
                    id="college"
                    name="college"
                    placeholder="Enter your College Name"
                    type="text"
                    value={modalState && modalState.college || ""}
                    onChange={handleTextInput}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="degree">
                    Degree Name
                    </Label>
                    <Input
                    id="degree"
                    name="degree"
                    placeholder="Enter your Degree Name"
                    type="text"
                    value={modalState && modalState.degree || ""}
                    onChange={handleTextInput}
                    />
                </FormGroup>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add Education</button>
                <button className="btn btn-secondary" type="button" onClick={toggle}>Cancel</button>
            </ModalBody>
        </Modal>
    );
};

export default EducationModal;