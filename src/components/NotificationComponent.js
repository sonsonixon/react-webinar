import React, { Component } from "react";

class NotificationComponent extends Component {
  render() {
    const { name, username, email } = this.props;
    return (
      <div>
        Name: {name}
        <br />
        Username: {username}
        <br />
        Email: {email}
      </div>
    );
  }
}

export default NotificationComponent;
