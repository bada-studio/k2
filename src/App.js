import React, { Component } from "react";
import { Footer, SimpleLoader } from "./Components";
import Alert from 'react-s-alert';
import { 
  TitleBox, 
  GameInfoBox 
} from './Components';
import {
  HeadingBox,
  NoticeBox,
  AlertBox } from "./Containers";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  };

  render() {
    return (
      <div className="App">
        <div class="ui segment seg" id="home">
          <div class="ui sticky">
            <div class="ui inverted segment MenuBox fluid container">
            <div class="ui inverted secondary pointing menu">
              <a class="item" href="#home">
                홈
              </a>
              <a class="item" href="#reg">
                사전등록
              </a>
              <a class="item" href="#gameinfo">
                게임소개
              </a>
              <div class="right menu">
                <a class="ui item" href="https://www.facebook.com/Knightstoryklaytn">
                  <i class="facebook icon"></i>
                </a>
              </div>
            </div>
            </div>

            <TitleBox/>
            <HeadingBox/>
            <GameInfoBox/>
            
            <NoticeBox/>
            <Footer/>

            <AlertBox/>
            <Alert stack={{limit: 3}} />
            <SimpleLoader />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
