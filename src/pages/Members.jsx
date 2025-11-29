import { getLeagueMembers, getLeagueRosters } from "../services/SleeperService"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import MemberCard from "../components/MemberCard";
import MemberSearch from "../components/MemberSearch";

export default function Members(props) {

    const [leagueId, setLeagueId] = useState(sessionStorage.getItem('leagueId') || '');
    const [members, setMembers] = useState([])
    const [rosters, setRosters] = useState([])
    const [memberSearch, setMemberSearch] = useState('');

    useEffect( () => {
        if (leagueId) {
            getLeagueMembers(leagueId).then(data => {
                setMembers(data);
                console.log('Members loaded:', data);
            });
            getLeagueRosters(leagueId).then(data => {
                setRosters(data);
                console.log('Rosters loaded:', data);
            });
        }
    }, [leagueId]);

    const updateLeagueId = () => {
        const newLeagueId = sessionStorage.getItem('leagueId');
        if (newLeagueId && newLeagueId !== leagueId) {
            setLeagueId(newLeagueId);
        }
    }

    useEffect(() => {
        // listener for other tabs updating leagueId
        window.addEventListener('storage', (event) => {
            if (event.key === 'leagueId') {
                updateLeagueId();
            }
        });

        // listener for same tab updates
        window.addEventListener('leagueIdUpdated', updateLeagueId);

        // cleanup when unmounting
        return () => {
            window.removeEventListener('storage', updateLeagueId);
            window.removeEventListener('leagueIdUpdated', updateLeagueId);
        }
    }, []);

    return (
        <div>
            {members.length === 0 
            ? 
                <p>No members found. Please enter a valid League ID.</p>
            : 
                <Container fluid>
                    <MemberSearch members={memberSearch} setMembers={setMemberSearch} name='Member Name:'/>
                    <Row>
                        {members
                            .filter( (mem) => (mem.metadata.team_name)?.toLowerCase().includes(memberSearch.toLowerCase()) || (mem.display_name)?.toLowerCase().includes(memberSearch.toLowerCase()))
                            .map( (member) => <Col key={member.user_id} xs={12} md={6} lg={4} xl={3} className="mb-3">
                            <MemberCard {...member} rosters={rosters}/>
                        </Col>)}
                    </Row>
                </Container>
            }
        </div>
    )
}