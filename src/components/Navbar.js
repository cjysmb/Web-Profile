import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Dp from '../../public/static/img/dp.png';
import once from '../../public/static/img/once.png';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" id="sideNav">

            <NavbarBrand className="js-scroll-trigger" href="#pageTop">
                <div>
                    <span class="d-block d-lg-none">Christian Jaede Samboa</span>
                    <span class="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Dp} />
                    </span>
                </div>
            </NavbarBrand>

    
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
  

            <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link js-scroll-trigger" href="#about">About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link js-scroll-trigger" href="#experience">Experience</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link js-scroll-trigger" href="#education">Education</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link js-scroll-trigger" href="#skills">Skills</NavLink>
              </NavItem>
                
              <NavItem>
                <NavLink className="nav-link js-scroll-trigger" href="#interests">Interests</NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>

        {/* <Navbar color="faded" light>
          <NavbarBrand href="/" className="navbar navbar-expand-lg navbar-dark mr-auto">Cjay's Profile</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  }
}