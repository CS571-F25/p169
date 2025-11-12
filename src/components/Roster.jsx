import players from "../resources/players.json"
import { useState, useEffect } from "react"
import { Card } from "react-bootstrap";


export default function Roster(props) {

    const [roster, setRoster] = useState([])
    
    useEffect( () => {
        setRoster(props.rosters.find(roster => roster.owner_id === props.user_id))
    }, [props.rosters]);

    return <div>
        <Card.Text>
            Roster:
        </Card.Text>
        <ul>
            {
            (roster && roster.players) ? roster.players.map( (playerId) => 
                <li key={playerId}>{players[playerId].full_name} - {players[playerId].position}{roster.starters.some(e => e === playerId) ? ' - Starter' : ''}</li> 
            )
            :
                <li>No roster found</li>
            }
        </ul>
    </div>
}