import React, { Component } from 'react';
import { PostWrapper } from '../../Components';
import { Button, Input, Modal } from 'semantic-ui-react'
import './NoticeBox.css';

class NoticeBox extends Component {
  static instance = null;

  constructor(props) {
    super(props);
    NoticeBox.instance = this;
    this.state = {
      open: false
    };
  }

  setOpen = (open) => {
    this.setState({
      open: open
    });
  };

  close = () => {
    this.setOpen(false);
  };

  static show() {
    NoticeBox.instance.setOpen(true);
  }

  static hide() {
    NoticeBox.instance.setOpen(false);
  }

  render() {
    const { open } = this.state;
    return (
      <PostWrapper>
        <Modal open={open} onClose={this.close}>
          <Modal.Header>주의사항</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h4 className='SbCntHeading'>개인 정보 보호</h4>
              내용을 채워주세요
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={()=>this.setOpen(false)}>
              닫기
            </Button>
          </Modal.Actions>
        </Modal>
      </PostWrapper>
    );
  }
}

export default NoticeBox;
