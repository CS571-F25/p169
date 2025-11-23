import { useState, useEffect } from "react";
import { getTrendingPlayers } from "../services/SleeperService";
import TrendingPlayerCard from "../components/TrendingPlayerCard";
import { Container, Row, Col } from "react-bootstrap";
import players from "../resources/players.json"
import TrendingSearch from "../components/TrendingSearch";

export default function Players(props) {

    const [trendingPlayers, setTrendingPlayers] = useState([]);
    const [added, setAdded] = useState(true);
    const [hours, setHours] = useState(0);
    const options = ['QB', 'WR', 'RB', 'TE', 'K'];
    const [positions, setPositions] = useState(options);

    const handleSubmit = (add, loopback, num) => {
        setAdded(add === 'add' ? true : false);
        setHours(loopback);
        getTrendingPlayers(add, loopback, num)
            .then(res => {
                setTrendingPlayers(res);
            })
    }

    
    return(
        <div>
            <TrendingSearch  handleSubmit={handleSubmit} options={options} positions={positions} setPositions={setPositions}/>
            <Container fluid>
                <Row>
                    { trendingPlayers
                        .filter((player) => players[player.player_id].position !== 'DEF')
                        .filter((player) => positions.length > 0 ? positions.includes(players[player.player_id].position) : true)
                        .map((player) => {
                            return (<Col key={player.player_id} sm={12} md={6} lg={4} xl={3}>
                                <TrendingPlayerCard added={added} hours={hours} {...player}/>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}