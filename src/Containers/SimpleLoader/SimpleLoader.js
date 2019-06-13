import React, {Component} from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import './SimpleLoader.css'

class SimpleLoader extends Component {
  static instance = null;

  constructor(props) {
    super();
    SimpleLoader.instance = this;
    this.state = {
      refCount: 0
    };
  }

  addRefCount(add) {
    let cnt = this.state.refCount + add;
    this.setState({
      refCount:cnt
    });
  }

  static show() {
    SimpleLoader.instance.addRefCount(1);
  }

  static hide() {
    SimpleLoader.instance.addRefCount(-1);
  }

  render() {
    let active = this.state.refCount > 0;

    return (
      <div>
        { active ?
        <div className="SimpleLoader">
          <Dimmer active={active}>
            <Loader />
          </Dimmer>
        </div>
      : null }
      </div>
    );
  }
}

export default SimpleLoader