import React from 'react';
import './GameInfoBox.css';
import { Button, Image, Checkbox, Label } from 'semantic-ui-react';
import { ContentBox } from '..';
import play1 from './../../Images/play1.jpg';
import play2 from './../../Images/play2.jpg';
import play3 from './../../Images/play3.jpg';
import play4 from './../../Images/play4.jpg';

const GameInfoBox = ({}) => (
  <div className="GameInfoBox" id="gameinfo">
    <ContentBox>
    <div>
    <div className="content headline">클레이튼나이츠 소개</div>      
      <div className="ui four column doubling stackable grid container Description1">
        <div className="column">
          <div className="ui">
            <Image src={play1} className="centered Playimage"/>
          </div>
        </div>
        <div className="column">
          <div className="ui">
            <Image src={play2} className="centered Playimage"/>
          </div>
        </div>
        <div className="column">
          <div className="ui">
            <Image src={play3} className="centered Playimage"/>
          </div>
        </div>
        <div className="column">
          <div className="ui">
            <Image src={play4} className="centered Playimage"/>
          </div>
        </div>
      </div>
    </div>

    <div className="ui two column doubling stackable grid container Description2">
      <div className="column">
        <div className="ui content longtext container">
        <div className="ui huge header">KEEP THE VILLAGE</div> 
          <div className="boldtext">클레이튼 기사와 함께 마을을 지켜주세요.</div>
          클레오(기사), 안나(마법사), 루크(궁수)와 함께 클레이튼 마을을 공격하는 고블린을 물리쳐 보아요. 
          더 많은 고블린을 물리칠 수록, 더 소중한 재료를 모을 수 있어요.
          <br/>
          <br/>
          <div className="boldtext">다양한 아이템을 제작해보아요.</div>
          나무, 철 호랑이뼈 등 70여가지의 재료를 전략적으로 조합하여 기사의 검, 암살자의 궁, 성기사의 아머 등 200여가지의 아이템을 제작해 보아요.
          <br/>
          <br/>
          <div className="boldtext">클레이튼 마을을 건설하세요.</div>
          기사의 집, 궁수의 탑, 매직워터 분수 등 다양한 건물을 만들면서, 나만의 클레이튼 마을을 건설하고 발전시켜 보아요. 
          <br/>
        </div>
      </div>
      <div className="column">
        <div className="ui content longtext container">
        <div className="ui huge header">ENJOY BLOCKCHAIN</div> 
          <div className="boldtext">누구나 즐길수 있는 블록체인 게임입니다.</div>
          카카오로 로그인하면 누구나 블록체인 기술을 경험할 수 있어요. 복잡한 블록체인 계정만들기, 계정연동하기 필요없이 카카오로 로그인하고 바로 시작하세요.
          <br/>
          <br/>
          <div className="boldtext">>클레이튼의 암호화폐 클레이(Klay)를 획득해 보아요.</div>
          게임을 즐기면서 클레이(Klay)를 획득할 수 있어요. 획득한 클레이(Klay)로 게임을 즐기고, 친구들과 함께 나눠 보아요.
          <br/>
          <br/>
          <div className="boldtext">여러분이 만든 모든것은 여러분의 소유입니다.</div>
          게임을 즐기며 제작한 아이템은 블록체인의 NFT(non-fungible tokens)기술을 통해 영원히 여러분이 소유하게 됩니다.<br/>
        </div>
      </div>
    </div>
    </ContentBox>
  </div>
);

export default GameInfoBox;