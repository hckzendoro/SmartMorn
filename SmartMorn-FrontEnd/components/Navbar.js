// // Nav.js
// import Link from 'next/link';
// import { Button,NavItem ,Navbar,Nav,MenuItem,NavDropdown } from 'react-bootstrap';
// const Navbars = () => {
//     return (
//         <div>
// 			<button className="btn btn-success">OK</button>
//         	{/* <nav className="navbar is-fixed-top is-info">
//         		<div className="navbar-brand">
// 					<Link href="/">
// 						<a className="navbar-item"> SmartMorn </a>
// 					</Link>
// 				</div>
// 				<div  className="navbar-burger burger">
// 					<span></span>
// 					<span></span>
// 					<span></span>
// 				</div>
// 				<div class="navbar-menu">
// 				<div className="navbar-start">
// 							<Link href="/" activeClassName="is-active">
// 								<a className="navbar-item">Home</a>
// 							</Link>
// 							<div className="navbar-item has-dropdown is-hoverable">
// 								<a className="navbar-link">
// 								Docs
// 								</a>

// 								<div className="navbar-dropdown">
// 									<a className="navbar-item">
// 										Overview
// 									</a>
// 									<a className="navbar-item">
// 										Elements
// 									</a>
// 									<a className="navbar-item">
// 										Components
// 									</a>
// 									<hr className="navbar-divider"/>
// 									<div className="navbar-item">
// 										Version 0.7.1
// 									</div>
// 								</div>
// 							</div>
// 					  	</div>
// 					  	<div className="navbar-end">
					  		
// 					  	</div>
// 				</div>

// 				<div class="navbar-menu is-active">
// 				</div>
//         	</nav>
//          */}
//         </div>
//     )
// }
// export default Navbars

import React from 'react';
import Router from 'next/router';
import Link from '../utils/helper/Link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
class NavApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
	}
	logout() {
		localStorage.removeItem('SmartMornKey');
		Router.push('/login');
	}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
		<Navbar color="primary" dark expand="md">
			<NavbarBrand href="/">SmartMorn</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
				<Nav className="navbar-nav mr-auto mt-2 mt-lg-0" navbar>
					<NavItem>
						<Link href="/dashboard" activeClassName="active">
							<NavLink>HOME</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/alarm" activeClassName="active">
							<NavLink>Alarm</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/sleeping" activeClassName="active">
							<NavLink>Sleep Setting</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/adjustment" activeClassName="active">
							<NavLink>ADJUSTMENT</NavLink>
						</Link>
					</NavItem>
				</Nav>
				<Nav className="navbar-nav my-2 my-lg-0" navbar>
					<NavItem>
						{/* <Link href="/login" activeClassName=""> */}
							<NavLink onClick={this.logout }>LOGOUT</NavLink>
						{/* </Link> */}
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
    );
  }
}

export default NavApp;