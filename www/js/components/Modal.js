import React, { Component } from 'react';

/**
 * A centered modal.
 */
class Modal extends Component {
  static get defaultProps() {
    return {
      headerTitle: 'untitled',
    };
  }

  render() {
    return (
      <section className="Modal">
        <header className="header">
          <div className="title">{this.props.headerTitle}</div>
          <button className="close">✕</button>
        </header>
        <div className="content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Modal;
