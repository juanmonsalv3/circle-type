import React, { Component } from 'react';

class Input extends Component {

  render() {
    const onTextChange = (e) => {
      this.props.onChange(this.props.id, e.target.value);
    };

    return (
      <div className="input" id={this.props.id}>
        <input type="text" className="text-input" onChange={onTextChange}/>
      </div>
    );
  }
}

export default Input;