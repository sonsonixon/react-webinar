import React, { Component } from "react";
// dependencies
import { Table, Space, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
// api service
import apiRequest from "../../services/axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };

    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    apiRequest("get", "/users", null).then((res) => {
      const data = res.map((data) => {
        data.key = data.id;
        return data;
      });
      this.setState((prevState) => ({
        ...prevState,
        users: data,
        loading: false,
      }));
    });
  }

  confirmDelete(id) {
    const { users } = this.state;
    apiRequest("delete", "/users/" + id, null).then((res) => {
      this.setState({ users: users.filter((item) => item.key !== id) });
    });
  }

  render() {
    const { users, loading } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Action",
        key: "action",
        render: (data) => {
          const path = "/users/edit/" + data.id;
          return (
            <Space size="middle">
              <Button type="primary" shape="round">
                <Link to={path}>Edit</Link>
              </Button>
              <Popconfirm
                title="Are you sure to delete this user?"
                onConfirm={() => this.confirmDelete(data.id)}
                okText="Yes, Delete"
                cancelText="Cancel"
              >
                <Button type="danger" shape="round">
                  Delete
                </Button>
              </Popconfirm>
            </Space>
          );
        },
      },
    ];

    return (
      <div>
        <Table dataSource={users} columns={columns} loading={loading} />
      </div>
    );
  }
}

export default List;
