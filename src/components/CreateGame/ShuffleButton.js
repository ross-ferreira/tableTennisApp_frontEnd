import React, { useState } from "react";


class ShuffleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
      handleClick() {
          this.setState(function(prevState) {
              return {isToggleOn: !prevState.isToggleOn};
          });
      }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  export default ShuffleButton