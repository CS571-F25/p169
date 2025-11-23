import { Form, Row, Col, Button, Dropdown} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Multiselect from './Multiselect';

export default function TrendingSearch(props) {

    const [trend, setTrend] = useState('add');
    const [loopback, setLookback] = useState('24');
    const [numPlayers, setNumPlayers] = useState('25');

    const handleTrendChange = (event) => {
        setTrend(event.target.value);
    }

    const handleLoopbackChange = (event) => {
        setLookback(event.target.value);
    }

    const handleNumPlayersChange = (event) => {
        setNumPlayers(event.target.value);
    }

    return (<Form className='themed-form'>
        <Row>
            <Col>
                <Form.Label className='mt-3' htmlFor='loopback'>Loopback Hours: {loopback}</Form.Label>
                <Form.Range 
                    id='loopback'
                    min='12'
                    max='100'
                    value={loopback}
                    onChange={handleLoopbackChange}
                />
                <Form.Label htmlFor='numPlayers'>Number of Players: {numPlayers}</Form.Label>
                <Form.Range 
                    id='numPlayers'
                    min='10'
                    max='100'
                    value={numPlayers}
                    onChange={handleNumPlayersChange}
                />
                <Row>
                    <Col>
                        <Form.Label htmlFor='add/drop'>Add or Drop</Form.Label>
                        <Form.Select 
                            id='add/drop' 
                            value={trend}
                            onChange={handleTrendChange}
                        >
                            <option value='add'>Add</option>
                            <option value='drop'>Drop</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label htmlFor='positions'>Positions</Form.Label>
                        <Multiselect id='positions' options={props.options} selected={props.positions} setSelected={props.setPositions}/>
                    </Col>
                    <Col>
                        <Button
                            variant='light' 
                            className='w-100 mt-4' 
                            onClick={() => props.handleSubmit(trend, loopback, numPlayers)}
                        >Submit</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Form>);
}