import { Form, Row, Col, Button, Dropdown} from 'react-bootstrap'
import { useState } from 'react';
import Multiselect from './Multiselect';
import Slider from './Slider';

export default function TrendingSearch(props) {

    const [trend, setTrend] = useState('add');
    const [loopback, setLoopback] = useState('24');
    const [numPlayers, setNumPlayers] = useState('25');

    const handleTrendChange = (event) => {
        setTrend(event.target.value);
    }

    return (<Form className='themed-form'>
        <Row>
            <Col>
                <Slider
                    altId='loopback'
                    min='12'
                    max='100'
                    label='Loopback Hours: '
                    value={loopback}
                    setValue={setLoopback}
                />
                <Slider
                    altId='numPlayers'
                    min='10'
                    max='100'
                    label='Number of Players: '
                    value={numPlayers}
                    setValue={setNumPlayers}
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