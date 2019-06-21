import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'

class AlertBox extends Component {
  static instance = null;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: "",
    };

    this.onClose = null;
    AlertBox.instance = this;
  }

  static display(message) {
    return AlertBox.instance.show(message);
  }

  show = (message) => {
    this.setState({
      open: true,
      content: message
    });

    return new Promise(resolve => {
      this.onClose = (result) => {
        resolve(result);
      }
    });
  };

  handleConfirm = () => {
    this.setState({
      open: false,
    });

    this.onClose(true);
  };

  handleCancel = () => {
    this.setState({
      open: false,
    });

    this.onClose(false);
  };

  render() {
    return (
        <div>
          <Confirm
              open={this.state.open}
              content={this.state.content}
              cancelButton='취소'
              confirmButton="확인"
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
          />
        </div>
    )
  }
}

export default AlertBox