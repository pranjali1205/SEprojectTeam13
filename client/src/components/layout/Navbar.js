import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>    <li><Link to="/">
            Payment history </Link></li>
           
            {/* <li>
      &nbsp;&nbsp;
         <Dropdown>
        <Dropdown.Toggle variant="success">
          More options
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/about">
            My Profile
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Payment History
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </li> */}

            <li><Link to="/profile"><i className="fas fa-user" >{'   '}
                Profile</i></Link></li>
            <li><a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt">{'   '}Logout</i></a></li>
        </ul>
    )

    const guestLinks = (
        <ul>

            <li><Link to="/about">About</Link> </li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>

    )

    return (
        <nav className="navbar bg-dark">
            {/* <h1>
                <Link to="/"> BaljeetVerse</Link>
            </h1> */}
            <NavLink className="navbar-brand" to="#">
             <img src={logo} width={100} height={100} alt="logo"/>
             </NavLink>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
