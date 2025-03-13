import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import image from "../web-all-image/category-1.jpg";
import "./ProductCategories.css";

function ProductCategories() {
  return (
    <Container className="my-4">
      <Row className="g-4">
        <Col md={3}>
          <Card className="category-card border-0">
            <Card.Img variant="top" src={image} className="category-image" />
            <Card.Body className="category-label">
              <span>Name</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCategories;
