import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

export default function InitialModal(props) {

    const [leagueId, setLeagueId] = useState("");
    const [show, setShow] = useState(true);

    const handleSubmit = () => {
        sessionStorage.setItem('leagueId', leagueId);
        window.dispatchEvent(new Event('leagueIdUpdated'));
        handleClose();
    }

    const handleClose = () => {setShow(false)}

    return(
        <Modal show={show} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>Add League ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label htmlFor='leagueIdInput'>Please enter your Sleeper League ID Here: </Form.Label>
                    <Form.Control id='leagueIdInput' placeholder="Your ID" autoFocus value={leagueId} onChange={(e) => setLeagueId(e.target.value)}/>
                    <Button onClick={handleSubmit} className="mt-2">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}