import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { vehicleList } from "../../data/vehicleList";

const Vehicles = () => {
  return (
    <Container>
      <SectionTitle title="Vehicles" />
      <Row>
        <Col lg={3}>
          <ul className="vehicleList">
            <li>
              <Button>
                <FiChevronUp />
              </Button>
            </li>

            {vehicleList.map((vehicle) => (
              <li>{vehicle.model}</li>
            ))}

            <li>
              <Button>
                <FiChevronDown />
              </Button>
            </li>
          </ul>
        </Col>
        <Col lg={6}>arabalar </Col>
        <Col lg={3}>bilgi</Col>
      </Row>
    </Container>
  );
};

export default Vehicles;
