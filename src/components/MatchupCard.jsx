import { Card, Button } from "react-bootstrap"
import Roster from "./Roster"
import { useState, useEffect } from "react"

export default function MatchupCard(props) {
    return <Card bg='primary' className='mb-3'>
        <Card.Header className="d-flex align-items-center">
            <Card.Title>
                {props.player1.roster_id + ' vs. ' + props.player2.roster_id}
            </Card.Title>
        </Card.Header>
    </Card>
}