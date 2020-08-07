import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userAtom from 'atoms/userAtom';
import { clearUserFromStorage } from 'utils/persistUser';
import { auth } from 'firebase/utils';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

import Logo from '../../assets/images/dogo-logo.png';

const Header = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const logout = () => {
    auth.signOut().then(success => {
      setUser(null);
      clearUserFromStorage();
    }).catch(error => {

    })
  }

  return (
    <Navbar className="my-navbar" expand="lg">
      <Navbar.Brand href="/">
        <img src={Logo} width="35" height="35" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {user && (
          <Navbar.Text className="nav-link">
            Hello, <b>{user.displayName}</b>
          </Navbar.Text>
        )}
        <Navbar.Text>
    </Navbar.Text>
        <Nav className="ml-auto">
          {user ? (
            <>
              <Nav.Link className="shopping-cart"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></Nav.Link>
              <button onClick={logout} className="btn btn-warning ml-3">Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;