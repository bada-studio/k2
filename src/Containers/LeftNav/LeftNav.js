import React, { Component } from 'react';
import { List } from "semantic-ui-react";
import { NoticeBox, PurchaseLogBox } from '../index';
import accountService from '../../Services/AccountService';
import './LeftNav.css';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: accountService.account,
      address: accountService.address
    };

    accountService.ee.on('updated', this.onAccountUpdated);
  }

  onAccountUpdated = () => {
    this.setState({
      account: accountService.account,
      address: accountService.address
    });
  };

  onClickLogin = () => {
    accountService.kakaoSignup();
  };

  onClickLogout = async() => {
    accountService.clearAuth();
  };

  onClickDeposit = async() => {
    NoticeBox.show();
  };

  onClickPurchaseLog = async() => {
    PurchaseLogBox.show();
  };

  render() {
    const { account } = this.state;

    return (
        <div>
          { account ?
            <List divided>
            <List.Item>
              <List.Content className='MenuItem'>
                <List.Header>{account.name}</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className='MenuItem' onClick={this.onClickLogout}>
                로그아웃
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className='MenuItem' onClick={this.onClickDeposit}>
                입금
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className='MenuItem' onClick={this.onClickWithdraw}>
                출금
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className='MenuItem' onClick={this.onClickPurchaseLog}>
                구매 내역 보기
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content className='MenuItem' onClick={this.onClickWithdrawLog}>
                출금 내역 보기
              </List.Content>
            </List.Item>
              <List.Item>
              </List.Item>
            </List>
          :
          <List celled>
            <List.Item>
            <List.Content className='MenuItem' onClick={this.onClickLogin}>
            로그인
            </List.Content>
            </List.Item>
          </List>
          }
        </div>
    );
  }
}

export default LeftNav;