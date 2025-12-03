import { Form } from "react-bootstrap"
export default function Slider(props) {

    const handleChange = (event) => {
        props.setValue(event.target.value);
    }

    return <Form.Group>
    <Form.Label className='mt-3' htmlFor={props.altId}>{props.label} {props.value}</Form.Label>
        <Form.Range 
            id={props.altId}
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={handleChange}
        />
    </Form.Group>
}