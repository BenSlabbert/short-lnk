import React from 'react';
import { Link } from 'react-router';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    // form validation
    this.setState({
      error: 'an error.'
    });
  };

  render() {
    return (
      <div>
        <h1>Sign up here</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Create Account</button>
        </form>
        <Link to="/">
          login here
        </Link>

      </div>
    );
  };
}