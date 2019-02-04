import React, { Component } from "react";
import AuthService from "./AuthService";
import "./Login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="form-box">
        <div className="head"> Cellvault Admin</div>
        <form action="#" id="login-form">
          <div className="form-group">
            <label className="label-control">
              <span className="label-text" />
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label-control">
              <span className="label-text" />
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <input value="SUBMIT" type="submit" className="btn" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    const { username, password } = this.state;
    // Login to App
    const Auth = new AuthService()
    console.log("%cGet User Info: ", "background: lightGreen; color: green;", Auth)
    return Auth.login(username, password)
  }
}

export default Login;
