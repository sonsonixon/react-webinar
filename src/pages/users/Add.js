import React, { Component } from "react";
// dependencies
import { Form, Input, Button, Row, Col, notification } from "antd";
// api
import apiRequest from "../../services/axios";
// components
import Notification from "../../components/NotificationComponent";

const { Item } = Form;

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        username: "",
        email: "",
      },
      isSubmitting: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value,
      },
    }));
  }

  handleOnSubmit() {
    const { values } = this.state;
    this.setState({ isSubmitting: true }, () => {
      // method, path-to-api/endpoint, data
      apiRequest("post", "/users/", values).then((res) => {
        // response
        notification.success({
          message: "User Add Success",
          description: (
            <Notification
              name={res.name}
              username={res.username}
              email={res.email}
            />
          ),
        });
        this.setState((prevState) => ({
          ...prevState,
          isSubmitting: false,
        }));
      });
    });
  }

  render() {
    const { values, isSubmitting } = this.state;
    // console.log(values);
    return (
      <Form name="basic" layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Item label="Name">
              <Input
                name="name"
                onChange={this.handleOnChange}
                value={values.name}
              />
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Username">
              <Input
                name="username"
                onChange={this.handleOnChange}
                value={values.username}
              />
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Email">
              <Input
                name="email"
                onChange={this.handleOnChange}
                value={values.email}
              />
            </Item>
          </Col>
          <Col span={24}>
            <Item>
              <Button
                type="primary"
                htmlType="button"
                block={true}
                shape="round"
                loading={isSubmitting}
                onClick={this.handleOnSubmit}
              >
                Submit
              </Button>
            </Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Add;
