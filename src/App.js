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
import MetaTags from 'react-meta-tags';

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
      <div className="wrapper">
        <MetaTags>
          <title>클레이튼 나이츠 : Klaytn Knights</title>
          <meta name="google-site-verification" content="cb0xW8VuDJ6cA0crHJfg9QAN7YrDYhZLLJkJo1eaG1E" />
          <meta name="naver-site-verification" content="065e3c27ed26edbb9f2f5415691f03fe16a055da"/>
          <meta name="description" content="클레이튼 나이츠는 누구나 즐길 수 있는 카카오 최초의 블록체인 게임입니다."/>
          <meta property="og:title" content="클레이튼 나이츠 : Klaytn Knights" />
          <meta property="og:image" content="./../../Images/title_v0.png" />
        </MetaTags>
      </div>
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
                <a class="ui item" href="https://www.facebook.com/klaytnknights">
                  <button class="ui facebook icon compact button"><i class="facebook icon"></i></button>
                </a>
              </div>
            </div>
            </div>

            <TitleBox/>
            <HeadingBox/>
            <div class="ui divider"></div>
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
