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
    <div className="topbar">
      <Container>
        <Row>
          <Col xs={7}>
            <FiPhoneCall size={16} />
            <span className="d-none d-md-inline">CALL US </span> +1 235 98 95
          </Col>
          <Col xs={5}>
            <ul>
              <li>
                <FiYoutube className="d-none d-md-block" />
              </li>
              <li>
                <FiTwitter className="d-none d-md-block" />
              </li>
              <li>
                <FiFacebook className="d-none d-md-block" />
              </li>
              <li>
                <FiInstagram className="d-none d-md-block" />
              </li>
              <li>
                <Button size="sm">
                  <FiUser />
                  Login
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
