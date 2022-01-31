import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import CustomerServicesCard from "./CustomerServicesCard";
import services from "../../data/services";

const CustomerServices = () => {
  return (
    <Container>
      <SectionTitle title="Customer Services" />
      <Row className="g-5">
        {services.map((services) => (
          <Col md={6}>
            <CustomerServicesCard
              title={services.title}
              description={services.description}
              icon={services.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerServices;
