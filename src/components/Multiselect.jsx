import { Dropdown, Form } from "react-bootstrap";
import { useEffect } from "react";

export default function Multiselect(props) {
    const handleSelect = (item) => {
        if (props.selected.includes(item)) {
            props.setSelected(props.selected.filter(pos => pos !== item));
        } else {
            props.setSelected(prev => [...prev, item]);
        }
    }

    const handleKeyDown = (key, item) => {
        if (key.key === '' || key.key === 'Enter') {
            handleSelect(item);
        }
    }

    return <Dropdown autoClose="outside" className="w-100">
        <Dropdown.Toggle variant='dark' id='dropdown-multiselect' className='w-100'>
            {props.selected?.length > 0 ? props.selected.join(', ') : 'Select Items'}
        </Dropdown.Toggle>
        <Dropdown.Menu className='w-100' style={{minWidth: 'unset'}}>
            {props.options.map((option) => {
                return <Dropdown.Item 
                    as="div"
                    role="button" 
                    key={option}
                    tabIndex="0"
                    className="d-flex align-items-center"
                    onClick={() => handleSelect(option)}
                    onKeyDown={(e) => handleKeyDown(e, option)}
                >
                    <div className="ps-4" style={{ flex: '0 0 auto', minWidth: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Form.Check
                            type="checkbox"
                            id={`checkbox-${option}`}
                            className="m-0"
                            label={option}
                            checked={props.selected?.includes(option)}
                            readOnly
                            onClick={(e) => e.stopPropagation}
                        />
                    </div>
                </Dropdown.Item>
            })}
        </Dropdown.Menu>
    </Dropdown>
}