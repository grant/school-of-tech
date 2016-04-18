import React, { Component } from 'react';

class Button extends Component {
  static get defaultProps() {
    return {
      value: '',
      onClick: ()=> {
      },
      className: '',
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`Button ${this.props.className}`}
        type='button'
        onClick={this.props.onClick.bind(this)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
