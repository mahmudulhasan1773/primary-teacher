import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import auth from "../../firebase/firebase.init";
import "./login.css";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, error] = useAuthState(auth);
  let from = useLocation.state?.from?.pathname || "/";

  const emailRef = useRef();
  const passwordRef = useRef();
  const createUser = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="regiesterForm">
      {error}
      <Form onSubmit={createUser}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control ref={emailRef} type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">sign in </Button>
          </Col>
        </Form.Group>
      </Form>

      <div>
        Not register? please <Link to="/regiester"> Regiester</Link>
      </div>
    </div>
  );
};

export default Login;
