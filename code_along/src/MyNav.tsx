import Home from "./Home";
import About from "./About";
import Products from "./Products";
import MyForm from "./MyForm";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function MyNav() {
    return (
        <BrowserRouter>
            <SetNav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/form" element={<MyForm />} />
            </Routes>
        </BrowserRouter>
    );
}

function SetNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Puma-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/form">Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;