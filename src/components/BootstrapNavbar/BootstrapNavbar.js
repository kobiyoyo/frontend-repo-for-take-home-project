import React from 'react';

//react-bootstrap
import { Navbar,Nav} from 'react-bootstrap';

const BootstrapNavbar = () => {
    return (
        <div>
           <Navbar bg="dark" expand="lg"  variant="dark">
                <Navbar.Brand href="/">BikeShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                        <Nav.Link href="/category">Category</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default BootstrapNavbar;
