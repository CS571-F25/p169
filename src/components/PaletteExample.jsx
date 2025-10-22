import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function PaletteExample() {
  return (
    <div className="p-3">
      <Navbar bg="primary" variant="dark" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Palette Demo</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="outline-light">Login</Button>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex gap-2 mb-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="dark">Accent/Dark</Button>
        <Button variant="outline-primary">Outline Primary</Button>
      </div>

      <div className="p-3 rounded" style={{ backgroundColor: 'var(--bs-primary-50)' }}>
        <p className="mb-0 text-muted">Background tint using <code>--bs-primary-50</code>.</p>
      </div>
    </div>
  );
}
