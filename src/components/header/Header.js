import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home"> Teachers </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/teachers">
              Teachers
            </Nav.Link>
            {user ? (
              <button onClick={logout}>Log out</button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/regiester">
              Regeister
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
