import React from "react";
import { Card, Col } from "react-bootstrap";

const CustomerServicesCard = ({ title, description, icon }) => {
  return (
    <Card className="customer-service-card">
      <Card.Body>
        <Col md={2}> {icon}</Col>
        <Col md={10}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default CustomerServicesCard;
