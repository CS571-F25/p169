import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getLeagues } from "../services/SleeperService";

export default function InitialModal(props) {

    const [leagueId, setLeagueId] = useState("");
    const [userId, setUserId] = useState("");
    const [leagues, setLeagues] = useState(null);

    const submitUser = () => {
        getLeagues(userId).then((data) => setLeagues(data))
    }

    const handleLeagueChange = (event) => {
        setLeagueId(event.target.value);
    }

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

    useEffect(() => {
        if (leagues) {
            setLeagueId(leagues[0].league_id);
        }
    }, [leagues]);

    return(
        <Modal show={!props.id} backdrop="static" centered>
            <Modal.Header>
                <Modal.Title>Select League</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {leagues != null ?
                <Form>
                    <Form.Label html="leagueSelector">Please select your desired league:</Form.Label>
                    <Form.Select 
                        id='leagueSelector' 
                        value={leagueId}
                        onChange={handleLeagueChange}
                        defaultValue={leagues[0].league_id}
                    >
                        {leagues.map((league, index) => <option key={index} value={league.league_id}>{league.name}</option>)}
                    </Form.Select>
                    <div className="d-flex justify-content-between mt-2">
                        <Button onClick={handleSubmit}>Submit</Button>
                        <Button onClick={handleDemo}variant='outline-primary'>Demo</Button>
                    </div>
                </Form>
                    :
                <Form>
                    <Form.Label htmlFor='leagueIdInput'>Please enter your Sleeper User ID Here: </Form.Label>
                    <Form.Control id='leagueIdInput' placeholder="Your ID" autoFocus value={userId} onChange={(e) => setUserId(e.target.value)}/>
                    <div className="d-flex justify-content-between mt-2">
                        <Button onClick={submitUser}>Submit</Button>
                        <Button onClick={handleDemo}variant='outline-primary'>Demo</Button>
                    </div>
                </Form>}
            </Modal.Body>
        </Modal>
    )
}
