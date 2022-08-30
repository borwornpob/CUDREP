import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [expanded , setExpanded] = useState(false);
    return (
        <Navbar expanded={expanded} bg="light" variant="light" sticky="top" expand="md">
            <Container>
                <Navbar.Brand>Cud report</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                        หน้าแรก
                    </Nav.Link>
                    <Nav.Link as={Link} to="/statistics" onClick={() => setExpanded(false)}>
                        สถิติ
                    </Nav.Link>
                    <Nav.Link as={Link} to="/reports" onClick={() => setExpanded(false)}>
                        รายงาน
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
