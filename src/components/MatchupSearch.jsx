import { Form, Button, Row, Col } from "react-bootstrap";

export default function MatchupSearch(props) {

    const handleWeekChange = (e) => {
        props.setWeek(parseInt(e.target.value, 10));
    }

    return <Form className='themed-form'>
        <Row>
            <Col>
                <Form.Label htmlFor='week'>Week</Form.Label>
                <Form.Control 
                    id ='week'
                    type='number'
                    value={props.week}
                    onChange={handleWeekChange}
                    min={1}
                    max={17}
                    step={1}
                />
            </Col>
            <Col>
                <Button
                    variant='light' 
                    className='w-100 mt-4' 
                    onClick={props.handleSubmit}
                >Submit</Button>
            </Col>
        </Row>
    </Form>
} 