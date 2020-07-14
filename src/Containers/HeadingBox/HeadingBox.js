import React, {Component} from 'react';
import { RegisterBox } from '../../Components';
import { NoticeBox } from '../../Containers';
import { Image } from 'semantic-ui-react';
import Alert from 'react-s-alert';
import accountService from '../../Services/AccountService';
import './HeadingBox.css';

class HeadingBox extends Component {
  constructor(props) {
    super(props);
    let registered = Boolean(localStorage.getItem('registered'));

    this.state = {
      registered: registered,
      mobile: "",
      smsAgree: false
    };

    accountService.ee.on('updated', this.onAccountUpdated);
  }

  onAccountUpdated = () => {
    console.log(accountService.oauth);
    this.setState({
      account: accountService.account,
      oauth: accountService.oauth,
    });
  };

  onClickRegister = async() => {
    let mobile = this.state.mobile;
    if (mobile.length < 7) {
      this.showAlert(false,"핸드폰 번호를 확인해 주세요.");
      return;
    }

    if (!this.state.smsAgree) {
      this.showAlert(false,"개인 정보 사용 및 SMS 수신에 동의해주세요.");
      return;
    }

    let account = await accountService.preRegister(mobile);
    if (account == null) {
      this.showAlert(false,"사전 등록 실패");
    } else {
      localStorage.setItem('registered', 'true');
      this.setState({
          registered: true,
        })
      this.showAlert(true,"사전 등록 성공!");
    }
  };

  onClickNotice = async() => {
    NoticeBox.show();
  };

  onChangeInput = (e) => {
    const val = e.target.value;

    if (e.target.validity.valid) {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else if (val === '' || val === '-') {
      this.setState({
        [e.target.name]: val
      })
    }
  };

  onChangeCheckbox = (event: React.FormEvent<HTMLInputElement>, data) => {
    this.setState({ [data.name]: data.checked });
  };

  showAlert(success, message) {
    let config = {
      position: 'top-right',
      effect: 'slide',
      beep: false,
      timeout: 3000
    };

    if (success) {
      Alert.success(message, config);
    } else {
      Alert.error(message, config);
    }
  }

  render() {
    const {
      registered,
      smsAgree
    } = this.state;

    return (
      <div className="HeadingBox">
        <RegisterBox
          registered = {registered}
          smsAgree = {smsAgree}
          onChangeInput = {this.onChangeInput}
          onChangeCheckbox = {this.onChangeCheckbox}
          onClickNotice = {this.onClickNotice}
          onClickRegister = {this.onClickRegister}
        />
      </div>
    );
  }
}

export default HeadingBox;
