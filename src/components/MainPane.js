import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LeftPane from "./LeftPane";
import { Form } from "./Form";
import { Link } from "react-router-dom";
import "./MainPane.css";
const MainPane = () => {
  return (
    <Container className="App">
      <Row>
        <Col className="content" sm={4}>
          <LeftPane className="arrow1" url="/more" />
        </Col>
        <Col sm={8}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPane;
