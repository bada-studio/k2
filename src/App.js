import React, { Component } from "react";
import { Footer, SimpleLoader } from "./Components";
import Alert from 'react-s-alert';
import { GameInfoBox } from './Components';
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
        <HeadingBox/>
        <GameInfoBox/>
        <NoticeBox/>
        <Footer/>

        <AlertBox/>
        <Alert stack={{limit: 3}} />
        <SimpleLoader />
      </div>
    );
  }
}

export default App;
