import React, { Component } from 'react';
import './App.css';
import CircleType from 'circletype';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
      radius1: 150,
      radius2: 200
    };
  }
  componentDidUpdate() {
    this.renderText();
  }

  renderText() {
    let top = document.getElementById('example1');
    let bottom = document.getElementById('example2');

    new CircleType(document.getElementById('example1'))
      .radius(this.state.radius1).forceHeight(true);
    new CircleType(document.getElementById('example2'))
      .dir(-1)
      .radius(this.state.radius2);


  }

  render() {
    const onTextChange = (id, text) => {
      const state = {};
      state[id] = text;
      this.setState(state);
    };

    return (
      <div className="container">
        <section className="collarcontainer">
          <div className="collar-img">
            <img src="./img/collar.png" alt="" />
          </div>
        </section>
        <section className="sub" id="sub1">
          <div className="example">
            <h3 id="example1">{this.state.text1}</h3>
          </div>
          <div className="clr"></div>
        </section>
        <section className="sub" id="sub2">
          <div className="example">
            <h3 id="example2">{this.state.text2}</h3>
          </div>
          <div className="clr"></div>
        </section>
        <div className="inputs">
          <Input id="text1" onChange={onTextChange}/>
          <Input id="text2" onChange={onTextChange}/>
          <Input id="radius1" onChange={onTextChange}/>
          <Input id="radius2" onChange={onTextChange}/>
        </div>
      </div>
    );
  }
}

export default App;
