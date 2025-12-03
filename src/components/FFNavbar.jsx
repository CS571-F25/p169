import { Navbar, Nav, Container, Button } from "react-bootstrap";
import InitialModal from "./InitialModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function FFNavbar (props) {

    const navigate = useNavigate();
    const [id, setId] = useState(sessionStorage.getItem('leagueId'));
    const [isDemo, setIsDemo] = useState(false)

    const handleSwitch = () => {
        sessionStorage.removeItem('leagueId');
        setIsDemo(null)
        setId(null);
        navigate('/')
    }

    useEffect(() => {
        const handleLeagueUpdate = () => {
            setId(sessionStorage.getItem('leagueId'));
            setIsDemo(sessionStorage.getItem('demo') === 'true');
        };

        window.addEventListener('leagueIdUpdated', handleLeagueUpdate);

        if (sessionStorage.getItem('demo') === 'true') {
            setIsDemo(true);
        }

        return () => window.removeEventListener('leagueIdUpdated', handleLeagueUpdate);
    }, [])

    return ( 
    <Navbar bg='primary' variant='dark' className="mb-3">
        { id != null ? '' : <InitialModal id={id} setId={setId} setDemo={setIsDemo}/> }
        <Container fluid>
            <Navbar.Brand href="#/">
                <img src="/p169/images/fflogo.png" alt="Image of a football over an icon saying 'Fantasy Foodball'" width="50rem" height="50rem"/>
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href="#/">League Members</Nav.Link>
                <Nav.Link href="#/matchups">Matchups</Nav.Link>
                <Nav.Link href="#/players">Trending Players</Nav.Link>
            </Nav>
            <Button onClick={handleSwitch} variant="light">{!isDemo ? 'Switch League' : 'Exit Demo'}</Button>
        </Container>
    </Navbar> );
}