import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiTwitter,
  FiUser,
  FiYoutube,
} from "react-icons/fi";

const TopBar = () => {
  return (
    <Container className="topbar">
      <Row>
        <Col>
          <FiPhoneCall size={16} /> CALL US +1 235 98 95
        </Col>
        <Col>
          <ul>
            <li>
              <FiYoutube />
            </li>
            <li>
              <FiTwitter />
            </li>
            <li>
              <FiFacebook />
            </li>
            <li>
              <FiInstagram />
            </li>
            <Button>
              <FiUser />
              Login
            </Button>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
