import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logIn } from "../../actions/authActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.logIn({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    const { username, password } = this.state;
    const { isAuth } = this.props;
    if (isAuth) {
      return <Redirect to="/" />;
    }
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Do not have an account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ isAuth: state.auth.isAuthenticated }),
  { logIn }
)(Login);
