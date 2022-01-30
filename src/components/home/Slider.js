import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderCarusel from "./SliderCarusel";

const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <Row>
          <Col md={{ span: 7, order: "last" }}>
            <SliderCarusel />
          </Col>
          <Col md={{ span: 5, order: "first" }}>FORM</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
