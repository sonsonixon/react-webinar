import React, { Component } from "react";
// dependencies
import { Card, Button, Row, Col } from "react-bootstrap";

const { Title, Body, Subtitle, Text } = Card;

class CardComponent extends Component {
  render() {
    const { user } = this.props;
    return (
      <Card style={{ marginBottom: "15px" }}>
        <Body>
          <Title>{user.name}</Title>
          <Subtitle className="mb-2 text-muted">{user.username}</Subtitle>
          <Text>{user.email}</Text>
          <Row>
            <Col>
              <Button type="button" block variant="outline-primary">
                Edit
              </Button>
            </Col>
            <Col>
              <Button type="button" block variant="outline-danger">
                Delete
              </Button>
            </Col>
          </Row>
        </Body>
      </Card>
    );
  }
}

export default CardComponent;
