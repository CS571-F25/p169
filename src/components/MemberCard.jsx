import { Card, Button } from "react-bootstrap"
import Roster from "./Roster"
import { useState, useEffect } from "react"
import { getAvatar } from "../services/SleeperService";

export default function MemberCard(props) {
    const BACKUP_AVATAR = 'efaefa889ae24046a53265a3c71b8b64';
    const [showRoster, setShowRoster] = useState(false);
    const [avatar, setAvatar] = useState();

    const handleToggleRoster = () => {
        setShowRoster(prev => !prev);
    }

    useEffect( () => {
        getAvatar(props.avatar ?? BACKUP_AVATAR).then( (data) => {
            setAvatar(data);
        });
    }, []);

    return <Card bg='primary' className='mb-3'>
        <Card.Header className="d-flex align-items-center">
            <Card.Img 
                variant="top" 
                src={avatar} 
                alt="Avatar" 
                style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', marginRight: '10px'}}
            />
            <Card.Title className="mb-0">
                {props.metadata.team_name ?? props.display_name}
            </Card.Title>
        </Card.Header>
        <Card.Body className="p-0"> {/* Remove padding from Card.Body */}
            <div className="p-3 pb-0"> {/* Add padding to content wrapper */}
                {showRoster ? <Roster user_id={props.user_id} rosters={props.rosters}/> : ''}
            </div>
            <Button 
                variant='light' 
                className='w-100 mt-3 rounded-0 rounded-bottom' 
                onClick={handleToggleRoster}
            >
                {showRoster ? 'Hide Roster' : 'Show Roster'}
            </Button>
        </Card.Body>
    </Card>
}