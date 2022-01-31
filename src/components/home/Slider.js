import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderCarusel from "./SliderCarusel";
import SliderForm from "./SliderForm";

const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <Row>
          <Col lg={{ span: 7, order: "last" }}>
            <SliderCarusel />
          </Col>
          <Col lg={{ span: 5, order: "first" }}>
            <SliderForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
