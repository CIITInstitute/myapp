import React, { useState } from "react";
import { Button } from "react-bootstrap";
import  Modal  from "react-bootstrap/Modal";
export const ModalDesign =()=>{
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(true)
    }
    const handleClose=()=>{
        setShow(false);
    }
    return(
        <div>
            <h2>Modal Design </h2>
            <Button variant="primary" onClick={handleShow}>Open Modal</Button>
            <Modal show={show}>
                <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Student Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>This is Modal Body Section</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary">Submit</Button>
                            <Button variant="danger" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}