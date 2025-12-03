import { Card, Button, Col, Row } from "react-bootstrap"
import RosterWithPoints from "./RosterWithPoints"

export default function MatchupCard(props) {

    const getName = (id) => {
        const player1ID = props.rosters.find(e => e.roster_id === id).owner_id
        return props.members.find(e => e.user_id === player1ID).metadata.team_name ?? props.members.find(e => e.user_id === player1ID).display_name
    }

    return <Card bg='primary' className='m-3'>
        <Card.Header>
            <Card.Title>
                {`${getName(props.player1.roster_id)} (${props.player1.points}) vs. ${getName(props.player2.roster_id)} (${props.player2.points})`}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Row>
                <Col>
                    <RosterWithPoints
                        players={props.player1.starters}
                        points={props.player1.players_points}
                    />
                </Col>
                <Col>
                    <RosterWithPoints
                        players={props.player2.starters}
                        points={props.player2.players_points}
                    />
                </Col>
            </Row>
        </Card.Body>
    </Card>
}