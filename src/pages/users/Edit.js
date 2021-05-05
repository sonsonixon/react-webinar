import React, { Component } from "react";
// dependencies
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Row, Col, Spin, notification } from "antd";
// api
import apiRequest from "../../services/axios";
// components
import Notification from "../../components/NotificationComponent";

const { Item } = Form;

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        name: "",
        username: "",
        email: "",
      },
      isSubmitting: false,
      loading: true,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const id = params.id;

    apiRequest("get", "/users/" + id, null).then((res) => {
      this.setState(() => ({
        values: {
          id: res.id,
          name: res.name,
          username: res.username,
          email: res.email,
        },
        loading: false,
      }));
    });
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
    const {
      match: { params },
    } = this.props;
    const id = params.id;

    this.setState({ isSubmitting: true }, () => {
      apiRequest("put", "/users/" + id, values).then((res) => {
        notification.success({
          message: "User Edit Success",
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
    const { values, isSubmitting, loading } = this.state;

    return loading ? (
      <div
        style={{
          margin: "20px 0",
          marginBottom: "20px",
          padding: "30px 50px",
          textAlign: "center",
        }}
      >
        <Spin />
      </div>
    ) : (
      <Form name="basic" layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Item label="Name">
              <Input
                name="name"
                onChange={this.handleOnChange}
                defaultValue={values.name}
              />
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Username">
              <Input
                name="username"
                onChange={this.handleOnChange}
                defaultValue={values.username}
              />
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Email">
              <Input
                name="email"
                onChange={this.handleOnChange}
                defaultValue={values.email}
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

export default withRouter(Edit);
