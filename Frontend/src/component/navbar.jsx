import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="light" variant="light" sticky="top" expand="md">
            <Container>
                <Navbar.Brand>Cud report</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link as={Link} to="/">
                        หน้าแรก
                    </Nav.Link>
                    <Nav.Link as={Link} to="/statistics">
                        สถิติ
                    </Nav.Link>
                    <Nav.Link as={Link} to="/reports">
                        รายงาน
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
