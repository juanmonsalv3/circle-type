import React, { Component } from 'react';

class Canvas extends Component {
  renderCanvas() {
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  render() {
      return (
        <div id={this.props.id}>
          <canvas ref="canvas" width={600} height={600} />
        </div>
      );
  }
}

export default Canvas;