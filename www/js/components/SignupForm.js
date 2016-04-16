import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
      <div className="SignupForm">
        <h1>Login</h1>
        <form method="post" action="/login">
          <label for="username">Username</label>
          <input type="text" id="username" name="username"/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button type="submit">Login</button>
        </form>

        <h1>Logout</h1>
        <form method="post" action="/logout">
          <button type="submit">Logout</button>
        </form>

        <h1>Sign up</h1>
        <form method="post" action="/signup">
          <label for="email">Email</label>
          <input type="email" id="email" name="email"/>
          <label for="username">Username</label>
          <input type="text" id="username" name="username"/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button type="submit">Sign up!</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;