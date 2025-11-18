import { Card, Button } from "react-bootstrap";
import players from "../resources/players.json"

export default function TrendingPlayerCard(props) {
    return (
        <Card bg='primary' className="mb-3">
            <Card.Header>
                <Card.Title>
                    {players[props.player_id].full_name} - {players[props.player_id].position}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                {`${props.added ? 'Added' : 'Dropped'} ${props.count.toLocaleString()} times in the last ${props.hours} hours`}
            </Card.Body>
        </Card>
    );
}