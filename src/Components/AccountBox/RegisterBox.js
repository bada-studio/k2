import React from 'react';
import { Button, Image, Checkbox, Label } from 'semantic-ui-react';
import { ContentBox } from '../index';
import './RegisterBox.css';
import bean3 from './../../Images/bean3.png';
import klay from './../../Images/klay.png';
import title_text from './../../Images/title_text.png';

const RegisterBox = ({
  account,
  oauth,
  mobile,
  smsAgree,
  onChangeInput,
  onChangeCheckbox,
  onClickLogin,
  onClickLogout,
  onClickNotice,
  onClickRegister}) => (

  <div className="RegisterBox" id="reg">
    <div>
      <ContentBox>
        <div>
          <div className="BoxBody">
            <div className="ui">
              <div className="content headline">사전등록
              </div>
            </div>
            <p></p>
            <div className="RewardBox">
              <div className="ui two column grid container">
                <div className="column">
                  <div className="ui">
                    <Image src={bean3} className="centered RewardIcon"/>
                    <div className="ui midium header">매직빈 200개
                      <div className="ui sub header">대상: 모든 사전등록자</div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui">
                    <Image src={klay} className="centered RewardIcon"/>
                    <div className="ui midium header">KLAY 500개
                      <div className="ui sub header">대상: 1,000명 추첨</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={account ? "" : "hidden"}>
              <div className="DoneBox">
                사전등록을 완료하셨습니다.
              </div>
              <div className="ui ButtonBox cointainer">
                <Button className="ui Button gray fluid large" onClick={onClickLogout}>로그아웃</Button>
              </div>
            </div>

            <div className={account == null && oauth != null ? "" : "hidden"}>
              <div className="ui MobileBox container">
                <div className="ui labeled input fluid big">
                  <div className="ui label">
                    010 -
                  </div>
                  <input type="text" pattern="[0-9]*" onChange={onChangeInput} name="mobile" value={mobile}
                         placeholder="12345678" maxLength="8"/>
                </div>

                <div className="ui MobileCheckBox container">
                  <Checkbox label='개인정보 사용 및 SMS 수신 동의'
                            onChange={onChangeCheckbox}
                            checked={smsAgree}
                            name="smsAgree"/>&nbsp;
                  <Label onClick={onClickNotice}>자세히 보기</Label>
                </div>

              </div>
              <div className="ui ButtonBox1 container">
                <Button className="ui Button huge black fluid" onClick={onClickRegister}>사전등록 완료하기 - 전화번호 제출</Button>
              </div>
            </div>

            <div className={account == null && oauth == null ? "" : "hidden"}>
              <div className="ui ButtonBox container">
                <Button id="kakao-login-btn" className="ui Button yellow huge" onClick={onClickLogin}>사전등록하기 - 카카오 로그인</Button>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default RegisterBox;