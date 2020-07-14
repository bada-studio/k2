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
    </ContentBox>
  </div>
);

export default GameInfoBox;