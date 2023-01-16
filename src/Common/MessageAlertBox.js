import React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const MessageAlertBox = ({title, content, toggle, modalOpen}) => {
    return(
        <Modal isOpen={modalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody className="text-wrap" style={{ wordBreak: "break-all" }}>
            {content}
            </ModalBody>
        </Modal>
    );
};

export default MessageAlertBox;