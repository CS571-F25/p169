import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

export default function InitialModal(props) {

    const [leagueId, setLeagueId] = useState("");

    const handleSubmit = () => {
        if (leagueId) {
            sessionStorage.setItem('leagueId', leagueId);
            sessionStorage.setItem('demo', false)
            props.setId(leagueId)
            props.setDemo(false);
            window.dispatchEvent(new Event('leagueIdUpdated'));
        } else {
            alert("Please enter a league ID!");
        }
    }

    const handleDemo = () => {
        sessionStorage.setItem('leagueId', '1260668822449311744');
        sessionStorage.setItem('demo', true);
        props.setId('1260668822449311744');
        props.setDemo(true);
        window.dispatchEvent(new Event('leagueIdUpdated'));
    }

    return(
        <Modal show={!props.id} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>Add League ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label htmlFor='leagueIdInput'>Please enter your Sleeper League ID Here: </Form.Label>
                    <Form.Control id='leagueIdInput' placeholder="Your ID" autoFocus value={leagueId} onChange={(e) => setLeagueId(e.target.value)}/>
                    <div className="d-flex justify-content-between mt-2">
                        <Button onClick={handleSubmit}>Submit</Button>
                        <Button onClick={handleDemo}variant='outline-primary'>Demo</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}