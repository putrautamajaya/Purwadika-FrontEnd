import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogout, keepLogin, cookieCheck } from '../actionCreator'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

    componentWillMount(){
        const cookieNya = cookies.get('bertasbihCat');
          if(cookieNya !== undefined) {
              this.props.keepLogin(cookieNya);
              console.log('masuk ke keeplogin');
          }
          else if (cookieNya === undefined) {
              this.props.cookieCheck();
              console.log('masuk ke cookieCheck');
          }
      }

    onLogOutClick = () => {
        this.props.onLogout();
        cookies.remove('bertasbihCat')
        this.props.cookieCheck();
    }

    renderNavbar = () => {
        console.log(this.props.auth);

        if ( this.props.auth.cookieCheck === true ) {
        
        if (this.props.auth.username != "") {
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

                                <NavItem eventKey={5} href="#">
                                    <Link to="/moviemanage">
                                        Movie Manage
                                    </Link>
                                </NavItem>
                            </Nav>

                            <Nav pullRight>
        
                                <NavDropdown eventKey={4} title={"Hello, " + this.props.auth.username} id="basic-nav-dropdown">
                                    <MenuItem eventKey={4.1}>Profile</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={4.2} onSelect= {this.onLogOutClick}>Log Out</MenuItem> 
                                </NavDropdown>
                                
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
        return <h1></h1>;
    }

    render() {
        return (
            this.renderNavbar()
        );
    }
}
const mapStateToProps = (state) => {
    let auth = state.auth

    return { auth };
}

export default connect(mapStateToProps, { onLogout, keepLogin, cookieCheck })(Header);