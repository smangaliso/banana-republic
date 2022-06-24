import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LeftPane from "./LeftPane";
import "./MoreContent.css";

const MoreContent = () => {
  return (
    <div>
      <Container className="App">
        <Row>
          <Col className="content" sm={4}>
            <LeftPane className="arrow" url="/" />
          </Col>
          <Col className="right-content" sm={8}>
            <Content />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoreContent;
