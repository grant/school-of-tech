import React, { Component } from 'react';

class Button extends Component {
  static get defaultProps() {
    return {
      value: '',
      onClick: ()=>{},
      className: '',
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={`Button ${this.props.className}`}
        type='button'
        onClick={this.props.onClick.bind(this)}
        value={this.props.value}
      />
    );
  }
}

export default Button;
