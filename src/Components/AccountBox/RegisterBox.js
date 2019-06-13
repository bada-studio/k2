import React from 'react';
import { Button, Image, Checkbox, Label } from 'semantic-ui-react';
import { ContentBox } from '../index';
import './RegisterBox.css';
import bean3 from './../../Images/bean3.png';
import klay from './../../Images/klay.png';

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

  <div className="RegisterBox">
    <div>
      <ContentBox>
        <div>
          <div className="BoxBody">
            사전 등록자를 위한 특별한 혜택!
            <div className="RewardBox">
              <div className="ui two column grid">
                <div className="column">
                  <div className="ui">
                    <Image src={bean3} className="centered RewardIcon"/>
                    <span className="RewardText">100 매직빈</span>
                  </div>
                </div>
                <div className="column">
                  <div className="ui">
                    <Image src={klay} className="centered RewardIcon"/>
                    <span className="RewardText">500 KLAY</span><br/>
                    <span className="NoticeText">(1,000명 추첨)</span>
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
              <div className="ButtonBox">
                <Button className="Button gray fluid large" onClick={onClickLogout}>로그아웃</Button>
              </div>
            </div>

            <div className={account == null && oauth != null ? "" : "hidden"}>
              <div className="MobileBox">
                <div className="ui labeled input fluid big">
                  <div className="ui label">
                    010
                  </div>
                  <input type="text" pattern="[0-9]*" onChange={onChangeInput} name="mobile" value={mobile}
                         placeholder="12345678" maxLength="8"/>
                </div>

                <div className="MobileCheckBox">
                  <Checkbox label='개인정보 사용 및 SMS 수신 동의'
                            onChange={onChangeCheckbox}
                            checked={smsAgree}
                            name="smsAgree"/>&nbsp;
                  <Label onClick={onClickNotice}>자세히 보기</Label>
                </div>

              </div>
              <div className="ButtonBox">
                <Button className="large blue fluid" onClick={onClickRegister}>예약 하기</Button>
              </div>
            </div>

            <div className={account == null && oauth == null ? "" : "hidden"}>
              <div className="ButtonBox">
                <Button id="kakao-login-btn" className="Button yellow fluid large" onClick={onClickLogin}>카카오 로그인</Button>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  </div>
);

export default RegisterBox;