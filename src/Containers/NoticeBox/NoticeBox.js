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
          <Modal.Header>개인정보이용 및 SMS 수신동의</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              주식회사 비스킷랩스는 클레이튼 나이츠 사전등록 이벤트를 위해 개인정보를 수집 및 이용합니다.<br/>
              - 수집 및 이용 목적: 클레이튼 나이츠 사전등록과 정식출시와 관련된 안내 문자 발송<br/>
              - 수집항목: 휴대폰 번호<br/>
              - 보유 및 이용 기간: 수집일로 부터 1년<br/>
              - 보유 및 이용 기간 경과 또는 수집 목적 달성 시 즉시 파기<br/>
              <br/>
              개인정보 수집 및 이용 동의를 거부하실 수 있으며, 동의 거부시 사전등록 및 이벤트 알림 서비스를 받으실 수 없습니다.<br/>

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
