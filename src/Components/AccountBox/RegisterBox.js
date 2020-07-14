import React from 'react';
import { Button, Image, Checkbox, Label } from 'semantic-ui-react';
import { ContentBox } from '../index';
import './RegisterBox.css';
import bean3 from './../../Images/bean3.png';
import klay from './../../Images/klay.png';
import item425 from './../../Images/item425.png';
import pet24 from './../../Images/pet24.png';

const RegisterBox = ({
  registered,
  smsAgree,
  onChangeInput,
  onChangeCheckbox,
  onClickNotice,
  onClickRegister}) => (

  <div className="RegisterBox" id="reg">
    <div>
      <div className="RegisterInnerBox">
        <div>
          <div className="BoxBody">
            <div className="ui">
              <div className="content headline">사전등록
              </div>
            </div>
            <div className="RewardBox">
              <div className="ui two column grid container">
                <div className="column">
                  <div className="ui">
                    <Image src={klay} className="centered RewardIcon"/>
                    <div className="ui midium header">KLAY 100개
                      <div className="ui sub header">대상: 777명 추첨</div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui">
                    <Image src={bean3} className="centered RewardIcon"/>
                    <div className="ui midium header">12,000원 상당의 매직빈
                      <div className="ui sub header">대상: 모두</div>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="ui">
                    <Image src={item425} className="centered RewardIcon"/>
                    <div className="ui midium header">미스릴 세트, 티타늄 세트
                      <div className="ui sub header">대상: 모두</div>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="ui">
                    <Image src={pet24} className="centered RewardIcon"/>
                    <div className="ui midium header">레어 펫 2개
                      <div className="ui sub header">대상: 모두</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div>
            <div className={registered ? "" : "hidden"}>
              <div className="ui ButtonBox container">
                <br/>
                <br/>
                사전등록을 완료하셨습니다.
              </div>
            </div>

            <div className={!registered ? "" : "hidden"}>
              <div className="MobileBox container">
                <div className="ui labeled input fluid big">
                  <div className="ui label">
                    010 -
                  </div>
                  <input type="text" pattern="[0-9]*" onChange={onChangeInput} name="mobile"
                         placeholder="12345678" maxLength="8"/>
                </div>

                <div className="MobileCheckBox container">
                  <Checkbox label='개인정보 사용 및 SMS 수신 동의'
                            onChange={onChangeCheckbox}
                            checked={smsAgree}
                            name="smsAgree"/>
                  <Label onClick={onClickNotice}>자세히</Label>
                </div>

              </div>
              <div className="ButtonBox1 container">
                <Button className="ui Button huge black fluid" onClick={onClickRegister}>사전등록 신청</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterBox;