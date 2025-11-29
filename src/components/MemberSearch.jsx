
import { Form } from "react-bootstrap";

export default function MemberSearch(props) {

    const handleChange = (event) => {
        props.setMembers(event.target.value);
    }

    return <Form className='themed-form'>
        <Form.Label htmlFor="memberSearch">{props.name}</Form.Label>
        <Form.Control id="memberSearch" value={props.members} onChange={handleChange}/>
    </Form>
}