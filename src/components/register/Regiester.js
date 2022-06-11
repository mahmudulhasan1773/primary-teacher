import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import auth from "../../firebase/firebase.init";
import "./register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
const Regiester = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const createUser = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/login");
    console.log(user.user);
  }
  return (
    <div className="regiesterForm">
      {user?.email}
      <Form onSubmit={createUser}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control ref={nameRef} type="text" placeholder="Name" />
          </Col>
        </Form.Group>
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
            <Button type="submit">Regiester</Button>
          </Col>
        </Form.Group>
      </Form>

      <div>
        Already registered? please <Link to="/login">sign in </Link>
      </div>
    </div>
  );
};

export default Regiester;
