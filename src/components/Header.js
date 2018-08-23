import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderNavbar = () => {
        if (this.props.logIn) {
            return ( <Navbar fixedTop={true} inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Kucing Bertasbih</Link>
                            </Navbar.Brand>

                            <Navbar.Toggle />
                        </Navbar.Header>

                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">
                                    <Link to="/albumlist">
                                        Album List
                                    </Link>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <Link to="/movielist">
                                        Movie List
                                    </Link>
                                </NavItem>

                                <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Celana Dalam</MenuItem>
                                    <MenuItem eventKey={3.2}>Kancut</MenuItem>
                                    <MenuItem eventKey={3.3}>Sempak</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Kutang</MenuItem>
                                </NavDropdown>
                            </Nav>

                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    Hello, {this.props.username}
                                </NavItem>
                                
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar> );
        }

        return ( <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Kucing Bertasbih</Link>
                        </Navbar.Brand>

                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                <Link to="/albumlist">
                                    Album List
                                </Link>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Link to="/movielist">
                                    Movie List
                                </Link>
                            </NavItem>

                            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Celana Dalam</MenuItem>
                                <MenuItem eventKey={3.2}>Kancut</MenuItem>
                                <MenuItem eventKey={3.3}>Sempak</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Kutang</MenuItem>
                            </NavDropdown>
                        </Nav>

                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                            <Link to="/login">
                                Login
                            </Link>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                            <Link to="/register">
                                Register
                            </Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar> );
    }

    render() {
        return (
            this.renderNavbar()
        );
    }
}

export default Header;