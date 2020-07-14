import Config from "../Config/Config";
import www from "../Utils/www.js";
import Alert from "react-s-alert";
import EventEmitter from 'events';

class AccountService {
  ee = new EventEmitter();

  constructor() {
    this.kakao = window.kakao;
    this.oauth = null;
    this.account = JSON.parse(localStorage.getItem('account'));
    window.kakao = null;
  }

  clearAuth() {
    localStorage.removeItem('account');
    this.auth = null;
    this.account = null;
    this.oauth = null;
    this.ee.emit('updated')
  }

  isWebview() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) ||
           (ua.indexOf("FBAV") > -1) ||
           (ua.indexOf("Instagram") > -1) ||
           (ua.indexOf("Line") > -1);
  }

  kakaoSignup = async() => {
    let throughTalk = true;
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      throughTalk = false;
    }

    this.kakao.Auth.login({
      success: (authObj) => {
        this.oauth = authObj;
        this.getPreRegister(authObj.access_token);
      },
      fail: (err) => {
        let message = '카카오 로그인에 실패했습니다:' + JSON.stringify(err);
        Alert.error(message, {
          position: 'top-right',
          effect: 'slide',
          beep: false,
          timeout: 3000
        });
      },
      throughTalk: throughTalk
    });
  };

  // get pre-registered account for the kakao account id
  getPreRegister = async (accessToken) => {
    const path = 'v1/pre/account/' + accessToken;
    this.account = await www.get(Config.amApi + path, true);
    if (this.account) {
      localStorage.setItem('account', JSON.stringify(this.account));
    }

    this.ee.emit('updated')
    return this.account;
  };

  // pre-register account
  preRegister = async (mobile) => {
    const path = 'admin/v1/klaytn/preregistration';
    let data = {
      oauthid:"010" + mobile,
      name:"010" + mobile,
      mobile:"010" + mobile
    };

    this.account = await www.post(Config.amApi + path, data, true);
    if (this.account) {
      localStorage.setItem('account', JSON.stringify(this.account));
    }

    this.ee.emit('updated')
    return this.account;
  };
}

export default new AccountService();

