import { Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import players from "../resources/players.json"

export default function MemberCard(props) {

    const [roster, setRoster] = useState([])

    useEffect( () => {
        setRoster(props.rosters.find(roster => roster.owner_id === props.user_id))
    }, [props.rosters]);

    return <Card>
        <Card.Body>
            <Card.Title>{props.metadata.team_name ?? props.display_name}</Card.Title>
            <Card.Text>
                Players:
            </Card.Text>
            <ul>
                {
                (roster && roster.players) ? roster.players.map( (playerId) => 
                    <li key={playerId}>{players[playerId].full_name} - {players[playerId].position}</li> 
                )
                :
                    <li>No roster found</li>
                }
            </ul>
        </Card.Body>
    </Card>
}