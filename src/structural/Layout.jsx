import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router";


export default function Layout(props) {
    return(
        <div>
            <Navbar bg='primary' variant='dark' className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#/">
                        <img src="/p169/images/fflogo.png" width="50rem" height="50rem"/>
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href="#/">League Members</Nav.Link>
                        <Nav.Link href="#/matchups">Matchups</Nav.Link>
                        <Nav.Link href="#/players">Hot Players</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
}